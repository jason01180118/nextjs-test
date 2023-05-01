import { Inter } from 'next/font/google';
import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let testName;
  let error = false;
  await axios
    .get(`http://127.0.0.1:3000/api/getdata/${params!.id}`)
    .then((res) => {
      testName = res.data.name;
    })
    .catch((err) => {
      error = true;
      console.log(err);
    });
  if (error) {
    return { notFound: true };
  }
  return {
    props: { name: testName },
    revalidate: 10,
  };
};

interface Props {
  name: string;
}

export default function Content({ name }: Props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white">hello!this is ISR your name={name}</p>
        <Link className="text-white" href="/ssr">
          back
        </Link>
      </div>
    </main>
  );
}
