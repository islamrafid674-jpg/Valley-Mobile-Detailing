/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import ParallaxBreak from './components/ParallaxBreak';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-brand-red selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <ParallaxBreak />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
