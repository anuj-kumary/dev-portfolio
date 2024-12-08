import { useState, useRef, useEffect } from "react";
import "./MenuButton.css";

const MENU_OPTION = [
    { label: "About", name: "about" },
    { label: "Portfolio", name: "portfolio" },
    { label: "Experience", name: "experience" },
    { label: "Languages and Tools", name: "languages-tools" },
    { label: "Contact", name: "contact" }
]
    ;

export const MenuButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={menuRef}>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button"
            >
                Menu
            </button>
            <div className={`menu-options ${isMenuOpen ? "show" : ""}`}>
                {MENU_OPTION.map((option) => (
                    <a onClick={handleOptionClick} href={`#${option.name}`} className="menu-option">{option.label}</a>
                ))}
            </div>
        </div>
    );
};
