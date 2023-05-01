import { Inter } from 'next/font/google';
import axios from 'axios';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps() {
  let articles;
  await axios.get('http://127.0.0.1:3000/api/article').then((res) => {
    articles = res.data;
    console.log(res.data);
  });

  return {
    props: {
      articles,
    },
  };
}

interface Paths {
  articles: { path: string }[];
}

export default function Blog({ articles }: Paths) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {articles.map((article) => {
          return (
            <Link key={article.path} href={`isr/${article.path}`}>
              {article.path}
            </Link>
          );
        })}
        <Link className="text-white" href="/">
          home
        </Link>
      </div>
    </main>
  );
}
