import { FaCss3, FaStackOverflow, FaProductHunt } from 'react-icons/fa'; // Importe os ícones desejados

export default function Apresentacoes() {
    return (
        <div className="container mx-auto px-4 py-8 mb-8">
            <div className="text-black font-bold text-center mb-6 mt-8">
                <h1 className="text-xl md:text-2xl lg:text-sm"><b>AS FEATURED ON...</b></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="w-full h-auto rounded-sm shadow-xl flex items-center justify-center border-black p-4 sm:p-6">
                    <div className="flex items-center">
                        <FaCss3 className="mr-2 h-8 sm:h-10 text-blue-500 text-2xl" />
                        <h1 className="text-base sm:text-lg font-semibold text-black">CSS-TRICKS</h1>
                    </div>
                </div>
                <div className="w-full h-auto rounded-sm shadow-xl flex items-center justify-center border-black p-4 sm:p-6">
                    <div className="flex items-center">
                        <FaStackOverflow className="mr-2 h-8 sm:h-10 text-blue-400 text-2xl" />
                        <h1 className="text-base sm:text-lg font-semibold text-black">
                            stack<b>overflow</b>
                        </h1>
                    </div>
                </div>
                <div className="w-full h-auto rounded-sm shadow-xl flex items-center justify-center border-black p-4 sm:p-6">
                    <div className="flex items-center">
                        <FaProductHunt className="mr-2 h-8 sm:h-10 text-orange-600 text-2xl" />
                        <h1 className="text-base sm:text-lg font-semibold text-orange-700">Product Hunt</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
