import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function pc() {
    return (
        <>
            <Head>
                <title>PC</title>
            </Head>
            <h1>PC</h1>
            <h2>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </h2>
        </>
    )
}