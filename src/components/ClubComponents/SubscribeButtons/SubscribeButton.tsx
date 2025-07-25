import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SquareCheck, SquarePlus } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { clubsApi } from '@/api/api';
import type { ClubDetailDTO } from '@/api/axios-client/models';

import { Button } from '../../ui/button';

const UnsubSheetDynamic = dynamic(() => import('./UnsubSheet').then((mod) => mod.UnsubSheet), {
    ssr: false,
});

export function SubscribeButton({
    clubId,
    isBig = true,
    subscribed = false,
}: {
    clubId?: number;
    isBig: boolean;
    subscribed: boolean | undefined;
}) {
    const queryClient = useQueryClient();
    const [unsubVisible, setUnsubVisible] = useState<boolean>(false);

    const { mutateAsync: toggleSubscription, isPending: isSubscribePending } = useMutation({
        mutationKey: ['club-toggle-subscribe', clubId],
        mutationFn: async () => await clubsApi.clubsToggleSubscription(Number(clubId)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['fetch-clubs'] });
            queryClient.setQueryData(['fetch-club', clubId], (oldData: ClubDetailDTO | undefined) => {
                return {
                    ...oldData,
                    subscriberCount: subscribed
                        ? (oldData?.subscriberCount as number) - 1
                        : (oldData?.subscriberCount as number) + 1,
                    isUserSubscribed: !subscribed,
                };
            });
        },
    });

    const unsubSheetHandler = async () => {
        await toggleSubscription();
        setUnsubVisible(false);
        const { toast } = await import('react-hot-toast');
        toast.success('Вы отписались от клуба', { id: 'unsubscribe-toast' });
    };

    return (
        <figure>
            <div className="flex justify-center">
                {subscribed ? (
                    <Button
                        onClick={() => setUnsubVisible(true)}
                        className={`bg-background-light hover:bg-secondary font-geologica flex w-full justify-center ${isBig && 'p-3'}`}
                        disabled={isSubscribePending}
                    >
                        {isBig && <span>Вы подписаны</span>}
                        <SquareCheck />
                    </Button>
                ) : (
                    <Button
                        onClick={async () => {
                            await toggleSubscription();
                            const { toast } = await import('react-hot-toast');
                            toast.success('Вы подписались на клуб', { id: 'subscribe-toast' });
                        }}
                        className={`font-geologica hover:bg-primary flex w-full justify-center ${isBig && 'p-3'}`}
                        disabled={isSubscribePending}
                    >
                        {isBig && <span>Подписаться</span>}
                        <SquarePlus />
                    </Button>
                )}
            </div>
            <UnsubSheetDynamic
                unsubVisible={unsubVisible}
                setUnsubVisible={setUnsubVisible}
                onClick={unsubSheetHandler}
            />
        </figure>
    );
}
