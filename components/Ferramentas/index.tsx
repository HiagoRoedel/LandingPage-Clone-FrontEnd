import Image from "next/image";

export default function Ferramentas() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                        <div className="rounded-full bg-gray-100 p-3 text-5xl">
                            🛠️
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                        Practice new tools
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600">
                        The front-end landscape changes constantly. Our design-led challenges let you pick your tools to help you adapt, experiment, and keep up with the latest trends.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/home-benefit-4.webp"
                        alt="home-benefit-4"
                        width={560}
                        height={568}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
