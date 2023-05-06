import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { useEffect } from 'react';
import WebSocket from 'ws';
import { sha256 } from 'js-sha256';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
        <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
              <iframe src="/api/examples/session" />
      </div>
    </main>
  );
}
