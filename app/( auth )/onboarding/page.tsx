import AccountProfile from '@/components/forms/AccountProfile';
import '../../globals.css'

import { currentUser } from '@clerk/nextjs';
import { userInfo } from 'os';

async function Page() {

    const user =  await currentUser();

    const userData = {
        id: user?.id,
        objectId: "sdfasdf",
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        iamge: userInfo?.image || user?.imageUrl
    }
    return(
        <main className="mx-auto flex max-w-5xl flex-col justify-start  py-20 bg-[#09182f]">
            <h1 className='text-4xl'>Onboarding</h1>
            <p className="mt-5 text-base-regular text-light-2">
               Complete your profile to use LIO 
            </p>

            <section className='mt-9 bg-[#112240] p-10'>
               <AccountProfile user={userData} btnTitle="continue"/> 
            </section>
        </main>
    )
}

export default Page;