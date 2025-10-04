const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Dra. Hariana Andrade Alves",
  "image": "https://exemplo.com/imagens/og-hariana.jpg",
  "url": "https://harianaandradealves.adv.br",
  "logo": "https://seu-dominio.com/logo.png",
  "areaServed": "Brasil",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Dom Pedro I, 375 B",
    "addressLocality": "Apucarana",
    "addressRegion": "PR",
    "postalCode": "86811-060",
    "addressCountry": "BR"
  },
  "priceRange": "$$",
  "telephone": "+55 43 99904-6895",
  "email": "harianaadv@gmail.com",
  "founder": "Hariana Andrade Alves",
  "foundingDate": "2019",
  "knowsAbout": [
    "Aposentadoria",
    "Revisão de Benefícios",
    "Pensão por Morte",
    "Planejamento Previdenciário"
  ]
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);