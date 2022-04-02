import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Head>
        <title>Cloudinary Video upload App</title>
      </Head>
      <main className="flex h-screen justify-center items-center text-white">
        <div className="text-center bg-blue-500 p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl front-bold">
            Next.js Video Upload to Cloudinary Demo
          </h1>
          <p className="pt-5 text-xl">Demo by rohkorea86</p>
        </div>
      </main>
    </div>
  );
}
