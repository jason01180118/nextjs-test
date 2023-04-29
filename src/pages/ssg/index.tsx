import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { useEffect } from 'react';
import WebSocket from 'ws';
import { sha256 } from 'js-sha256';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  let testName;
  await axios.get('http://localhost:3000/api/hello').then((res) => {
    testName = res.data.name;
    console.log(res.data.name);
  });

  return {
    props: {
      testName,
    },
  };
}

interface Props {
  testName: string;
}

export default function SSG({ testName }: Props) {
  console.log(testName);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white">{testName}</p>
        <Link className="text-white" href="/">
          home
        </Link>
      </div>
    </main>
  );
}
