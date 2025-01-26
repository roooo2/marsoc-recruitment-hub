import { useEffect } from 'react';

const ranks = [
  {
    category: "General Officer Ranks",
    ranks: [
      { title: 'General of the Army (GOA)', description: 'Highest general officer rank' },
      { title: 'Lieutenant General (LTG)', description: 'Three-star general' },
      { title: 'Major General (MG)', description: 'Two-star general' },
      { title: 'Brigadier General (BG)', description: 'One-star general' }
    ]
  },
  {
    category: "Officer Ranks",
    ranks: [
      { title: 'Colonel (COL)', description: 'Senior field officer' },
      { title: 'Lieutenant Colonel (LTC)', description: 'Field grade officer' },
      { title: 'Major (MAJ)', description: 'Field grade officer' },
      { title: 'Captain (CPT)', description: 'Company grade officer' },
      { title: 'First Lieutenant (1LT)', description: 'Company grade officer' },
      { title: 'Second Lieutenant (2LT)', description: 'Entry-level officer' },
      { title: 'CO', description: 'Commanding Officer' }
    ]
  },
  {
    category: "Warrant Officer Ranks",
    ranks: [
      { title: 'Chief Warrant Officer 5 (CW5)', description: 'Master technical expert' },
      { title: 'Chief Warrant Officer 4 (CW4)', description: 'Senior technical expert' },
      { title: 'Chief Warrant Officer 3 (CW3)', description: 'Advanced technical expert' },
      { title: 'Chief Warrant Officer 2 (CW2)', description: 'Intermediate technical expert' },
      { title: 'Warrant Officer 1 (WO1)', description: 'Entry-level warrant officer' },
      { title: 'WO', description: 'Warrant Officer' }
    ]
  },
  {
    category: "MARSOC Ranks",
    ranks: [
      { title: 'Sergeant Major of the Army (SMA)', description: 'Highest enlisted rank' },
      { title: 'Command Sergeant Major (CSM)', description: 'Senior enlisted advisor' },
      { title: 'Sergeant Major (SGM)', description: 'Senior non-commissioned officer' },
      { title: 'First Sergeant (1SG)', description: 'Company senior enlisted advisor' },
      { title: 'SNCO', description: 'Senior Non-Commissioned Officer' },
      { title: 'Master Sergeant (MSgt)', description: 'Senior technical leader' },
      { title: 'Sergeant First Class (SFC)', description: 'Advanced non-commissioned officer' },
      { title: 'Staff Sergeant (SSG)', description: 'Mid-level non-commissioned officer' },
      { title: 'NCO', description: 'Non-Commissioned Officer' },
      { title: 'Sergeant (SGT)', description: 'Junior non-commissioned officer' },
      { title: 'Corporal (CPL)', description: 'Team leader' },
      { title: 'JNCO', description: 'Junior Non-Commissioned Officer' },
      { title: 'Specialist (SPC)', description: 'Technical specialist' },
      { title: 'Private First Class (PFC)', description: 'Advanced enlisted rank' },
      { title: 'Private Second Class (PSC)', description: 'Intermediate enlisted rank' },
      { title: 'Private (PVT)', description: 'Entry-level enlisted rank' },
      { title: 'Lower Enlisted', description: 'Basic enlisted personnel' }
    ]
  }
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
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary slide-in">
          M.A.R.S.O.C Rank Structure
        </h1>
        <div className="grid gap-16">
          {ranks.map((category, categoryIndex) => (
            <div key={category.category} className="scroll-reveal">
              <div className="relative">
                <h2 className="text-3xl font-bold text-primary mb-8 slide-in inline-block">
                  {category.category}
                </h2>
                <div className="h-px bg-primary/20 w-full absolute bottom-0 left-0" />
              </div>
              <div className="grid gap-4 mt-6">
                {category.ranks.map((rank, rankIndex) => (
                  <div
                    key={rank.title}
                    className="rank-card scroll-reveal backdrop-blur-sm bg-card/80 border border-primary/10"
                    style={{ transitionDelay: `${(categoryIndex * 100) + (rankIndex * 50)}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-primary">{rank.title}</h3>
                      <div className="h-px flex-1 mx-4 bg-primary/20" />
                    </div>
                    <p className="text-muted-foreground mt-2">{rank.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranks;
