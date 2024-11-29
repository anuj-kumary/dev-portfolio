import { useState, useRef, useEffect } from "react";
import "./MenuButton.css";

export const MenuButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
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
                <div className="menu-option">Option 1</div>
                <div className="menu-option">Option 2</div>
                <div className="menu-option">Option 3</div>
            </div>
        </div>
    );
};
