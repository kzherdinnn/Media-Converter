import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SteganografiPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-3xl font-bold">Fitur Steganografi</h1>
            <p>Sembunyikan dan baca pesan rahasia dari gambar.</p>
            <div className="flex gap-4">
                <Link href="/steganografi/encode">
                    <Button>Encode Pesan</Button>
                </Link>
                <Link href="/steganografi/decode">
                    <Button variant="secondary">Decode Pesan</Button>
                </Link>
            </div>
        </div>
    );
}
