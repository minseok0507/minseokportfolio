"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import PropTypes from 'prop-types'
import DarkModeToggle from "@/components/dark-mode-toggle";

export function CoolNavBarJsx() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    (<nav className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <DarkModeToggle/>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white"></h1>
          <div className="hidden md:flex space-x-4">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      {isMenuOpen && (
        <div className="md:hidden mt-5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="#">Home</MobileNavItem>
            <MobileNavItem href="#about">About</MobileNavItem>
            <MobileNavItem href="#skills">Skills</MobileNavItem>
            <MobileNavItem href="#projects">Projects</MobileNavItem>
          </div>
        </div>
      )}
    </nav>)
  );
}

function NavItem({ href, children }) {
  return (
    (<Link
      href={href}
      className="text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out dark:text-gray-200">
      {children}
    </Link>)
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

function MobileNavItem({ href, children }) {
  return (
    (<Link
      href={href}
      className="text-black hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out dark:text-gray-200">
      {children}
    </Link>)
  );
}

MobileNavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}