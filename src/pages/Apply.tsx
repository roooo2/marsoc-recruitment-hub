import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Apply = () => {
  const [formData, setFormData] = useState({
    discordUsername: '',
    pavlovUser: '',
    age: '',
    experience: '',
    readRules: '',
    genders: '',
    handleSituation: '',
    gender: '',
    playGames: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://discord.com/api/webhooks/1333170079797350572/5LJBbZVEovZV-KY36ah3SfVtm27BxNn8ztvKng_tV7pLAYj5fHPhJ70XdG0bk4b3FeNT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New Application Received!\n\n` +
            `Discord Username: ${formData.discordUsername}\n` +
            `Pavlov User: ${formData.pavlovUser}\n` +
            `Age: ${formData.age}\n` +
            `Previous Experience: ${formData.experience}\n` +
            `Read Rules: ${formData.readRules}\n` +
            `Genders Answer: ${formData.genders}\n` +
            `Situation Handling: ${formData.handleSituation}\n` +
            `Gender: ${formData.gender}\n` +
            `Plays Fortnite/Gorilla Tag: ${formData.playGames}`
        }),
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          discordUsername: '',
          pavlovUser: '',
          age: '',
          experience: '',
          readRules: '',
          genders: '',
          handleSituation: '',
          gender: '',
          playGames: ''
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary slide-in">
          Apply to M.A.R.S.O.C
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 fade-in">
          <div className="space-y-2">
            <label className="text-sm font-medium">Discord Username</label>
            <Input
              required
              value={formData.discordUsername}
              onChange={(e) => setFormData(prev => ({ ...prev, discordUsername: e.target.value }))}
              placeholder="Your Discord username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Pavlov Username</label>
            <Input
              required
              value={formData.pavlovUser}
              onChange={(e) => setFormData(prev => ({ ...prev, pavlovUser: e.target.value }))}
              placeholder="Your Pavlov username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Age</label>
            <Input
              required
              type="number"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              placeholder="Your age"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Previous Moderator/Admin Experience</label>
            <Textarea
              required
              value={formData.experience}
              onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
              placeholder="Describe your previous experience"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Have you read the rules?</label>
            <Input
              required
              value={formData.readRules}
              onChange={(e) => setFormData(prev => ({ ...prev, readRules: e.target.value }))}
              placeholder="Yes/No"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">How many genders are there?</label>
            <Input
              required
              value={formData.genders}
              onChange={(e) => setFormData(prev => ({ ...prev, genders: e.target.value }))}
              placeholder="Your answer"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">How would you handle an unknown situation?</label>
            <Textarea
              required
              value={formData.handleSituation}
              onChange={(e) => setFormData(prev => ({ ...prev, handleSituation: e.target.value }))}
              placeholder="Describe how you would handle it"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Gender</label>
            <Input
              required
              value={formData.gender}
              onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
              placeholder="Your gender"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Do you play Fortnite and/or Gorilla Tag?</label>
            <Input
              required
              value={formData.playGames}
              onChange={(e) => setFormData(prev => ({ ...prev, playGames: e.target.value }))}
              placeholder="Yes/No - Which ones?"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Apply;