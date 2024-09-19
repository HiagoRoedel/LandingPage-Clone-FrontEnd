import { FaFigma, FaStar } from 'react-icons/fa';

export default function Skills() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="titles w-full md:w-[755px] mx-auto text-center mb-8">
                <h1 className="text-black text-4xl md:text-5xl">
                    Take your skills to the next level with our <b className="text-white bg-[#3e54a3] rounded-lg px-2">PRO</b> subscription
                </h1>
                <p className="subtitle text-gray-500 mt-4 text-lg md:text-xl">
                    Step into the shoes of a professional developer and build projects in the most realistic way possible. Our Pro subscription will help you prepare for life as a professional developer.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="shadow-xl flex flex-col items-center mb-12 p-6 md:p-8 rounded-md bg-white w-full max-w-xl">
                    <FaFigma className="w-12 h-12 text-blue-900 mb-4 md:mb-6" />
                    <h2 className="text-black text-2xl md:text-3xl mb-3 md:mb-4">Access each challenge’s design file</h2>
                    <p className="text-gray-600 text-center text-lg md:text-xl">
                        Professional teams use tools like Figma. By using these tools when building projects, you’ll save time, create more accurate solutions, and gain hands-on experience working like a pro.
                    </p>
                </div>
                <div className="shadow-xl flex flex-col items-center mb-12 p-6 md:p-8 rounded-md bg-white w-full max-w-xl">
                    <FaStar className="w-12 h-12 text-blue-900 mb-4 md:mb-6" />
                    <h2 className="text-black text-2xl md:text-3xl mb-3 md:mb-4">Tackle our premium challenges</h2>
                    <p className="text-gray-600 text-center text-lg md:text-xl">
                        Our premium challenges are the most realistic, comprehensive practice projects you’ll find. They also make incredible portfolio pieces to help you “wow!” recruiters and get hired.
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <a href="#" className="bg-red-700 text-white italic font-bold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-red-800 transition">
                    LEARN ABOUT PRO
                </a>
            </div>
        </div>
    );
}
