import Link from "next/link";

const MenuItem = ({title, address, Icon}) => {
    return(
        <>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
                <Icon className='text-2xl my-4 sm:hidden'/>
                <p className="hidden sm:inline-block my-4 text-sm">{title}</p>
            </Link>
        </>
    )
};

export default MenuItem;