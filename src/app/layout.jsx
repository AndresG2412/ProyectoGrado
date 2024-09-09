import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Assis from "./components/Assis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aerotrans LTDA"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link
            href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap"
            rel="stylesheet"
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <div className="flex justify-center mt-6">
            <Navbar/>
            <Assis/>
            </div>
            {children}
        </body>
        </html>
    );
}
