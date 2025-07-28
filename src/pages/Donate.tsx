
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Heart, Users, BookOpen, Utensils, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import DonationModal from '@/components/DonationModal';

const Donate = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const donationCategories = [
    {
      title: "Education Support",
      description: "Help provide school supplies, uniforms, and educational materials",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Nutrition Program",
      description: "Support nutritious meals and feeding programs for children",
      icon: <Utensils className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Healthcare Access",
      description: "Fund medical care, health screenings, and healthcare services",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Family Support",
      description: "Provide comprehensive support for vulnerable families",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];
  
  const handleDonationClick = (category?: string) => {
    setSelectedAmount('');
    setIsDonationModalOpen(true);
  };
  
  return (
    <PageLayout>
      <SEO 
        title="Donate to Children in Uganda - Hope and Faith Foundation" 
        description="Transform a child's life with your donation. Support education, healthcare, nutrition, and protection for vulnerable children in Uganda. Secure online donations with immediate impact."
        keywords={['donate children Uganda', 'sponsor child Uganda', 'Uganda charity donation', 'children foundation donation', 'support vulnerable children', 'education funding Uganda', 'child welfare donations', 'monthly child sponsorship']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-6">Make a Difference Today</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your generous donation directly transforms the lives of vulnerable children in Uganda. 
                Every contribution, no matter the size, creates hope and opens doors to brighter futures.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Choose How You Want to Help</h2>
                    <p className="text-gray-600">Every contribution makes a real difference in a child's life</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {donationCategories.map((category, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                           onClick={() => handleDonationClick(category.title)}>
                        <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
                      onClick={() => handleDonationClick()}
                    >
                      Make a Donation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-16"
            >
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Monthly Sponsorship</h2>
              <p className="text-xl mb-6 text-orange-100">
                Become a monthly sponsor and provide ongoing support for a child's education, healthcare, and wellbeing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-xl font-bold mb-2">Basic Support</div>
                  <div className="text-orange-100">Essential needs and education</div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">Full Sponsorship</div>
                  <div className="text-orange-100">Comprehensive child support</div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">Family Support</div>
                  <div className="text-orange-100">Extended family assistance</div>
                </div>
              </div>
              <Button 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => handleDonationClick()}
              >
                Start Monthly Sponsorship
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Your Donation Matters</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Direct Impact:</strong> 100% of program donations go directly to helping children</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Transparency:</strong> Regular updates and reports on how your donation is used</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Local Impact:</strong> Supporting communities in Uganda with sustainable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Long-term Change:</strong> Creating lasting transformation in children's lives</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">Other Ways to Give</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bank Transfer</h4>
                    <p className="text-gray-600 text-sm">Direct bank transfers for larger donations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">In-Kind Donations</h4>
                    <p className="text-gray-600 text-sm">School supplies, medical equipment, clothing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Corporate Partnerships</h4>
                    <p className="text-gray-600 text-sm">Partner with us for sustained impact</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fundraising Events</h4>
                    <p className="text-gray-600 text-sm">Organize events in your community</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
                onClick={() => handleDonationClick()}
              >
                Make a Donation
              </Button>
              <p className="text-gray-600 mt-4">
                Have questions about donating? <Link to="/contact" className="text-orange-600 hover:underline">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
        amount={selectedAmount}
      />
    </PageLayout>
  );
};

export default Donate;
