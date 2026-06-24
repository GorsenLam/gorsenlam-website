import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { MilestonesSection } from '@/components/MilestonesSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ProductsSection />
      <MilestonesSection />
      <ContactSection />
    </main>
  );
}
