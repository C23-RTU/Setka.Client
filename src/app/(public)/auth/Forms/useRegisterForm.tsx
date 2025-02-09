import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import type { SubmitHandler, UseFormReset } from 'react-hook-form';
import toast from 'react-hot-toast';

import { PUBLIC_PAGE } from '@/lib/config/routes.config';

import { type TRegisterDataSchema } from '@/lib/types/register.type';
import { AuthService } from '@/services/auth.service';

export const useRegisterForm = (
    reset: UseFormReset<TRegisterDataSchema>,
    selectedInstitute: { id: number; name: string } | null,
) => {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const { mutateAsync, isPending: isRegisterPending } = useMutation({
        mutationKey: ['register'],
        mutationFn: async (data: TRegisterDataSchema) => await AuthService.register(data),
        onError: (error) => {
            console.log(error.message);
        },
    });

    const submitHandler: SubmitHandler<TRegisterDataSchema> = (data) => {
        const updatedData = {
            ...data,
            instituteId: selectedInstitute?.id || null,
        };

        console.log(updatedData);

        toast.promise(
            mutateAsync(updatedData),
            {
                loading: 'Регистрация пользователя...',
                success: () => {
                    startTransition(() => {
                        reset();
                        router.push(PUBLIC_PAGE.AUTH('login'));
                    });

                    return 'Успешная регистрация!';
                },
                error: (error: unknown) => {
                    if (axios.isAxiosError(error)) {
                        return error.response?.data.detail;
                    }
                },
            },
            {
                id: 'error',
            },
        );
    };

    const isLoading = isPending || isRegisterPending;

    return {
        submitHandler,
        isLoading,
    };
};
