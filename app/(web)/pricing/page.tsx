import FAQ from '@/app/(web)/components/faq';
import Footer from '@/app/(web)/components/footer';
import PricingContent from '@/app/_pricing';

export default function Page() {
  return (
    <>
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <PricingContent />
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
}
