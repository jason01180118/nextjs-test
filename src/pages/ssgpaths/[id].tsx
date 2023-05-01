import { Inter } from 'next/font/google';
import axios from 'axios';
import Link from 'next/link';
import { GetStaticProps } from 'next';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticPaths() {
  const articles: { path: string }[] = [{ path: '1' }, { path: '2' }];

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

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.params);
  return {
    props: {},
  };
};

export default function Content() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link className="text-white" href="/ssgpaths">
          back
        </Link>
      </div>
    </main>
  );
}
