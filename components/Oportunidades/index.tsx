import Image from "next/image";

export default function Oportunidades() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center mb-6 md:mb-0">
                    <Image
                        src="/home-benefit-5.webp"
                        alt="home-benefit-5"
                        width={560}
                        height={602}
                        className="max-w-full h-auto"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-start mb-6">
                        <div className="rounded-full bg-gray-100 p-3 text-5xl">
                            &#129309;
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Create job opportunities
                    </h1>
                    <p className="text-base md:text-xl text-gray-600">
                        We have a Hiring Platform that runs alongside this platform. Just by building projects and engaging with the community, you could open up job opportunities!
                    </p>
                </div>
            </div>
        </div>
    );
}
