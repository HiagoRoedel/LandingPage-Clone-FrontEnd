import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Image 
                        src="/logo-desktop.svg"
                        alt="logo site frontend"
                        width={175}
                        height={175}
                    />
                </div>
                <div className="flex items-center space-x-6">
                    <div className="questions font-bold flex space-x-6 text-black">
                        <a href="#" className="">LEARNING PATHS</a>
                        <a href="#" className="">CHALLENGES</a>
                        <a href="#" className="">SOLUTIONS</a>
                        <a href="#" className="">ARTICLES</a>
                        <a href="#" className="">UNLOCK PRO</a>
                    </div>
                    <div>
                        <a href="#" className="flex items-center font-bold bg-black text-white text-sm rounded-full px-5 py-2">
                            LOG IN WITH GITHUB
                            <FaGithub className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
