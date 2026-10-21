import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="text-5xl font-bold text-zinc-100 mb-4">Page Not Found</h1>
        <p className="text-zinc-500 text-sm mb-8">
          This page doesn&apos;t exist in the intelligence lab.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-lime-400 text-zinc-950 text-sm font-mono tracking-widest rounded hover:bg-lime-300 transition-colors"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
