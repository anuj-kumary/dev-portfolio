import "./NavBar.css"
import { MenuButton } from "./MenuButton"
export const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>{'<Anujkumar Yadav />'}</h3>
      <div className="nav-menu">
        <a href="#contact" className="lets-talk-btn"> Let&apos;s talk</a>
        <MenuButton />
      </div>
    </nav>
  )
}
