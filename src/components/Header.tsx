import { NavLink } from "react-router-dom";

export function Header() {
  function linkInactive({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) {
    return !isActive ? "text-zinc-400" : "";
  }
  return (
    <header className='flex sticky top-0 backdrop-blur-sm bg-black/50 justify-between items-center px-20 text-xl py-6 text-zinc-100'>
      <a>
        <img src='' alt='David' />
      </a>

      <nav>
        <ul className='flex justify-between items-center w-80 '>
          <li>
            <NavLink to='home' className={linkInactive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='projects' className={linkInactive}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className={linkInactive}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
