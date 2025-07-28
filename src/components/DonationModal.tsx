import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Globe, Heart, Shield, Zap, Copy, Check, ChevronDown } from 'lucide-react';
interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: string;
}
const DonationModal = ({
  isOpen,
  onClose,
  amount
}: DonationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();
  const recipientDetails = {
    country: "Uganda",
    city: "Kampala",
    service: "AirtelMoney",
    phone: "+256 756 100 112",
    firstName: "Kawuma",
    lastName: "Umaru"
  };
  const handleRemitlyDonation = async () => {
    setIsLoading(true);
    try {
      // Optimized URL for Uganda AirtelMoney service
      const url = "https://www.remitly.com/us/en/uganda/airtel-money";
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setIsLoading(false);
        onClose();
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const openRemitlyHome = () => {
    window.open("https://www.remitly.com", '_blank', 'noopener,noreferrer');
  };
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
      
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard: ${text}`,
        duration: 2000,
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        title: "Copy failed",
        description: "Please copy the information manually",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full mx-auto my-8 p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <Heart className="w-8 h-8" />
              Support a Child in Uganda
            </DialogTitle>
            <p className="text-orange-100 mt-2">
              Your donation directly supports vulnerable children in Kampala through our trusted local partners via <span className="font-semibold">www.remitly.com</span>.
            </p>
          </DialogHeader>
        </div>

        <ScrollArea className="h-[70vh] p-6">
          <div className="space-y-6">
            {/* Donation Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                Donation Options
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Small', 'Medium', 'Large', 'Custom'].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className="h-12 font-semibold border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300"
                    onClick={() => option !== 'Custom' && handleRemitlyDonation()}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Choose a donation option or enter your preferred amount on Remitly
              </p>
            </div>

            {/* Donation Instructions */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                How to Donate Securely
              </h4>
              <ol className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  Click "Send Money via Remitly" below to open www.remitly.com
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  Copy and paste the exact recipient details shown below into Remitly's form
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  Enter your donation amount and complete the secure transfer
                </li>
              </ol>
            </div>

            {/* Recipient Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-500" />
                Recipient Details for Remitly
              </h3>
              <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <strong>Important:</strong> Copy these exact details into your Remitly transfer form. All fields must match exactly for the donation to reach our partner in Uganda.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                {[
                  { label: 'Country', value: recipientDetails.country, icon: Globe },
                  { label: 'City', value: recipientDetails.city, icon: Globe },
                  { label: 'Service', value: recipientDetails.service, icon: Zap },
                  { label: 'Phone Number', value: recipientDetails.phone, icon: ExternalLink },
                  { label: 'First Name', value: recipientDetails.firstName, icon: Heart },
                  { label: 'Last Name', value: recipientDetails.lastName, icon: Heart }
                ].map((detail) => (
                  <div key={detail.label} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center gap-3">
                      <detail.icon className="w-4 h-4 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-600">{detail.label}:</span>
                        <span className="ml-2 font-medium text-gray-900">{detail.value}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(detail.value, detail.label)}
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`Copy ${detail.label}`}
                    >
                      {copiedField === detail.label ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleRemitlyDonation}
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Opening Remitly...
                  </div>
                ) : (
                  <>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Send Money via Remitly
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={openRemitlyHome}
                className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Remitly Homepage
              </Button>
            </div>

            {/* Impact Message */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Your Impact</h4>
              <p className="text-sm text-green-800">
                Every donation provides food, education, shelter, and hope to vulnerable children in Uganda. 
                You're not just sending money - you're changing lives and building futures.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                Secure transfers powered by Remitly
              </div>
              <p className="text-xs text-gray-500">
                Remitly is a licensed money transfer service with bank-level security
              </p>
            </div>
          </div>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default DonationModal;