// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Konverter File Tanpa Batas Gratis</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Bebaskan kreativitas Anda dengan Media Converter – alat daring terbaik untuk
konversi multimedia tanpa batas dan gratis. Ubah gambar, audio, dan
video dengan mudah, tanpa batasan. Mulailah mengonversi sekarang dan
tingkatkan konten Anda seperti yang belum pernah ada sebelumnya!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
