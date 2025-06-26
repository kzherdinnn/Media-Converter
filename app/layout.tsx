import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Media Converter - Konverter File Tanpa Batas Gratis",
    description: `Bebaskan kreativitas Anda dengan Modifio – alat daring terbaik untuk
konversi multimedia tanpa batas dan gratis. Ubah gambar, audio, dan
video dengan mudah, tanpa batasan. Mulailah mengonversi sekarang dan
tingkatkan konten Anda seperti yang belum pernah ada sebelumnya!`,
    creator: "Kelompok 6",
    keywords: "konverter gambar, konverter video, konverter audio, konverter gambar tak terbatas, konverter video tak terbatas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
            <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
