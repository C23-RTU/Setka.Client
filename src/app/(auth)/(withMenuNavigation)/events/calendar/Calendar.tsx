'use client';

import { useQuery } from '@tanstack/react-query';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';

import EventCalendar from '@/components/EventCalendar/EventCalendar';
import { EventCard } from '@/components/EventCard/EventCard';

import { useInfinityScroll } from '@/hooks/useInfinityScroll';

import { eventsApi } from '@/api/api';
import type { EventDetailDTO } from '@/api/axios-client';

import { Header, HeaderTitle } from '@/hoc/Header/Header';
import { MainContent } from '@/hoc/MainContent/MainContent';

const toUTCDate = (date: Date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};

export function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { data: allEvents } = useQuery({
        queryKey: ['fetch-all-events-calendar'],
        queryFn: async () => (await eventsApi.eventsGetAll()).data,
    });

    const calendarEvents = allEvents?.reduce(
        (acc, event) => {
            const date = parseISO(event.startTime);
            const utcDate = toUTCDate(date);
            const dateKey = format(utcDate, 'yyyy-MM-dd');
            if (!acc[dateKey]) acc[dateKey] = [];
            acc[dateKey].push(event);
            return acc;
        },
        {} as { [key: string]: EventDetailDTO[] }
    );

    const {
        ref,
        infiniteQuery: { data: eventsPages, isLoading },
    } = useInfinityScroll({
        queryKey: ['fetch-events-calendar', selectedDate.toISOString()], // eslint-disable-line @tanstack/query/exhaustive-deps
        queryFn: async ({ pageParam = 0 }) => {
            const utcDate = toUTCDate(selectedDate);
            return (await eventsApi.eventsGetByDate(utcDate.toISOString(), pageParam, 10)).data;
        },
        pageSize: 10,
    });

    const hasEvents = eventsPages?.pages.some((page) => page.length > 0);

    return (
        <div className="page">
            <Header>
                <HeaderTitle>Календарь событий</HeaderTitle>
            </Header>
            <MainContent>
                <EventCalendar events={calendarEvents || {}} onDateChange={(date) => setSelectedDate(date)} />

                <div className="flex gap-4 flex-col">
                    {hasEvents
                        ? eventsPages?.pages
                              .flatMap((page) => page)
                              .map((event) => <EventCard key={event.id} event={event} />)
                        : !isLoading && (
                              <div className="w-full flex justify-center items-center text-muted-foreground py-4">
                                  В выбранный день событий нет
                              </div>
                          )}
                </div>
                <div ref={ref}></div>
            </MainContent>
        </div>
    );
}
