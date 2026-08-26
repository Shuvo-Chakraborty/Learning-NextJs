"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const hendler = () => {
        router.push('/Login');
    };
    const links = [
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" },
        { title: "Services", path: "/services" },
        { title: "Categories", path: "/Categories" },
        { title: "dashboard", path: "/dashboard" },
        
    ];

    if (pathName.includes("/dashboard")) 
        return(
            <div className="bg-gray-100 p-6">Dashboard Layout</div>
        )



    return (
        <div>
            <nav className="bg-red-600 px-6 py-4 flex justify-between items-center">
                <h6 className="text-3xl">Next <span className="text-yellow-400">Hero</span></h6>
                <ul className="flex justify-between items-center space-x-4">
                    {links?.map((link) => (<Link className={pathName === link.path ? 'text-cyan-400' : 'text-white'} key={link.path} href={link.path}>{link.title}</Link>))}
                </ul>
                <button onClick={hendler} className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">Login</button>
            </nav>
        </div>
    );
}

export default Navbar;
