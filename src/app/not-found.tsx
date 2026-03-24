import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
      <p className="mb-8 text-muted">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-6 py-3 font-medium text-background hover:bg-accent-hover transition-colors"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
