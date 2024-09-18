import Image from "next/image";

export default function Impostor() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <Image
                        src="/home-benefit-3.webp"
                        alt="home-benefit-2"
                        width={560}
                        height={602}

                    />

                </div>
                <div className="flex flex-col  justify-center">
                    <div className="flex justify-start mb-6">
                        <div className="rounded-full bg-gray-100 p-3 text-5xl">
                            &#128640;
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        Banish impostor syndrome
                    </h1>
                    <p className="text-base md:text-xl text-gray-600">
                        We’ve all felt out of our depth before. Getting hands-on experience is an incredible way to build confidence, refine your workflow, and supercharge your learning.
                    </p>
                </div>
            </div>
        </div>
    );
}
