// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Homepage</h1>

      <h2>Link by anchor tag</h2>
      <a href="/about">About</a>
      <a href="/header">Header</a>

      <h1>Linking by link tag</h1>
      <Link href="/about">About</Link>
      <Link href="/header">Header</Link>





    </div>
  )
}

