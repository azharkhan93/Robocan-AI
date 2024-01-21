/* eslint-disable @next/next/no-img-element */
"use client"
/* eslint-disable @next/next/no-img-element */
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    submenu?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    {
        name: 'MyScan',
        href: '/',
        current: false,
        submenu: [
            { name: 'Submenu Item 1', href: '/submenu1', current: false },
            { name: 'Submenu Item 2', href: '/submenu2', current: false },
        ],
    },
    { name: 'Rho Trained Services', href: '/', current: false },
    { name: 'Traineroo Services', href: '/', current: false },
    { name: 'Company', href: '/', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto bg-white px-6 lg:py-4 lg:px-8 fixed top-0 w-full z-50 ">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/logoh.png'}
                                    alt="logo"
                                />
                                <img
                                    className="hidden h-full w-full lg:block"
                                    src={'/logoh.png'}
                                    alt="logo"
                                />
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <React.Fragment key={item.name}>
                                            {item.submenu ? (
                                                <Disclosure.Button
                                                    className={classNames(
                                                        item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                                        'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                                    )}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                                        'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                                    )}
                                                    aria-current={item.href ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                            {item.submenu && (
                                                <Transition
                                                    as={React.Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Disclosure.Panel static>
                                                        <div className="ml-4 space-y-2">
                                                            {item.submenu.map((submenuItem) => (
                                                                <Link
                                                                    key={submenuItem.name}
                                                                    href={submenuItem.href}
                                                                    className="text-black hover:text-black hover:opacity-100"
                                                                >
                                                                    {submenuItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                         <div className=" flex items-center" >
                         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#353D60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12.5H22" stroke="#353D60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2.5C14.5013 5.23835 15.9228 8.79203 16 12.5C15.9228 16.208 14.5013 19.7616 12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5V2.5Z" stroke="#353D60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className='ml-2'>
<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0113636 12V0.363636H7.85227V2.39205H2.47159V5.16477H7.44886V7.19318H2.47159V9.97159H7.875V12H0.0113636ZM19.7412 0.363636V12H17.6162L12.5537 4.67614H12.4685V12H10.0082V0.363636H12.1673L17.1901 7.68182H17.2923V0.363636H19.7412Z" fill="#353D60"/>
</svg>
</div>


                            </div>
                            <div className="lg:ml-4 flex items-center">
                                <Image
                                    src="/navend.png" // Replace with the actual image path
                                    alt="Premier Health Center"
                                    width={30}
                                    height={30}
                                />
                                <p className="ml-2 text-gray-800 font-semibold">Premier Health Center</p>
                                <svg width="15" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                    <path d="M4.5 8.25L9 12.75L13.5 8.25" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-8 w-8" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                    
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;


