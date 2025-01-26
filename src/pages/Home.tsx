import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div 
      className="min-h-screen pt-16 relative"
      style={{
        backgroundImage: "url('/lovable-uploads/1ebf8221-fe21-4bbb-a307-c8d636e52db4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary slide-in">
            Welcome Civilian
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto fade-in">
            Join the elite ranks of M.A.R.S.O.C and become part of something greater than yourself.
          </p>
          <div className="flex flex-col items-center gap-4">
            <ChevronDown className="animate-bounce text-primary w-8 h-8" />
            <Link to="/apply">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;