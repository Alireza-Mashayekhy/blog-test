import Link from 'next/link';

export default function BlogCard({
    id,
    title,
    body,
    skeleton,
}: {
    id?: number;
    title?: string;
    body?: string;
    skeleton?: boolean;
}) {
    if (skeleton) {
        return (
            <div className="border rounded-lg p-3 md:p-5 animate-pulse">
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
            </div>
        );
    }
    return (
        <Link
            href={`/${id}`}
            className="border rounded-lg p-3 md:p-5 cursor-pointer"
        >
            <h2 className="text-lg md:text-xl font-bold mb-5 line-clamp-1">
                {title}
            </h2>
            <p className="text-justify line-clamp-2 text-sm md:text-base">
                {body}
            </p>
        </Link>
    );
}
