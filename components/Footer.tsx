"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Localização", href: "#location" },
    { name: "Contato", href: "#contact" },
  ];

  const services = [
    "Diagnóstico Eletrônico",
    "Som Automotivo",
    "Alarmes e Travas",
    "Rastreadores GPS",
    "Elétrica Geral",
    "Baterias",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Autoelétrica</span>{" "}
                <span className="text-yellow-400">Cambui</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em sistemas elétricos automotivos há mais de 20
                anos. Qualidade, confiança e atendimento personalizado.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-yellow-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rua dos Expedicionários, 123
                    <br />
                    Cambui, Campinas - SP
                    <br />
                    CEP: 13025-230
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">(19) 3234-5678</p>
                  <p className="text-gray-300 text-sm">(19) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <p className="text-gray-300 text-sm">
                  contato@autoeletricacambui.com.br
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock
                  className="text-yellow-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="text-gray-300 text-sm">
                    Segunda à Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Autoelétrica Cambui. Todos os direitos
                reservados.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Termos de Uso
              </a>
              <span className="hidden md:block">|</span>
              <p className="text-center md:text-left">
                Desenvolvido com ❤️ por{" "}
                <span className="text-yellow-400 font-semibold">WebStudio</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
