"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloqueia o scroll quando o menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden lg:flex gap-6 text-white uppercase tracking-wider text-md">
        <ul className="flex gap-6">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      {/* Ícone do menu mobile */}
      <div
        className="lg:hidden text-white z-50 text-2xl cursor-pointer  right-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Menu Mobile */}
      <nav
        className={`fixed top-0 right-0 w-full h-full bg-black text-white flex items-center justify-center transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-40`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg uppercase tracking-wider">
          <li><a href="#" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Sobre nós</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
      </nav>
    </>
  );
}
