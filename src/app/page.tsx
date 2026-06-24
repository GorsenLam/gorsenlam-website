import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CareerSection } from '@/components/CareerSection';
import { CoursesSection } from '@/components/CoursesSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <CoursesSection />
      <ContactSection />
    </main>
  );
}
