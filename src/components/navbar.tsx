import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="py-2 flex justify-between px-4 border-b">
      <h1 className="text-xl flex items-center">
        <Link href="/">Meal Planner</Link>
      </h1>
      <ul className="flex items-center [&>li]:my-4">
        <li>
          <Link href="/planner">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md transition-all ease-in duration-200 hover:scale-105">
              Create
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
