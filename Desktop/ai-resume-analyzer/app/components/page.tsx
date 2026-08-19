import Link from "next/link";

export default function Navbar(){
    return(
        <main>
            <h1>AI Resume Analyzer</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
        </main>
    )
}