import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { useEffect } from 'react';
import WebSocket from 'ws';
import { sha256 } from 'js-sha256';

const inter = Inter({ subsets: ['latin'] });

interface testJson {
  testName: string;
}

export default function Home(testName: testJson) {
  console.log(testName.testName);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white">{testName.testName}</p>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  let testName;
  await axios.get('http://localhost:3000/api/hello').then((res) => {
    testName = res.data.name;
    console.log(res.data.name);
  });
  const url = 'ws://ec2-3-25-112-71.ap-southeast-2.compute.amazonaws.com:3000';
  const ws = new WebSocket(url, {
    perMessageDeflate: false,
  });

  ws.onopen = () => {
    console.log('open connection');
    ws.send('aaaaa');
    ws.send(JSON.stringify({ fwehjkf: 'fewew' }));
    ws.send(
      JSON.stringify({
        type: 'ECHO',
        value: 'return_value',
        nonce: 'echo_test',
      })
    );
    ws.send(JSON.stringify({ type: 'ECHO', nonce: 'echo_without_value' }));
    ws.send(
      JSON.stringify({
        type: 'LOGIN',
        account: 'admin',
        password: sha256('passwd'),
        nonce: 'login_test',
      })
    );
    ws.send(
      JSON.stringify({
        type: 'LOGIN',
        account: 'admin',
        password: sha256('passd'),
        nonce: 'login_with_wrong_password',
      })
    );
    ws.send(
      JSON.stringify({
        type: 'LOGIN',
        adddddddd: 'weeeeeee',
        nonce: 'login_without_values1',
      })
    );
    ws.send(JSON.stringify({ type: 'LOGIN', nonce: 'login_without_values2' }));
  };

  ws.onclose = () => {
    console.log('close connection');
  };

  ws.onmessage = (event) => {
    console.log(event.data);
  };

  return {
    props: {
      testName,
    },
  };
}
