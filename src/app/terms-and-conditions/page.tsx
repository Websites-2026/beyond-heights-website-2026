import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function TermsAndConditionsPage() {
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
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        {/* <p className="text-sm text-gray-500 mb-8">Last updated: March 18, 2026</p> */}
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">1. Introduction</h2>
            <p>Welcome to Beyond Heights. These Terms and Conditions govern your use of our website and services, including registration for workshops, events, and related activities. By accessing this website, we assume you accept these terms and conditions in full.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">2. Registration and Participation</h2>
            <p>When registering for a Beyond Heights workshop or event, you agree to provide accurate and complete information. Your registration is not confirmed until full payment (if applicable) is received. We reserve the right to refuse admission or to ask individuals to leave our events if their behavior is deemed inappropriate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">3. Intellectual Property Rights</h2>
            <p>Unless otherwise stated, Beyond Heights and/or its licensors own the intellectual property rights for all material on this website and materials provided during our workshops. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use, subject to restrictions set in these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">4. Limitation of Liability</h2>
            <p>In no event shall Beyond Heights, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or participation in our events, whether such liability is under contract, tort, or otherwise.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">5. Modifications</h2>
            <p>Beyond Heights is permitted to revise these Terms and Conditions at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
