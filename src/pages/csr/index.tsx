import { Inter } from 'next/font/google';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function CSR() {
  const { data, error } = useSWR('/api/hello', (...args) =>
    fetch(...args).then((res) => res.json())
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white">{data.name}</p>
        <Link className="text-white" href="/">
          home
        </Link>
      </div>
    </main>
  );
}
