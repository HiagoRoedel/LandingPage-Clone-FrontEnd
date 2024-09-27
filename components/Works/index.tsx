'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Works() {
    const [question, setQuestion] = useState('dicas')
    const [isImageLoaded, setIsImageLoaded] = useState(true)

    const buttonStyles = (selected: boolean) =>
        `mb-4 flex flex-col h-auto w-full items-start justify-start rounded-lg border px-4 py-4 text-left font-bold transition-all duration-300 ${selected ? 'bg-blue-600 text-white' : 'bg-white text-black border border-gray-300'
        } hover:bg-blue-700 hover:text-white`

    const circleStyles = (selected: boolean) =>
        `flex items-center justify-center w-8 h-8 rounded-full ${selected ? 'bg-gray-100 text-black' : 'bg-[#6ABECD] text-white'
        }`

    const getDescription = (question: string) => {
        switch (question) {
            case 'dicas':
                return 'Browse our  collection of   professionally designed projects. Pick one that suits the level you’re currently at.'
            case 'orientacoes':
                return 'Start coding by following the project guidelines. Use your skills to solve the challenges.'
            case 'multipla':
                return 'Once you finish coding, submit your solution and receive feedback from peers.'
            case 'pense':
                return 'Review other solutions and provide constructive feedback to improve your skills and theirs.'
            default:
                return ''
        }
    }

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    const handleButtonClick = (newQuestion: string) => {
        setIsImageLoaded(false)
        setTimeout(() => {
            setQuestion(newQuestion)
        }, 300)
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-32">
            <h1 className="text-5xl text-black mb-8">How it works</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 md:w-1/2 mt-4">
                    <button
                        className={buttonStyles(question === 'dicas')}
                        onClick={() => handleButtonClick('dicas')}
                    >
                        <div className="flex items-center">
                            <span className={circleStyles(question === 'dicas')}>1</span>
                            <span className="ml-4 text-xl md:text-2xl">Choose your challenge</span>
                        </div>
                        {question === 'dicas' && (
                            <p className="text-gray-300 mt-2 text-sm md:text-xl">
                                {getDescription(question)}
                            </p>
                        )}
                    </button>

                    <button
                        className={buttonStyles(question === 'orientacoes')}
                        onClick={() => handleButtonClick('orientacoes')}
                    >
                        <div className="flex items-center">
                            <span className={circleStyles(question === 'orientacoes')}>2</span>
                            <span className="ml-4 text-xl md:text-2xl">Code the design</span>
                        </div>
                        {question === 'orientacoes' && (
                            <p className="text-gray-300 mt-2 text-sm md:text-xl">
                                {getDescription(question)}
                            </p>
                        )}
                    </button>

                    <button
                        className={buttonStyles(question === 'multipla')}
                        onClick={() => handleButtonClick('multipla')}
                    >
                        <div className="flex items-center">
                            <span className={circleStyles(question === 'multipla')}>3</span>
                            <span className="ml-4 text-xl md:text-2xl">Submit your solution</span>
                        </div>
                        {question === 'multipla' && (
                            <p className="text-gray-300 mt-2 text-sm md:text-xl">
                                {getDescription(question)}
                            </p>
                        )}
                    </button>

                    <button
                        className={buttonStyles(question === 'pense')}
                        onClick={() => handleButtonClick('pense')}
                    >
                        <div className="flex items-center">
                            <span className={circleStyles(question === 'pense')}>4</span>
                            <span className="ml-4 text-xl md:text-2xl">Give others feedback</span>
                        </div>
                        {question === 'pense' && (
                            <p className="text-gray-300 mt-2 text-sm md:text-xl">
                                {getDescription(question)}
                            </p>
                        )}
                    </button>
                </div>
                <div className="flex-1 relative mt-4 md:mt-0">
                    <div className={`transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        {question === 'dicas' && (
                            <Image
                                src="/home-how-it-works-4.webp"
                                alt="home-how-it-works"
                                width={600}
                                height={400}
                                className="max-w-full h-auto"
                                onLoadingComplete={handleImageLoad}
                            />
                        )}
                        {question === 'orientacoes' && (
                            <Image
                                src="/home-how-it-works-1.webp"
                                alt="home-how-it-works"
                                width={600}
                                height={400}
                                className="max-w-full h-auto"
                                onLoadingComplete={handleImageLoad}
                            />
                        )}
                        {question === 'multipla' && (
                            <Image
                                src="/home-how-it-works-2.webp"
                                alt="home-how-it-works"
                                width={600}
                                height={400}
                                className="max-w-full h-auto"
                                onLoadingComplete={handleImageLoad}
                            />
                        )}
                        {question === 'pense' && (
                            <Image
                                src="/home-how-it-works-3.webp"
                                alt="home-how-it-works"
                                width={600}
                                height={400}
                                className="max-w-full h-auto"
                                onLoadingComplete={handleImageLoad}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
