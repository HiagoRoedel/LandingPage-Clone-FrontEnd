import Image from "next/image";

export default function Questions() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="shadow-xl flex flex-col items-center mb-12 p-6 rounded-sm">
                    <div className="w-full max-w-sm flex flex-col items-center">
                        <div className="mt-3 text-[64px] text-pink-100">
                            &quot;
                        </div>
                        <div className="text-black text-center text-xl mt-4">
                            <span>I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer.</span>
                        </div>
                        <div className="mt-3">
                            <Image
                                src="/home-avatar-kevin.webp"
                                alt="home-avatar-kevin"
                                width={95}
                                height={95}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <h1 className="text-[#3E54A3] font-bold">Kevin Powell</h1>
                            <span className="text-gray-600">Web Developer & YouTuber</span>
                        </div>
                    </div>
                </div>
                
                <div className="shadow-xl flex flex-col items-center mb-12 p-6 rounded-sm">
                    <div className="w-full max-w-sm flex flex-col items-center">
                        <div className="mt-3 text-[64px] text-pink-100">
                            &quot;
                        </div>
                        <div className="text-black text-center text-xl mt-4">
                            <span>Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!</span>
                        </div>
                        <div className="mt-3">
                            <Image
                                src="/home-avatar-jessica.webp"
                                alt="home-avatar-jane"
                                width={95}
                                height={95}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <h1 className="text-[#3E54A3] font-bold">Jessica Chan</h1>
                            <span className="text-gray-600">Web Developer & YouTuber</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
