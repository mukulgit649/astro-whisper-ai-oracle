
import { AstroBotProvider } from '@/contexts/AstroBotContext';
import AstroBotContainer from '@/components/astrobot/AstroBotContainer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stars from '@/components/Stars';
import CosmicBackground from '@/components/CosmicBackground';

const AstroBot = () => {
  return (
    <div className="cosmic-bg min-h-screen flex flex-col">
      <Stars count={150} />
      <CosmicBackground />
      
      <Navbar />
      
      <AstroBotProvider>
        <AstroBotContainer />
      </AstroBotProvider>
      
      <Footer />
    </div>
  );
};

export default AstroBot;
