import clsx from "clsx";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/app/components/navbar";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Medium.ttf",
      weight: "600",
      style: "medium",
    },
    {
      path: "../public/fonts/Montserrat-Bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "VR-Bangla",
  description: "The pioneer of Virtual Reality of Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx("text-white bg-[#050712]", montserrat.variable)}
    >
      <body>
        <header>
          <Navbar />
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
