export default function Navbar() {
  return (
    <div>
      <nav className="w-full fixed top-0 flex flex-row justify-around items-center bg-slate-500">
        <div className="flex flex-row">
          <img src="/pizzaLogo.png" alt="pizza_logo" className="w-16" />
        </div>
        <div className="text-white">
          <ul className="flex flex-row justify-start  mb-2 ">
            <li className="">Home</li>
            <li className="ml-2">Menu</li>
            <li className="ml-2">About</li>
            <li className="ml-2">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
