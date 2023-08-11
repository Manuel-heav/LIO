import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { CgLogOut } from "react-icons/cg";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";

function Header() {
    return (
        <nav className='fixed top-0 z-30 flex w-full items-center justify-between bg-[#112240] px-6 py-3'>
        <Link href="/" className='flex items-center'>
        <Image 
          width={40}
          height={40}
          alt='logo' src="/logo.png"/>
      <h1 className='text-xl'>LIO</h1>
        </Link> 
        <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <CgLogOut className="md:text-2xl" />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
      </nav>
    )
    }
    
export default Header;