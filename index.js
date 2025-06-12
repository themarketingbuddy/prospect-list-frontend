import Head from 'next/head';
import UploadForm from '../components/UploadForm';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prospect Extractor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          AI Prospect Extractor
        </h1>
        <UploadForm />
      </main>
    </>
  );
}
