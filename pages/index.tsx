import Head from 'next/head'
import type { NextPage } from 'next'
import { Blogs, Hero, ImageGallery, Articles } from '../components';
import Categories from '../components/Categories';
import { getBlogs, getGallery, getPosts, getSidePost, getvideoGallery } from '../services/graphql';


const HomePage: NextPage = ({ blogs, gallery, sidepost, post, videos }: any) => {

  return (
    <>
      <Head>
        <title>Webtech | Homepage</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className='my-24'>
        <Hero />
        <Categories />
        <Articles post={post} />
        <ImageGallery gallery={gallery} sidepost={sidepost} />
        <Blogs blogs={blogs} />
      </main>

    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];
  const gallery = (await getGallery()) || [];
  const sidepost = (await getSidePost()) || [];
  const post = (await getPosts()) || [];

  return {
    props: { blogs, gallery, sidepost, post }
  }

}