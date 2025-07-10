"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    number: "20+",
    label: "Anos de Experiência",
    description: "Tradição em elétrica automotiva",
  },
  {
    icon: Users,
    number: "5000+",
    label: "Clientes Atendidos",
    description: "Confiança conquistada",
  },
  {
    icon: Award,
    number: "98%",
    label: "Taxa de Sucesso",
    description: "Qualidade comprovada",
  },
  {
    icon: ThumbsUp,
    number: "100%",
    label: "Garantia",
    description: "Todos os serviços",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white" id="about">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-6">Sobre a Autoelétrica Cambui</h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Há mais de duas décadas, a{" "}
                <strong className="text-gray-900">Autoelétrica Cambui</strong> é
                referência em serviços elétricos automotivos na região. Nossa
                experiência e dedicação garantem soluções eficazes para todos os
                tipos de veículos.
              </p>
              <p>
                Combinamos tradição familiar com tecnologia de ponta, oferecendo
                diagnósticos precisos e reparos duradouros. Nossa equipe
                especializada está sempre atualizada com as mais recentes
                inovações do setor automotivo.
              </p>
              <p>
                Valorizamos a confiança de nossos clientes e trabalhamos com
                transparência, oferecendo orçamentos claros e prazos realistas.
                Sua satisfação é nossa prioridade.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="btn-primary">Nossa História</button>
              <button className="btn-secondary">Certificações</button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-blue-600 mb-4 flex justify-center group-hover:text-yellow-500 transition-colors">
                  <stat.icon size={40} />
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>

                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>

                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              &quot;Oferecer soluções completas e confiáveis em elétrica
              automotiva, combinando experiência, tecnologia e atendimento
              personalizado para superar as expectativas de nossos
              clientes.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
