import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 flex flex-col bg-white text-black">
      <FloatingHeader theme="light" />
      <div className="flex-1 mx-auto max-w-4xl px-6 w-full mt-10 mb-16">
        <div className="flex justify-center mb-10">
          <Image 
            src="https://gfkoahjtzykilyvxzzto.supabase.co/storage/v1/object/public/Assets/beyond%20heights/Beyond%20Heights%20Logo-02.svg" 
            alt="Beyond Heights Logo" 
            width={200} 
            height={80} 
            className="w-auto h-20"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        {/* <p className="text-sm text-gray-500 mb-8">Last updated: March 18, 2026</p> */}
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">1. Information We Collect</h2>
            <p>At Beyond Heights, we respect your privacy. We collect personal information that you voluntarily provide to us when you register for an event, express an interest in obtaining information about us or our products and services, or otherwise contact us. This may include your name, email address, phone number, and ID documents (like Aadhaar) where necessary for certification purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">2. How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. This includes sending administrative information, processing registrations, issuing certificates, and responding to inquiries.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">3. Sharing Your Information</h2>
            <p>We only share and disclose your information in the following situations: compliance with laws, vital interests and legal rights, and with your consent. We do not sell, rent, or trade any of your information with third parties for their promotional purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">4. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at info@beyondheights.com or by post to our office address.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
