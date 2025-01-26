import { useEffect } from 'react';

const ranks = [
  { title: 'Private', description: 'Entry level rank' },
  { title: 'Private Second Class', description: 'Second tier private rank' },
  { title: 'Private First Class', description: 'Advanced private rank' },
  { title: 'Specialist', description: 'Technical expertise rank' },
  { title: 'Corporal', description: 'Junior leadership rank' },
  { title: 'Sergeant', description: 'Non-commissioned officer' },
  { title: 'Sergeant Major', description: 'Senior non-commissioned officer' },
  { title: 'Chief Warrant Officer 3', description: 'Technical leader rank' },
  { title: 'Chief of the General Staff', description: 'Highest commanding rank' }
];

const Ranks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary slide-in">
          Rank Structure
        </h1>
        <div className="space-y-8">
          {ranks.map((rank, index) => (
            <div
              key={rank.title}
              className="rank-card scroll-reveal backdrop-blur-sm bg-card/80"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-bold text-primary mb-2">{rank.title}</h2>
              <p className="text-muted-foreground">{rank.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranks;