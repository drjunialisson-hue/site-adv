import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  serviceName?: string;
  serviceType?: string;
}

const SEO = ({
  title = "Junialisson Costa - Advocacia Criminal",
  description = "Dr. Junialisson é graduado em Direito pela Universidade Católica do Salvador (UCSal), com formação acadêmica voltada à área penal.",
  canonical,
  ogImage = "https://www.junialissoncosta.adv.br/dr-junialisson-perfil.JPEG",
  ogType = "website",
  keywords = "advogado criminal, advocacia criminal, direito penal, defesa criminal, advogado Salvador, Junialisson Costa, prisão em flagrante, habeas corpus, tribunal do júri, audiência de custódia, execução penal, lei de drogas, crimes contra a vida",
  noindex = false,
  serviceName,
  serviceType,
}: SEOProps) => {
  const baseUrl = "https://www.junialissoncosta.adv.br";
  
  useEffect(() => {
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    
    // Meta tags adicionais para SEO
    updateMetaTag("author", "Dr. Junialisson Costa");
    updateMetaTag("geo.region", "BR-BA");
    updateMetaTag("geo.placename", "Salvador");
    updateMetaTag("language", "Portuguese");
    
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", fullCanonical, true);
    updateMetaTag("og:site_name", "Junialisson Costa - Advocacia Criminal", true);
    updateMetaTag("og:locale", "pt_BR", true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", title, true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullCanonical);

    // Structured Data (JSON-LD) - LegalService
    let structuredDataScript = document.getElementById("structured-data");
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.id = "structured-data";
(structuredDataScript as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(structuredDataScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": serviceName ? "Service" : "LegalService",
      ...(serviceName && {
        name: serviceName,
        serviceType: serviceType || "Serviço Jurídico",
        provider: {
          "@type": "LegalService",
          name: "Dr. Junialisson Costa - Advocacia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Salvador",
            addressRegion: "BA",
            addressCountry: "BR"
          },
          telephone: "+5571997071372",
          email: "contato@junialissoncosta.adv.br",
          url: baseUrl
        }
      }),
      ...(!serviceName && {
        name: "Dr. Junialisson Costa - Advocacia",
        description: description,
        url: baseUrl,
        telephone: "+5571997071372",
        email: "contato@junialissoncosta.adv.br",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Salvador",
          addressRegion: "BA",
          addressCountry: "BR"
        },
        areaServed: {
          "@type": "City",
          name: "Salvador"
        },
        priceRange: "$$",
        openingHours: "Mo-Su 00:00-23:59",
        serviceType: [
          "Direito Criminal",
          "Direito Civil",
          "Direito Trabalhista"
        ]
      })
    };

    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, canonical, ogImage, ogType, keywords, noindex, serviceName, serviceType]);

  return null;
};

export default SEO;
