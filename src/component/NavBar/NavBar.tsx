import "../Navbar/NavBar.css"
import { MenuButton } from "./MenuButton"
export const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>{'<Anujkumar Yadav />'}</h3>
      <div className="nav-menu">
        <button className="lets-talk-btn"> Let&apos;s talk</button>
        <MenuButton />
      </div>
    </nav>
  )
}
