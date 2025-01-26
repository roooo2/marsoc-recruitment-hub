import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card/50 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-orbitron text-xl font-bold text-primary">
            M.A.R.S.O.C
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-primary/20'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ranks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/ranks' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-primary/20'
              }`}
            >
              Ranks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};