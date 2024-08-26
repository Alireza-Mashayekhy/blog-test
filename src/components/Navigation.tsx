import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/favicon.ico';

export default function Navigation() {
    const links = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'about',
            href: '/about-us',
        },
        {
            title: 'contact',
            href: '/contact-us',
        },
    ];
    return (
        <div className="w-full p-4 md:p-10 fixed">
            <div className="bg-indigo-500 bg-opacity-40 backdrop-blur w-full py-3 px-5 md:py-5 md:px-10 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-8">
                    {links.map((link) => {
                        return (
                            <Link
                                key={`link-${link.title}`}
                                className="font-bold md:text-lg"
                                href={link.href}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
                </div>
                <Image
                    src={logo}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12"
                    alt="logo"
                />
            </div>
        </div>
    );
}
