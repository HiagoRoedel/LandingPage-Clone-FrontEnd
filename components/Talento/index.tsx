import Image from "next/image";

export default function Talento() {
    return (
        <div className="bg-[#3e54a3]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="grid-1 mt-12">
                        <div className="flex flex-col justify-center">
                            <div className="title">
                                <h1 className="text-4xl text-white">Are you looking to hire talented, passionate developers?</h1>
                            </div>
                            <div className="subtitle mt-4">
                                <span className="text-2xl text-white">
                                    Our Hiring Platform helps you connect with our diverse community of talented early-career developers. Stop wading through hundreds of resumes and get chatting to skilled developers in minutes.
                                </span>
                            </div>
                            <div className="button mt-8">
                                <a className="text-[#3e54a3] rounded-full font-bold italic bg-white w-full max-w-[275px] h-[40px] flex items-center justify-center">
                                    START HIRING DEVELOPERS
                                </a>
                            </div>
                        </div>
                    </div>
<div className="grid-2">

                   
                        <Image
                            src="/home-hiring.webp"
                            alt="home-hiring"
                            width={535}
                            height={386}
                            className="md:ml-16 mt-8"
                        />
                    
</div>
                </div>
            </div>
        </div>
    );
}
