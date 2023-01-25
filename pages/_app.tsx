import { useEffect, useState } from 'react';
import { Footer, Header } from '../components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { RotateLoader } from 'react-spinners';
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, []);


  return (
    <div className='!w-screen !h-screen  !bg-slate-100'>
      {loading ?
        (
          <div className='flex items-center justify-center h-screen'>
            <RotateLoader
              color={'#6366f1'}
              aria-label="Loading Spinner"
              data-testid="loader"
              loading={loading}
              margin={0}
              speedMultiplier={1}
              size={10}
            />
          </div>
        ) : (
          <>
            <SessionProvider session={session}>
              <NextNProgress color="#6366f1" startPosition={0.3} stopDelayMs={200} height={2} showOnShallow={true} />
              <Header />
              <Toaster position='bottom-center' />
              <section className='w-screen'>
                {/* <section className='px-4 sm:px-10 lg:px-40'> */}
                <Component {...pageProps} />
              </section>
              <Footer />
            </SessionProvider>
          </>
        )}
    </div>
  )
}

export default MyApp
