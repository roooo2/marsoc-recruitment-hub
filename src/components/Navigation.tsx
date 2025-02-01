import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { LogIn, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

export const Navigation = () => {
  const location = useLocation();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session?.user?.user_metadata?.avatar_url) {
        setAvatarUrl(session.user.user_metadata.avatar_url);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user?.user_metadata?.avatar_url) {
        setAvatarUrl(session.user.user_metadata.avatar_url);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-card/50 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-orbitron text-xl font-bold text-primary">
            M.A.R.S.O.C
          </Link>
          <div className="flex items-center space-x-4">
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
            {!loading && (
              <>
                {session ? (
                  <div className="flex items-center space-x-4">
                    {avatarUrl && (
                      <img
                        src={avatarUrl}
                        alt="Discord Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleLogin}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login with Discord
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};