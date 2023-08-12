"use client"

import Link from "next/link";
import { TiHome, TiBrush, TiHeartHalfOutline } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPerson, FaPeopleGroup } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";

import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { CgLogOut } from "react-icons/cg";
import { useRouter } from "next/navigation";

function LeftSide() {

    const router = useRouter();
    return (
    <section className="hidden md:flex custom-scrollbar sticky left-0 top-0 z-20 h-screen w-fit flex-col justify-between overflow-auto bg-dark-2 pb-5 pt-28 max-md:hidden; bg-[#112240]">
        <div className="flex w-full flex-1 flex-col gap-6 px-6">
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


            <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4'>
            <CgLogOut className="text-2xl" />
              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
        </div>
    </section>
    )
    }
    
export default LeftSide;