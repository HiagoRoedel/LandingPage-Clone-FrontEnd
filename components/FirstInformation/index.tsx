import { FaGithub } from "react-icons/fa"
import Image from "next/image"

export default function FirstInformation() {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 mt-32">
                    <div className="grid-1">
                        <h1 className="w-[550px] text-[#3E54A3] text-6xl">Improve your coding skills by building realistic projects</h1>
                        <div className="span mt-8 text-xl">
                            <span className="text-gray-400 mt-20">Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!</span>
                        </div>
                        <div className="button">
                            <button className="mt-8 flex text-white font-bold bg-[#ED2C49] w-52 text-base rounded-full py-2 px-2 p-0">
                                LOG IN WITH GITHUB
                                <FaGithub className="ml-2" />
                            </button>
                        </div>
                        <div className="flex flex-row mt-8">
                            <Image
                                src="/home-community-avatars.webp"
                                alt="imagem-pessoas"
                                width={150}
                                height={150}
                            />
                            <div className="information px-2">
                                <span className="text-black">Join <b className="text-blue-950">894.225</b> developers building projects, reviewing code, and helping each other improve.</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid-2">
                        <Image
                            src="/home-hero.webp"
                            alt="imagem da primeira selecao pagina"
                            width={750}
                            height={575}
                        />
                    </div>
                </div>

            </div>
            <div className="text-[64px] text-pink-100">
                &gt;
            </div>
        </>
    )
}