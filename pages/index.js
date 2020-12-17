import Link from 'next/link';

function Home() {
    return (<div>
		
        <h1>Home</h1>
        <p>Site em Desenvolvimento</p>
		<p>by: Giulius</p>

        <Link href="pcs">
            <a>Pcs</a>
        </Link>
    </div>)
}

export default Home