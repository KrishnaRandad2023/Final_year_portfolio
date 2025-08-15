"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items - customize these for your portfolio
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
  ];

  const handleItemClick = () => {
    setIsOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleItemClick} />
        <NavbarButton
          href="#contact"
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector("#contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in Touch
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => {
                handleItemClick();
                if (item.link.startsWith("#")) {
                  e.preventDefault();
                  const element = document.querySelector(item.link);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="block w-full px-4 py-2 text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 w-full">
            <NavbarButton
              href="#contact"
              variant="primary"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get in Touch
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
