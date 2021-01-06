import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WARE</title>
        <link rel="icon" href="/onlogobq.ico" />
      </Head>

      <main>
        <h1 className="slogan">
          ONWARE{' '}
          <Link href="/posts/pc">
            <a>PC</a>
          </Link>
          
        </h1>

        <p className="description">
          Site em Desenvolvimento
        </p>

      </main>
    </div>
  )
}