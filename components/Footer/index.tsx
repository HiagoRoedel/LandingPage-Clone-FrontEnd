import Image from "next/image";
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <Image
              src="/logo-desktop.svg"
              alt="logo site frontend"
              width={195}
              height={195}
            />
          </div>
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <FaDiscord className="w-8 h-8 text-cyan-700" />
            <FaTwitter className="w-8 h-8 text-cyan-700" />
            <FaLinkedin className="w-8 h-8 text-cyan-700" />
            <FaFacebook className="w-8 h-8 text-cyan-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h1 className="text-[#3e54a3] text-2xl md:text-3xl font-bold">Stay up to date</h1>
            <p className="text-black text-base md:text-lg mb-4 mt-4">
              With new challenges, featured solutions, selected articles, and our latest news.
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="text"
                placeholder="email@example.com"
                className="border border-gray-400 rounded-sm p-2 w-full md:w-64 h-12 mb-2 md:mb-0 md:mr-2"
              />
              <a className="flex items-center justify-center font-bold italic w-full md:w-[160px] h-[48px] bg-[#ED2C49] text-white text-sm rounded-full px-5 py-2 cursor-pointer hover:bg-[#d9253e] transition">
                SUBSCRIBE
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between text-black mt-4 md:mt-0">
            <ul className="mb-4 md:mb-0">
              <li className="font-bold">FRONTEND MENTOR</li>
              <li className="mt-2">Unlock Pro</li>
              <li>Contact us</li>
              <li>FAQs</li>
            </ul>
            <ul className="mb-4 md:mb-0">
              <li className="font-bold">EXPLORE</li>
              <li className="mt-2">Learning paths</li>
              <li>Challenges</li>
              <li>Solutions</li>
              <li>Articles</li>
              <li>Resources</li>
            </ul>
            <ul className="mb-4 md:mb-0">
              <li className="font-bold">COMMUNITY</li>
              <li className="mt-2">Discord</li>
              <li>Guidelines</li>
            </ul>
            <ul>
              <li className="font-bold">FOR COMPANIES</li>
              <li className="mt-2">Hire developers</li>
              <li>Train developers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <Copyright />
    </>
  );
}
