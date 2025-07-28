
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { createAbsoluteUrl, enhanceKeywords, createKeywordString } from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createGeneralFAQData,
  createProgramsFAQData,
  createDonationFAQData,
  createLocalBusinessStructuredData,
  createBreadcrumbStructuredData,
  createServiceStructuredData
} from '../data/structuredData';

const SEO: React.FC<SEOProps> = ({
  title = 'Hope and Faith Foundation - Transforming Lives Through Love and Care',
  description = 'Hope and Faith Foundation is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'Hope and Faith Foundation',
  imageUrl = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['children foundation', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced keywords for specific posts
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  const localBusinessStructuredData = createLocalBusinessStructuredData();
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        title,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        description,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const generalFAQData = location.pathname === '/' 
    ? createGeneralFAQData() 
    : null;
    
  const programsFAQData = location.pathname.includes('programs') 
    ? createProgramsFAQData() 
    : null;
    
  const donationFAQData = location.pathname.includes('donate') 
    ? createDonationFAQData() 
    : null;

  // Create breadcrumb data for non-home pages
  const breadcrumbData = location.pathname !== '/' 
    ? createBreadcrumbStructuredData([
        { name: 'Home', url: 'https://hopeandfaithfoundation.online' },
        { name: title.split(' - ')[0], url: currentUrl }
      ])
    : null;

  // Create service data for program pages
  const serviceData = location.pathname.includes('programs')
    ? createServiceStructuredData(
        'Children Support Programs',
        'Comprehensive support for vulnerable children through education, health, protection, and community development',
        currentUrl
      )
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Mobile & Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance & Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Security & Privacy */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Accessibility */}
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      
      {/* Geographic & Language */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="audience" content="all" />
      
      {/* Content Classification */}
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Hope and Faith Foundation" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://hopeandfaithfoundation.org" />}
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={`${title} - Hope and Faith Foundation`} />
      <meta name="twitter:creator" content="@hopefaithfoundation" />
      <meta name="twitter:site" content="@hopefaithfoundation" />
      
      {/* LinkedIn Enhanced */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`${title} - Hope and Faith Foundation`} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest Rich Pins */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      <meta name="pinterest:url" content={currentUrl} />
      
      {/* WhatsApp Enhanced Sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content={modifiedDate || publishDate || new Date().toISOString()} />
      
      {/* Enhanced Social Media */}
      <meta name="application-name" content="Hope and Faith Foundation" />
      <meta name="apple-mobile-web-app-title" content="Hope & Faith Foundation" />
      <meta name="msapplication-tooltip" content="Hope and Faith Foundation - Transforming children's lives in Uganda" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      
      {/* Enhanced JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
      
      {serviceData && (
        <script type="application/ld+json">
          {JSON.stringify(serviceData)}
        </script>
      )}
      
      {generalFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(generalFAQData)}
        </script>
      )}
      
      {programsFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(programsFAQData)}
        </script>
      )}
      
      {donationFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(donationFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
