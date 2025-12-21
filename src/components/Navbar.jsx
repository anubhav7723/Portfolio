import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between text-white">
        <h1 className="text-green-400 font-bold">Anubhav</h1>
        <div className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
