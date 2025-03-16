
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, FileText, Shield, Sparkles } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose RentWise?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform generates legally-sound rental agreements tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border bg-card hover:shadow-md transition-all duration-300 stagger-item">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Advanced AI technology ensures your agreements are comprehensive and tailored to your specific situation.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="border bg-card hover:shadow-md transition-all duration-300 stagger-item">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legally Sound</h3>
                <p className="text-muted-foreground">
                  All agreements are created following state-specific legal requirements to protect both landlords and tenants.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="border bg-card hover:shadow-md transition-all duration-300 stagger-item">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Documents</h3>
                <p className="text-muted-foreground">
                  Generate and download professional rental agreements in seconds, saving time and reducing hassle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating your rental agreement is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center stagger-item">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Enter Details</h3>
              <p className="text-muted-foreground">
                Fill in basic information about the landlord, tenant, property, and rental terms.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center stagger-item">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Generate Agreement</h3>
              <p className="text-muted-foreground">
                Our AI engine creates a customized rental agreement based on your inputs and state laws.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center stagger-item">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Download & Sign</h3>
              <p className="text-muted-foreground">
                Review, download as PDF, and collect signatures from all parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to create your rental agreement?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start generating legally-sound, customized rental agreements in minutes.
          </p>
          <Button asChild size="lg" className="min-w-[200px] h-12 text-base">
            <Link to="/generator">Create Agreement Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} RentWise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
