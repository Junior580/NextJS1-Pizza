import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start  bg-[url('../../public/images/pizza.jpeg')] bg-center bg-no-repeat bg-cover w-screen h-screen">
      <div className="w-auto mx-12">
        <h1 className="justify-center items-center h-14 text-3xl text-black">
          Pedro's Pizzeria
        </h1>
        <p className="p-0 text-4xl font-bold text-black">
          PIZZA TO FIT ANY TASTE
        </p>
        <Link href={'/menu'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Order now
          </button>
        </Link>
      </div>
    </div>
  )
}
