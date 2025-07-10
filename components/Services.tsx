"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Car,
  Radio,
  Shield,
  MapPin,
  Wrench,
  Battery,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Diagnóstico Eletrônico",
    description:
      "Identificação precisa de problemas elétricos com equipamentos de última geração.",
    features: [
      "Scanner automotivo",
      "Teste de sensores",
      "Análise de códigos de erro",
    ],
  },
  {
    icon: Radio,
    title: "Som Automotivo",
    description:
      "Instalação e manutenção de sistemas de som com qualidade profissional.",
    features: ["Módulos de potência", "Subwoofers", "Multimídia"],
  },
  {
    icon: Shield,
    title: "Alarmes e Travas",
    description:
      "Sistemas de segurança para proteger seu veículo 24 horas por dia.",
    features: [
      "Alarmes com controle",
      "Trava elétrica",
      "Sensores de presença",
    ],
  },
  {
    icon: MapPin,
    title: "Rastreadores GPS",
    description: "Monitoramento em tempo real com tecnologia de ponta.",
    features: ["Rastreamento 24h", "App móvel", "Bloqueio remoto"],
  },
  {
    icon: Car,
    title: "Elétrica Geral",
    description: "Manutenção completa do sistema elétrico do seu veículo.",
    features: ["Alternador", "Motor de partida", "Fiação elétrica"],
  },
  {
    icon: Battery,
    title: "Baterias",
    description: "Teste, manutenção e substituição de baterias automotivas.",
    features: ["Teste de carga", "Limpeza de terminais", "Instalação"],
  },
  {
    icon: Wrench,
    title: "Vidros Elétricos",
    description: "Reparo e instalação de sistemas de vidros elétricos.",
    features: ["Motor do vidro", "Botões de comando", "Reguladores"],
  },
  {
    icon: Smartphone,
    title: "Centrais Multimídia",
    description: "Modernize seu veículo com centrais multimídia inteligentes.",
    features: ["Android Auto", "Apple CarPlay", "Bluetooth"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="services">
      <div className="container-custom section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em elétrica automotiva com tecnologia
            avançada e mão de obra especializada para todos os tipos de
            veículos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card group cursor-pointer"
            >
              <div className="text-blue-600 mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                <service.icon size={48} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 font-semibold hover:text-yellow-500 transition-colors">
                  Saiba mais →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-primary">Ver Todos os Serviços</button>
        </motion.div>
      </div>
    </section>
  );
}
