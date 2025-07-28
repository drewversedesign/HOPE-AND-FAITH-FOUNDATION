
export const createOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': ['NGO', 'LocalBusiness', 'Organization'],
  name: 'Hope and Faith Foundation',
  alternateName: ['Hope and Faith Foundation Uganda', 'Hope & Faith Foundation'],
  url: 'https://hopeandfaithfoundation.online',
  logo: {
    '@type': 'ImageObject',
    url: 'https://hopeandfaithfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
    width: 512,
    height: 512
  },
  image: 'https://hopeandfaithfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  description: 'Hope and Faith Foundation is a registered Ugandan non-profit organization transforming children\'s lives through comprehensive education, healthcare, protection, and community development programs in Central Region Uganda.',
  slogan: 'Transforming Lives Through Love and Care',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+256756100112',
      availableLanguage: ['en', 'sw'],
      areaServed: 'Uganda',
      serviceArea: 'Central Region, Uganda'
    },
    {
      '@type': 'ContactPoint',
      contactType: 'donations',
      telephone: '+256756100112',
      availableLanguage: ['en'],
      areaServed: 'Worldwide'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Uganda',
    addressRegion: 'Central Region',
    addressLocality: 'Kampala',
    streetAddress: 'Kampala Road, Central Division'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '0.3476',
    longitude: '32.5825'
  },
  foundingDate: '2020',
  legalName: 'Hope and Faith Foundation',
  mission: 'To transform the lives of children through love, care, education, health, protection, and community development programs',
  areaServed: [
    {
      '@type': 'Country',
      name: 'Uganda'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Central Region, Uganda'
    }
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '0.3476',
      longitude: '32.5825'
    },
    geoRadius: '100000'
  },
  knowsAbout: [
    'Child Welfare',
    'Education Support',
    'Community Development', 
    'Child Protection',
    'Health Programs',
    'Family Empowerment',
    'Vocational Training',
    'Emergency Assistance',
    'Uganda NGO',
    'African Charity'
  ],
  nonprofitStatus: 'Nonprofit501c3Equiv',
  taxID: 'UG-NGO-2020-001',
  seeks: 'Donations, volunteers, and partnerships to support children and families in Uganda',
  memberOf: {
    '@type': 'Organization',
    name: 'Uganda National NGO Board'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Children Support Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Education Support & Scholarships',
          description: 'Quality education opportunities, school supplies, uniforms, and scholarships for vulnerable children'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service', 
          name: 'Health & Nutrition Programs',
          description: 'Healthcare, health screenings, and nutritious meals for healthy child development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Child Protection Services', 
          description: 'Safe environments and protection from abuse, exploitation, and harmful situations'
        }
      }
    ]
  },
  openingHours: 'Mo-Fr 08:00-17:00, Sa 09:00-13:00',
  priceRange: 'Free',
  telephone: '+256756100112',
  email: 'info@hopeandfaithfoundation.online',
  sameAs: [
    'https://www.facebook.com/hopeandfaithfoundation',
    'https://www.instagram.com/hopeandfaithfoundation'
  ]
});

export const createBlogPostStructuredData = (
  currentUrl: string,
  title: string,
  absoluteImageUrl: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  description: string,
  keywords: string[],
  category?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': currentUrl
  },
  headline: title,
  image: {
    '@type': 'ImageObject',
    url: absoluteImageUrl,
    width: 1200,
    height: 630
  },
  datePublished: publishDate,
  dateModified: modifiedDate || publishDate,
  author: {
    '@type': 'Organization',
    name: author || 'Hope and Faith Foundation',
    url: 'https://hopeandfaithfoundation.online'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Hope and Faith Foundation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://hopeandfaithfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
      width: 512,
      height: 512
    },
    url: 'https://hopeandfaithfoundation.online'
  },
  description: description,
  keywords: keywords.join(', '),
  articleSection: category,
  inLanguage: 'en-US',
  isAccessibleForFree: true
});

