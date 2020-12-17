import Link from 'next/link';

function Home() {
    return (
        
        <div>
            <h1>Hello World 2</h1>
            <h3>Site em desenvolvimento</h3>
            <p>By: Giulius</p>

            <Link href="/pcs">
                <a>PCs</a>
            </Link>
        </div>
    )
}

export default Home