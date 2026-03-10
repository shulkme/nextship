import FAQ from '@/app/(web)/components/faq';
import Feature from '@/app/(web)/components/feature';
import Footer from '@/app/(web)/components/footer';
import Hero from '@/app/(web)/components/hero';
import Newsletter from '@/app/(web)/components/newsletter';
import Stats from '@/app/(web)/components/stats';
import Testimonials from '@/app/(web)/components/testimonials';

export default function Page() {
  return (
    <>
      <Hero />
      <Feature />
      <Stats />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}