export const createEducationCenterFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does the new education center provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The new education center in Kampala provides quality learning facilities, dedicated teachers, educational support programs, and serves over 200 children in the area with comprehensive educational services.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can children enroll in Hope and Faith Foundation programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Families can contact Hope and Faith Foundation directly through our website or visit our education center in Kampala. We work with families to ensure children have access to quality education regardless of their financial situation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes this education center different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our education center focuses on holistic child development, combining quality academics with character building, health support, and community involvement. We provide not just education, but comprehensive care for each child.'
      }
    }
  ]
});

export const createGeneralFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Hope and Faith Foundation do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hope and Faith Foundation is a Ugandan non-profit organization dedicated to transforming children\'s lives through comprehensive programs in education, health, protection, and community development. We work directly with vulnerable children and families to provide sustainable support and opportunities.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I donate to Hope and Faith Foundation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can donate through our secure online platform, bank transfer, or contact us directly. We accept one-time donations and monthly sponsorships. All donations go directly to supporting our programs and the children we serve.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I volunteer with Hope and Faith Foundation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We welcome volunteers in various capacities including education support, healthcare assistance, community outreach, and administrative support. Contact us through our website to learn about current volunteer opportunities and requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where does Hope and Faith Foundation operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hope and Faith Foundation operates primarily in Uganda, with programs focused in Central Region communities around Kampala. We work directly with local communities to ensure our programs meet specific needs and cultural contexts.'
      }
    }
  ]
});

export const createProgramsFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What education programs does Hope and Faith Foundation offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide education support including school fees, learning materials, uniforms, after-school tutoring, scholarship programs, and direct educational support to help children stay in school and succeed academically.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health programs are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our health programs include regular health screenings, vaccination campaigns, nutrition support, health education, and access to medical care. We focus on preventive healthcare and early intervention to ensure children grow up healthy.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you ensure child protection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Child protection is central to our mission. We provide safe spaces, child rights education, counseling services, and work with families and communities to create protective environments. All our staff are trained in child protection protocols.'
      }
    }
  ]
});

export const createDonationFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is my donation tax-deductible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hope and Faith Foundation is a registered non-profit organization in Uganda. Donation receipts are provided for tax purposes. Please consult with your tax advisor regarding deductibility in your jurisdiction.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much of my donation goes directly to programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain high transparency standards with 90%+ of donations going directly to program implementation. Administrative costs are kept minimal to ensure maximum impact for the children and communities we serve.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I sponsor a specific child?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer child sponsorship programs where you can support a specific child\'s education, health, and well-being. Sponsors receive regular updates, photos, and can build meaningful connections with the children they support.'
      }
    },
    {
      '@type': 'Question', 
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept online donations through Remitly, bank transfers, mobile money (MTN Mobile Money, Airtel Money), and in-kind donations. All payment methods are secure and provide immediate donation receipts.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I track the impact of my donation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide quarterly impact reports, photo updates, success stories, and specific updates about how your donation is being used. Sponsors receive personalized updates about their sponsored children.'
      }
    }
  ]
});

export const createLocalBusinessStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://hopeandfaithfoundation.online/#organization',
  name: 'Hope and Faith Foundation',
  image: 'https://hopeandfaithfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  telephone: '+256756100112',
  email: 'info@hopeandfaithfoundation.online',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kampala Road, Central Division',
    addressLocality: 'Kampala',
    addressRegion: 'Central Region',
    addressCountry: 'Uganda'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.3476,
    longitude: 32.5825
  },
  url: 'https://hopeandfaithfoundation.online',
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
  priceRange: 'Free'
});

export const createBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createServiceStructuredData = (serviceName: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'NGO',
    name: 'Hope and Faith Foundation',
    url: 'https://hopeandfaithfoundation.online'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Uganda'
  },
  url: url,
  serviceType: 'Child Welfare Service',
  category: 'Child Development'
});
