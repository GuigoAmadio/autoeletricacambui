import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoelétrica Cambui - Especialistas em Elétrica Automotiva",
  description:
    "Autoelétrica Cambui oferece serviços especializados em sistemas elétricos automotivos há mais de 20 anos. Diagnóstico eletrônico, som automotivo, alarmes, rastreadores e muito mais.",
  keywords:
    "autoelétrica, elétrica automotiva, diagnóstico eletrônico, som automotivo, alarmes, rastreadores, Cambui, Campinas",
  authors: [{ name: "Autoelétrica Cambui" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Autoelétrica Cambui - Especialistas em Elétrica Automotiva",
    description:
      "Serviços especializados em sistemas elétricos automotivos com mais de 20 anos de experiência.",
    type: "website",
    locale: "pt_BR",
    siteName: "Autoelétrica Cambui",
  },
  alternates: {
    canonical: "https://autoeletricacambui.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
