import Image from "next/image";

export default function Escape() {
    return (
        <div className="container mx-auto px-4 py-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                    <Image
                        src="/home-benefit-1.webp"
                        alt="home-benefit-1"
                        width={560}
                        height={515}
                        className=""
                    />
                </div>
                <div className="flex flex-col justify-center items-start p-6">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full bg-gray-100 p-4 text-4xl mb-8">
                            &#128127;
                        </div>
                    </div>
                    <div className="title text-5xl text-black mb-8">
                        Escape tutorial hell
                    </div>
                    <div className="subtitle text-gray-600 text-xl">
                        Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world problems yourself.
                    </div>
                </div>
            </div>
        </div>
    );
}
