import Link from "next/link";
//text about project dsb
const NavLink=({href, title}) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-primary sm:text-xl rounded md:p-0 hover:text-black'>{title}</Link>
    )
}

export default NavLink;