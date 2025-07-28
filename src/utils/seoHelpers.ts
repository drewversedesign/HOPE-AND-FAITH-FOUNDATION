
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://hopeandfaithfoundation.online'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  const commonUgandaKeywords = [
    'Uganda NGO',
    'Kampala charity',
    'East Africa foundation',
    'Central Region Uganda',
    'African children charity'
  ];

  if (pathname.includes('programs')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'children programs Uganda',
      'education support Kampala',
      'child sponsorship Uganda',
      'health programs children',
      'community development Uganda',
      'child welfare programs',
      'youth development Africa',
      'educational support vulnerable children',
      'mentorship programs Uganda',
      'school sponsorship Uganda',
      'child protection services',
      'family empowerment programs'
    ];
  }
  
  if (pathname.includes('donate')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'donate children Uganda',
      'sponsor child Uganda',
      'Uganda charity donations',
      'support vulnerable children',
      'charitable giving Uganda',
      'help children in need Africa',
      'foundation donations Uganda',
      'child welfare support',
      'monthly child sponsorship',
      'one-time donation children',
      'education funding Uganda',
      'healthcare donations children'
    ];
  }
  
  if (pathname.includes('volunteer')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'volunteer Uganda children',
      'volunteer opportunities Kampala',
      'community service Uganda',
      'help children Uganda volunteer',
      'NGO volunteer opportunities',
      'make difference Uganda',
      'youth mentoring volunteer',
      'education volunteer Uganda',
      'child welfare volunteer',
      'community development volunteer'
    ];
  }
  
  if (pathname.includes('about')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'Hope and Faith Foundation Uganda',
      'Uganda children foundation',
      'mission vision children',
      'foundation leadership Uganda',
      'our story children',
      'foundation history Uganda',
      'registered NGO Uganda',
      'non-profit children Uganda'
    ];
  }
  
  if (pathname.includes('impact')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'foundation impact Uganda',
      'children lives transformed',
      'success stories Uganda',
      'community transformation children',
      'measurable impact children',
      'foundation results Uganda',
      'positive change children',
      'sustainable development Uganda'
    ];
  }

  if (pathname.includes('contact')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'contact children foundation',
      'Uganda charity contact',
      'foundation contact information',
      'get involved children Uganda',
      'partnership opportunities Uganda'
    ];
  }

  if (pathname.includes('blog')) {
    return [
      ...baseKeywords,
      ...commonUgandaKeywords,
      'children stories Uganda',
      'foundation news updates',
      'impact stories children',
      'Uganda development blog',
      'child welfare news'
    ];
  }
  
  return [...baseKeywords, ...commonUgandaKeywords];
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  return category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');
};
