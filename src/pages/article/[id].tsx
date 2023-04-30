import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { useEffect } from 'react';
import WebSocket from 'ws';
import { sha256 } from 'js-sha256';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticPaths() {
  let articles: { path: string }[] = [];
  await axios.get('http://localhost:3000/api/article').then((res) => {
    articles = res.data;
  });

  const paths = articles.map((article) => ({
    params: {
      id: article.path,
    },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Content() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link className="text-white" href="/article">
          back
        </Link>
      </div>
    </main>
  );
}
