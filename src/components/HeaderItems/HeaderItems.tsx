import React from "react";
import "./HeaderItems.css";
import useLanguage from "../../hook/useLanguage";

interface HeaderItem {
  name: string;
  ref: React.RefObject<HTMLHeadingElement>;
}

interface HeaderItemsProps {
  items: HeaderItem[];
  scrollToSection: (ref: React.RefObject<HTMLHeadingElement>) => void;
}

const HeaderItems: React.FC<HeaderItemsProps> = ({
  items,
  scrollToSection,
}) => {
  const { isSpanish, setSpanish } = useLanguage();

  return (
    <header className="header-items">
      <nav className="header-nav">
        {items.map((item, index) => (
          <p
            key={index}
            // className="btn btn-primary"
            className="header-item"
            onClick={() => scrollToSection(item.ref)}
          >
            {item.name}
          </p>
        ))}
        {/* <button
          onClick={() => setSpanish(!isSpanish)}
          className="btn btn-primary change-language"
        >
          {isSpanish ? "Switch to English" : "Cambiar a Español"}
        </button> */}
        <p
          onClick={() => setSpanish(!isSpanish)}
          className="header-item lg"
        >
          {isSpanish ? "Switch to English" : "Cambiar a Español"}
        </p>
      </nav>
    </header>
  );
};

export default HeaderItems;
