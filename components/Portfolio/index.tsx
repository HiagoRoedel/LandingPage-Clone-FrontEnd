import Image from "next/image";

export default function Portfolio() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                        <div className="rounded-full bg-gray-100 p-3 text-5xl">
                            &#129321;
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Build portfolio-worthy projects
                    </h1>
                    <p className="text-base md:text-lg text-gray-600">
                        Design is hard. We take care of the project ideas and design so you can focus on the coding. You’ll end up with an incredible portfolio of stunning projects!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/home-benefit-2.webp"
                        alt="home-benefit-2"
                        width={560}
                        height={595}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
