import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function RefundPolicyPage() {
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
        <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
        {/* <p className="text-sm text-gray-500 mb-8">Last updated: March 18, 2026</p> */}
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">1. Event Registrations</h2>
            <p>Thank you for registering for an event at Beyond Heights. We strive to provide the best experience possible. Please read our refund policy carefully before making any payments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">2. Cancellation by Participant</h2>
            <p>If you need to cancel your registration for a workshop or event, please notify us at least 7 days prior to the event date to be eligible for a full refund. Cancellations made within 7 days of the event will not be eligible for a refund, but you may transfer your ticket to another person with prior approval.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">3. Cancellation by Beyond Heights</h2>
            <p>In the unlikely event that Beyond Heights must cancel an event due to unforeseen circumstances, all registered participants will receive a full 100% refund of their registration fees. We are not responsible for any other expenses incurred by the participant (e.g., travel or accommodation).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">4. Refund Processing Time</h2>
            <p>Approved refunds will be processed and credited back to the original payment method within 5-10 business days. If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">5. Exceptions</h2>
            <p>Certain special events or workshops may have a different, specific strict no-refund policy. If applicable, this will be clearly stated on the registration page for that specific event.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
