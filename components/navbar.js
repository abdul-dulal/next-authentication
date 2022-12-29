import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <main>
        <div className="w-full  bg-indigo-400 rounded-sm">
          <ul className="flex gap-10 h-14 items-center justify-center text-white text-2xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about"> About</Link>
            </li>
            <li>
              <Link href="/blog"> Blog</Link>
            </li>
            <li>
              <Link href="login"> Logout</Link>
            </li>
            <li>
              <Link href="signup">Signup</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
