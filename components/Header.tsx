"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Localização", href: "#location" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header fixo com top bar e navegação */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top Bar */}
        <div className="bg-slate-900 text-white py-2 hidden md:block">
          <div className="container-custom section-padding">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-yellow-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-yellow-400" />
                  <span>Rua Cambui, 123 - São Paulo</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-yellow-400" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>
        {/* Main Header */}
        <div className="container-custom section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">AC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-900">
                  Autoelétrica Cambui
                </h1>
                <p className="text-xs text-slate-600">
                  Especialistas em Elétrica Automotiva
                </p>
              </div>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  className={`text-sm font-medium transition-colors hover:text-yellow-500 text-slate-700`}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
            {/* CTA Button */}
            <motion.button
              className="hidden md:block btn-primary bg-yellow-500 hover:bg-yellow-600 text-slate-900 text-sm px-6 py-2 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
            >
              Orçamento
            </motion.button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-slate-900" />
              ) : (
                <Menu size={24} className="text-slate-900" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="block w-full text-left py-3 text-slate-700 font-medium border-b border-gray-100 last:border-b-0 hover:text-yellow-500 transition-colors"
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  className="w-full mt-4 btn-primary bg-yellow-500 hover:bg-yellow-600 text-slate-900"
                  onClick={() => scrollToSection("#contact")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Solicitar Orçamento
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer para evitar sobreposição do conteúdo */}
    </>
  );
}
