import Image from "next/image";
import Link from "next/link";

export default function HeroLanding() {
  return (
    <div className="h-screen relative overflow-clip">
      <div className="md:z-40 relative px-12 w-[55%] py-12">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[2px] bg-gray-400"></div>
          <h3 className="text-xl text-gray-400">We are VR-Bangla</h3>
        </div>

        <h1 className="text-5xl font-bold mt-2 leading-tight tracking-wider">
          Experience Bangladesh Like Never Before
        </h1>

        <p className="text-gray-400 mt-4">
          We are one of the pioneer Virtual Reality content producers having 6
          years of experience, skill and technology, and producing the most
          successful VR projects of the country, Virtual Museum Bangladesh.
        </p>

        {/* youtube video playing focus icon */}
        <Link href="/" className="mt-6 absolute right-10">
          <div className="relative">
            <Image
              src="/images/youtube.jpg"
              height={200}
              width={200}
              alt="youtube"
              className="rounded-md opacity-50 bg-red-500"
            />

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="absolute top-0 right-6 z-10">
        <Image
          src="/images/hero-1.png"
          width={680}
          height={267}
          alt="hero-vrBangla"
          className="hover:-translate-x-2 duration-200"
        />
      </div>
      <div className="ellipse1 absolute right-0"></div>
    </div>
  );
}
