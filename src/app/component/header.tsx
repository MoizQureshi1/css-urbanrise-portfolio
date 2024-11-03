import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="head">
                <h2 className="heading">Urban<span className="span">Rise</span></h2>
                <ul className="nav">
                    <li>
                        <Link href="/" className="atag">Home</Link>
                        <Link href="/about" className="atag">About Us</Link>
                        <Link href="/member" className="atag">Our Team</Link>
                    </li>
                    <Link href="/signup" className="button">Sign Up</Link>
                </ul>
            </div>
        </header>
    );
}