"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const info = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua dos Expedicionários, 123 - Cambui, Campinas - SP",
      action: "Ver no Google Maps",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda à Sexta: 8h às 18h | Sábado: 8h às 12h",
      action: null,
    },
    {
      icon: Phone,
      title: "Contato",
      content: "(19) 3234-5678 | (19) 99999-9999",
      action: "Ligar Agora",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="location">
      <div className="container-custom section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-lg md:text-3xl">Nossa Localização</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos estrategicamente localizados no Cambui, facilitando o acesso
            para clientes de toda a região de Campinas e cidades vizinhas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-200 h-96 lg:h-[500px]">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-blue-600" size={64} />
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                    Autoelétrica Cambui
                  </h3>
                  <p className="text-gray-600">Mapa interativo em breve</p>
                </div>
              </div>

              {/* Overlay with Google Maps embed would go here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2762877!2d-47.0617!3d-22.8988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzU1LjciUyA0N8KwMDMnNDIuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {info.map((item, index) => (
              <motion.div
                key={index}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 group-hover:text-yellow-500 transition-colors">
                    <item.icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600 mb-4 leading-relaxed">
                      {item.content}
                    </p>

                    {item.action && (
                      <button className="text-xs md:text-base text-blue-600 font-semibold hover:text-yellow-500 transition-colors flex items-center">
                        {item.action}
                        <Navigation className="ml-2" size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              className="pt-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="btn-primary w-full text-sm md:text-lg">
                <Navigation className="mr-2" size={20} />
                Como Chegar
              </button>
              <button className="btn-secondary w-full text-sm md:text-lg">
                <Phone className="mr-2" size={20} />
                Ligar Agora
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-blue-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                💡 Dica Importante
              </h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Oferecemos <strong>estacionamento gratuito</strong> em frente à
                oficina e atendimento por ordem de chegada. Para serviços mais
                complexos, recomendamos agendar pelo telefone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
