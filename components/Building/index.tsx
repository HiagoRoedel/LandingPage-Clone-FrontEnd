import { FaGithub } from 'react-icons/fa';

export default function Building() {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex flex-col justify-center items-center">
                    <div className="title text-center flex flex-col items-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-full md:max-w-[650px] mb-8 text-[#3e54a3]">
                            Join 894.568 people building portfolio-worthy projects
                        </h1>
                        <span className="text-[#737373] text-lg sm:text-xl md:text-2xl max-w-full md:max-w-[950px]">
                            Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. We’d love to welcome you to our community!
                        </span>
                    </div>
                    <a href="#" className="flex items-center justify-center font-bold italic w-full sm:w-[240px] h-[40px] bg-[#ED2C49] text-white text-sm rounded-full px-5 py-2">
                        LOG IN WITH GITHUB
                        <FaGithub className="ml-2" />
                    </a>
                </div>
            </div>
        </>
    );
}
