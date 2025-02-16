'use client';

import Image from 'next/image';

import { SmallSubscribeButton } from './SmallSubscribeButton';

interface Props {
    image: string;
    name: string;
    description: string;
}

export function ClubCard({ image, name, description }: Props) {
    return (
        <figure className="flex w-full hover:cursor-pointer items-center" role="listitem">
            <Image src={image} alt={`${name}'s avatar`} width={32} height={32} className="rounded-lg w-12 h-12" />

            <div className="flex flex-col flex-grow ml-3 mr-3 justify-between overflow-hidden">
                <p
                    className="text-m font-geologica font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
                    title={name}
                >
                    {name}
                </p>
                <p
                    className="text-xs opacity-50 font-inter font-normal text-ellipsis overflow-hidden whitespace-nowrap"
                    title={description}
                >
                    {description}
                </p>
            </div>

            <SmallSubscribeButton />
        </figure>
    );
}
