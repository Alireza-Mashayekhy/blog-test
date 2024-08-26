'use client';

import BlogCard from '@/components/BlogCard';
import { getPostsList } from '@/service/api';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';

export default function Home() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}

function App() {
    interface BlogType {
        id: number;
        title: string;
        body: string;
    }
    const { data, isPending } = useQuery({
        queryKey: ['get-blogs-list'],
        queryFn: async () => {
            const res = await getPostsList();
            return res.data;
        },
    });
    if (isPending) {
        return (
            <div className="pt-28 md:pt-48 px-4 md:px-10 animate-pulse">
                <h1 className="w-full text-center font-bold text-3xl md:text-5xl mb-6 md:mb-10">
                    Posts
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
                    {[...new Array(12)].map(() => {
                        return <BlogCard skeleton />;
                    })}
                </div>
            </div>
        );
    }
    return (
        <div className="pt-28 md:pt-48 px-4 md:px-10">
            <h1 className="w-full text-center font-bold text-3xl md:text-5xl mb-6 md:mb-10">
                Posts
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
                {data.map((blog: BlogType) => {
                    return (
                        <BlogCard
                            key={`blog-${blog.id}`}
                            id={blog.id}
                            title={blog.title}
                            body={blog.body}
                        />
                    );
                })}
            </div>
        </div>
    );
}
