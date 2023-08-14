function RightSide() {
    return (
        <section className="custom-scrollbar sticky right-0 top-0 z-20 hidden md:flex h-screen w-fit flex-col justify-between gap-12 overflow-auto bg-dark-2 px-10 pb-6 pt-28  bg-[#112240] max-xl:hidden;">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-light-1">Suggested Communities</h3>
            </div>

            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-light-1">Suggested Users</h3>
            </div>
        </section>
    )
}
    
export default RightSide;