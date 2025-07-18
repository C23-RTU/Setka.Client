import { Copy, EllipsisIcon, ExternalLink, Share2, UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { AUTH_PAGE } from '@/lib/config/routes.config';

import type { PostDetailDTO } from '@/api/axios-client/models';

export function MoreDropList({ post }: { post: PostDetailDTO }) {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-10 shrink-0 grow-0 hover:bg-neutral-700">
                    <EllipsisIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 border-neutral-700 bg-neutral-900">
                <DropdownMenuItem
                    className="font-inter flex gap-2 font-light"
                    onClick={() => router.push(AUTH_PAGE.CLUB(post.club.id))}
                >
                    <UserIcon size={20} />
                    Перейти в клуб
                </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="font-inter flex gap-2 font-light">
                        <Share2 size={20} />
                        Поделиться
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        `https://setka-rtu.ru${AUTH_PAGE.POST_COMMENTS(post.id)}`
                                    );
                                    toast.success('Ссылка скопирована');
                                }}
                            >
                                <Copy size={20} /> Скопировать ссылку
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator
                                            .share({
                                                title: document.title,
                                                url: `https://setka-rtu.ru${AUTH_PAGE.POST_COMMENTS(post.id)}`,
                                            })
                                            .catch(console.error);
                                    } else {
                                        // На случай если юзер сидит с каким-нибудь Netscape Navigator.
                                        console.log('Web Share API not supported');
                                        navigator.clipboard.writeText(
                                            `https://setka-rtu.ru${AUTH_PAGE.POST_COMMENTS(post.id)}`
                                        );
                                        toast.success('Не удалось поделиться, ссылка скопирована в буфер обмена');
                                    }
                                }}
                            >
                                <ExternalLink size={20} /> Поделиться в...
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
