import { GearSix, Info, UserCircle } from "@phosphor-icons/react"
import { Outlet, Link } from "react-router-dom"

export default function Nav() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <span>Coursy</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link className="gap-1" to="/settings">
                <GearSix weight="duotone" size={20} color="currentColor" />
                <span className="hidden sm:inline-block">Settings</span>
              </Link>
            </li>
            <li>
              <Link className="gap-1" to="/about">
                <Info weight="duotone" size={20} color="currentColor" />
                <span className="hidden sm:inline-block">About</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="btn btn-ghost btn-circle avatar">
                <div className="size-10 rounded-full">
                  <img alt="Avatar image of user" src="/avatar.png" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="container px-6 py-4 mx-auto">
        <Outlet />
      </section>
    </>
  )
}
