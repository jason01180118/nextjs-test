import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { useEffect } from 'react';
import WebSocket from 'ws';
import { sha256 } from 'js-sha256';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Header from '@/components/Header';
import addData from '@/lib/addData';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Header></Header>
      <div className="absolute mt-[10%] w-full h-[90%] flex flex-col justify-evenly items-center">
        <Link className="text-white" href="/ssr">
          SSR
        </Link>
        <Link className="text-white" href="/ssg">
          SSG
        </Link>
        <Link className="text-white" href="/csr">
          CSR
        </Link>
        <Link href="/ssgpaths">
          <Button variant="contained">Article</Button>
        </Link>
        <Link href="/isr">
          <Button variant="contained">Blog</Button>
        </Link>
        <button onClick={addData}>click to add</button>
      </div>
    </main>
  );
}
