import { BsPersonFill } from "react-icons/bs"
import { TiHome, TiBrush, TiHeartHalfOutline } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPerson, FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";

function BottomMobile() {
return (
    <div className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden custom-scrollbar">
        <div className="flex items-center justify-between xs:gap-3">
        <Link 
            href="/"
            key="home"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <TiHome className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Home</p>
            </Link>
            
            <Link 
            href="/search"
            key="search"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <AiOutlineSearch className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Search</p>
            </Link>
            
            <Link 
            href="/create-lio"
            key="create-lio"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <TiBrush className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Create LIO</p>
            </Link>
            
            <Link 
            href="/activity"
            key="activity"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <TiHeartHalfOutline className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Activity</p>
            </Link>
            
            <Link 
            href="/community"
            key="community"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <FaPeopleGroup className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Community</p>
            </Link>

            <Link 
            href="/me"
            key="me"
            className="relative flex items-center justify-start gap-4 rounded-lg hover:bg-sky-700 p-4"
            >
                <BsPersonFill className="text-3xl"/>
                <p className="text-light-1 max-lg:hidden">Me</p>
            </Link>

        </div>
    </div>
)
}

export default BottomMobile