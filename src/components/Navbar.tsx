import Link from 'next/link';

function Navbar() {
  return (
    <>
    <ul className="flex justify-center align-center">
        <li className="mx-4 hover:border-b-4">  <Link href="/">Home</Link></li>
        <li  className="mx-4  hover:border-b-4">  <Link href="/chai">Chai</Link></li>
        <li  className="mx-4  hover:border-b-4">  <Link href="/accord">Accord</Link></li>
    </ul>
    </>
  )
}

export default Navbar