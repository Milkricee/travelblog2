import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <Image src="/imgs/cat.png" alt="Logo" width={60} height={60} />
      <h1 className="text-2xl font-bold">
        <Link href="/"> Dan&apos;s Travelblog</Link>
      </h1>
      <nav className="flex gap-8 items-center">
        {/* About Me */}
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        

        {/* Dropdowns für Kontinente */}
        <div className="relative group">
          <button className="hover:underline">
            Afrika
          </button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/afrika/marokko">Marokko</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/afrika/senegal">Senegal</Link>
            </li>
          </ul>
        </div>


        <div className="relative group">
          <button className="hover:underline">
            Asien
          </button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/asien/philippinen">Philippinen</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/asien/vietnam">Vietnam</Link>
            </li>
          </ul>
        </div>

        <div className="relative group">
          <button className="hover:underline">
            Amerika
          </button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/amerika/nicaragua">Nicaragua</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/amerika/kolumbien">Kolumbien</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login und Registrieren Buttons */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Registrieren
        </Link>
      </div>
    </header>
  );
}
