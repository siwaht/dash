export default function StructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "AI Advisory Services",
        "description": "Expert guidance to unlock AI's full potential from opportunity discovery to responsible implementation",
        "provider": {
          "@type": "Organization",
          "name": "AgentX"
        },
        "serviceType": "AI Consulting"
      },
      {
        "@type": "Service",
        "name": "Agentic AI Platform",
        "description": "Deploy specialized AI agents that function like a digital workforce with autonomous planning and task execution",
        "provider": {
          "@type": "Organization",
          "name": "AgentX"
        },
        "serviceType": "AI Platform"
      },
      {
        "@type": "Service",
        "name": "Enterprise Automation",
        "description": "End-to-end process transformation with intelligent workflow automation and exception handling",
        "provider": {
          "@type": "Organization",
          "name": "AgentX"
        },
        "serviceType": "Workflow Automation"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AgentX's Agentic AI Platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentX is an enterprise agentic AI platform that deploys intelligent agents to automate workflows, understand business systems, and execute complex multi-step tasks with HIPAA and GDPR compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How does AgentX ensure data privacy and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentX is built with privacy-first architecture and maintains full compliance with HIPAA, GDPR, and other regulatory standards. All data handling follows enterprise-grade security protocols."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does AgentX serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentX serves Healthcare, Banking & Financial Services, E-commerce & Supply Chain, and other industries requiring compliant, secure AI automation solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What results can I expect from implementing AgentX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically achieve 10x efficiency improvements, 70% cost reduction, and 24/7 operational availability with AgentX's intelligent automation platform."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AgentX",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
