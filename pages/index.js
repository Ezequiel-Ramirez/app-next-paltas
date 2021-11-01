import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [productList  , setProductList] = useState([])

  useEffect(() => {
   window.fetch("/api/avo")
    .then(res => res.json())  
    .then(({data, length}) =>  setProductList(data))
    console.log(productList);
  }, [productList])

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Palta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar />
        <h1 className={styles.title}>Listado de Paltas</h1>
        {productList.map(product => (<div key={product.id}>{product.name } </div> ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}