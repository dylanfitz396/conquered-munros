import Link from "next/link";
import { MouseEventHandler } from "react";

interface NavItemProps {
    handleClick: MouseEventHandler<HTMLAnchorElement>;
    href: string;
    text: string;
    isSelected: boolean;
}

const NavItem = ({handleClick, href, text, isSelected}: NavItemProps) => {
    return (
        <li>
            <Link onClick={handleClick} href={href} className={`${isSelected ? 'md:text-blue-700' : 'text-gray-900'} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>{text}</Link>
        </li>
    )
}

export default NavItem;