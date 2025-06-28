"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EncodePage() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [resultUrl, setResultUrl] = useState<string | null>(null);

    const handleEncode = async () => {
        if (!file) return;

        const img = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imgData.data;

        const binaryMessage = message
            .split('')
            .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
            .join('') + '00000000'; // Penanda akhir pesan

        let dataIndex = 0;
        for (let i = 0; i < pixels.length; i += 4) {
            if (dataIndex < binaryMessage.length) {
                pixels[i] = (pixels[i] & 0xFE) | parseInt(binaryMessage[dataIndex]);
                dataIndex++;
            } else {
                break;
            }
        }

        ctx.putImageData(imgData, 0, 0);
        const url = canvas.toDataURL();
        setResultUrl(url);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Encode Pesan ke Gambar</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <Input
                        placeholder="Masukkan pesan rahasia..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button onClick={handleEncode} disabled={!file || !message}>
                        Encode
                    </Button>

                    {resultUrl && (
                        <div>
                            <p className="mt-4">Gambar dengan pesan tersembunyi:</p>
                            <img src={resultUrl} alt="Encoded" className="border mt-2" />
                            <a href={resultUrl} download="encoded-image.png">
                                <Button className="mt-2" variant="outline">
                                    Download Gambar
                                </Button>
                            </a>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
