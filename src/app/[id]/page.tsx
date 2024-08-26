'use client';

import { getPostDetail } from '@/service/api';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function Blog() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}

function App() {
    const params = useParams<{ id: string }>();

    const { data, isPending } = useQuery({
        queryKey: ['get-blog', params?.id],
        queryFn: async () => {
            const res = await getPostDetail({ id: params.id });
            return res.data;
        },
        enabled: !!params?.id,
    });

    if (isPending) {
        return (
            <div className="pt-28 md:pt-48 px-4 md:px-10 animate-pulse">
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-5"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-10"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
            </div>
        );
    }
    return (
        <div className="pt-28 md:pt-48 px-4 md:px-10">
            <h1 className="w-full text-start font-bold text-2xl md:text-4xl mb-5 md:mb-10">
                {data?.title}
            </h1>
            <p className="text-xl md:text-2xl text-justify">{data?.body}</p>
        </div>
    );
}
