"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[80vh] py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden pt-[104px] md:pt-[136px]"
    >
      {/* Título removido no mobile */}
      <div className="hidden md:block w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-white mt-6 md:mt-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AutoElétrica <span className="text-yellow-400">Cambui</span>
        </motion.h1>
      </div>

      {/* Grid principal */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* SVG à esquerda */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/heroObject.svg"
            alt="Ilustração Hero Autoelétrica Cambui"
            width={350}
            height={400}
            className="w-4/5 md:w-[350px] h-auto rotate-180 md:rotate-90"
            priority
          />
        </div>
        {/* Textos e estatísticas à direita */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-16 px-6 md:px-0">
          <p className="text-white text-base md:text-xl max-w-md">
            Especialistas em sistemas elétricos automotivos há mais de 20 anos.
            <br />
            Diagnóstico preciso, serviços de qualidade e atendimento que você
            pode confiar.
          </p>
          {/* Estatísticas */}
          <div className="flex gap-10 justify-center md:justify-start">
            <div className="text-center">
              <div className="text-lg md:text-3xl font-bold text-yellow-400 mb-1">
                20+
              </div>
              <div className="text-blue-100 text-xs md:text-sm">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-3xl font-bold text-yellow-400 mb-1">
                2.900
              </div>
              <div className="text-blue-100 text-xs md:text-sm">
                Veículos Atendidos
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-3xl font-bold text-yellow-400 mb-1">
                98%
              </div>
              <div className="text-blue-100 text-xs md:text-sm">
                Clientes Satisfeitos
              </div>
            </div>
          </div>
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto justify-center md:justify-start mt-2">
            <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-slate-900 w-full sm:w-auto">
              Solicitar Orçamento
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-slate-900 w-full sm:w-auto">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
