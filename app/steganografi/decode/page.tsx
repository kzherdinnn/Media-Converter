"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DecodePage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [decodedMessage, setDecodedMessage] = useState<string | null>(null);

    const handleDecode = async () => {
        if (!selectedFile) {
            alert("Masukkan gambar terlebih dahulu.");
            return;
        }

        const img = await createImageBitmap(selectedFile);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imgData.data;

        // Ambil bit terakhir (LSB) dari setiap Red channel (setiap 4 langkah)
        let binary = '';
        for (let i = 0; i < pixels.length; i += 4) {
            binary += (pixels[i] & 1).toString();
        }

        // Potong jadi 8 bit untuk tiap karakter
        const chars = binary.match(/.{1,8}/g);
        if (!chars) {
            setDecodedMessage("Gagal membaca pesan.");
            return;
        }

        let decoded = '';
        for (const byte of chars) {
            const charCode = parseInt(byte, 2);
            if (charCode === 0) break; // null terminator
            decoded += String.fromCharCode(charCode);
        }

        setDecodedMessage(decoded || "Tidak ada pesan tersembunyi.");
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Decode Pesan dari Gambar</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    />
                    <Button onClick={handleDecode} className="w-full">
                        Decode Pesan
                    </Button>

                    {decodedMessage && (
                        <div className="mt-4 p-4 border rounded bg-slate-100 dark:bg-slate-900">
                            <p className="font-semibold mb-1">Pesan tersembunyi:</p>
                            <p className="font-bold break-words">{decodedMessage}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
