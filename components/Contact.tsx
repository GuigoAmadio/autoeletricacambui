"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(19) 3234-5678",
      description: "Atendimento rápido e direto",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(19) 99999-9999",
      description: "Mensagem instantânea",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@autoeletrica.com.br",
      description: "Resposta em até 24h",
    },
  ];

  const services = [
    "Diagnóstico Eletrônico",
    "Som Automotivo",
    "Alarmes e Travas",
    "Rastreadores GPS",
    "Elétrica Geral",
    "Baterias",
    "Vidros Elétricos",
    "Centrais Multimídia",
    "Outro",
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="contact">
      <div className="container-custom section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-lg md:text-3xl">Entre em Contato</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para resolver o problema elétrico do seu veículo? Entre em
            contato conosco e receba um atendimento personalizado e um orçamento
            sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="card">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
                Solicite seu Orçamento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs md:text-base"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs md:text-sm font-semibold text-gray-700 mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs md:text-base"
                      placeholder="(19) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs md:text-base"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-2"
                  >
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs md:text-base"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical text-xs md:text-base"
                    placeholder="Descreva o problema do seu veículo ou tire suas dúvidas..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Responderemos em até 2 horas úteis.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
                Outras Formas de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Prefere falar diretamente? Escolha a melhor forma de nos
                contatar:
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 group-hover:text-yellow-500 transition-colors">
                    <method.icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-1">
                      {method.content}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Guarantee */}
            <motion.div
              className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Garantia de Qualidade
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Todos os nossos serviços possuem garantia e você recebe
                    atendimento pós-venda. Sua satisfação é nossa prioridade!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
