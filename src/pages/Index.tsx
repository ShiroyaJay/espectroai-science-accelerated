import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, TrendingUp, Zap, Database, Brain, Sparkles, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab-ai.jpg";
import spectralWaves from "@/assets/spectral-waves.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Story Hook */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="AI-powered spectroscopy laboratory" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,45%,12%)]" />
        
        <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
              The Future of Scientific Analysis
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              From <span className="gradient-text">3 Years</span> to <span className="gradient-text">3 Months</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Imagine: A researcher dedicates three years to material spectroscopy. Now, with only three months 
              before critical grant deadlines, they face a choice—hire and train an analysis team, or risk everything. 
              There's a third option: <span className="font-semibold text-primary">instant answers</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/analyzer">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-8 py-6 transition-smooth w-full sm:w-auto"
                >
                  <Microscope className="mr-2" /> Try Live Demo
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-smooth"
              >
                Schedule Investor Call <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 transition-smooth"
              >
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">The Challenge</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Spectroscopy Analysis is <span className="gradient-text">Broken</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 shadow-elevated hover:shadow-glow transition-smooth border-2">
                <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Too Slow</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Weeks-long analysis delays risk funding opportunities, stall innovation pipelines, 
                  and put competitive advantages at stake.
                </p>
              </Card>
              
              <Card className="p-8 shadow-elevated hover:shadow-glow transition-smooth border-2">
                <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Too Expensive</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hiring specialized analysts, maintaining data teams, and training costs drain budgets 
                  before insights ever materialize.
                </p>
              </Card>
              
              <Card className="p-8 shadow-elevated hover:shadow-glow transition-smooth border-2">
                <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Bottleneck</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scarce spectroscopy experts create dependency. When they're unavailable, 
                  entire research projects grind to a halt.
                </p>
              </Card>
            </div>
            
            <div className="mt-16 p-8 rounded-2xl bg-muted/50 border-2 border-border">
              <p className="text-lg md:text-xl text-center leading-relaxed">
                <span className="font-bold">The AI revolution is here—</span> but current tools don't bridge the gap 
                between AI outputs and real spectroscopy physics. Research labs are stuck in the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img src={spectralWaves} alt="Spectral analysis visualization" className="w-full h-full object-cover animate-float" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">Revolutionary Technology</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Meet <span className="gradient-text">EspectroAI</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The world's first fully automated, end-to-end spectroscopy analysis platform 
                powered by proprietary pre-trained ML models.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-card shadow-elevated hover:scale-105 transition-smooth">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Raw Data → Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload raw spectroscopy data. Our ML models handle preprocessing, analysis, 
                  and interpretation automatically—no data scientist required.
                </p>
              </Card>
              
              <Card className="p-8 bg-card shadow-elevated hover:scale-105 transition-smooth">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Physics-Informed AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike generic AI tools, EspectroAI understands spectroscopy physics, 
                  delivering accurate, actionable results grounded in real science.
                </p>
              </Card>
            </div>
            
            <div className="bg-card rounded-2xl p-10 md:p-14 shadow-elevated border-2 border-primary/20">
              <div className="flex items-center justify-center mb-8">
                <Sparkles className="w-12 h-12 text-accent animate-pulse-glow" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
                <span className="gradient-text">90% Reduction</span> in Analyst Workload
              </h3>
              <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                EspectroAI eliminates the bottleneck entirely. What once took weeks now takes hours. 
                No training required. No team to hire. Just fast, accurate, actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example/Use Case */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Real-World Impact</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                See It in <span className="gradient-text">Action</span>
              </h2>
            </div>
            
            <Card className="p-10 md:p-14 bg-card shadow-elevated border-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 text-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">The Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      A battery R&D team at a leading energy company needed to analyze 500 spectroscopy 
                      samples to identify optimal electrode materials—deadline: 1 month to submit grant proposals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 text-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Traditional Approach</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      With conventional workflows, this would require 3 weeks of manual analysis, 
                      risking the grant deadline and requiring two full-time specialists.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">EspectroAI Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-bold text-foreground">3 hours.</span> The team uploaded raw data, 
                      received comprehensive analysis with material recommendations, met their deadline with 
                      time to spare, and secured $2.5M in grant funding.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t-2 border-border">
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold gradient-text mb-2">99.4%</div>
                    <div className="text-muted-foreground font-medium">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold gradient-text mb-2">$150K</div>
                    <div className="text-muted-foreground font-medium">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold gradient-text mb-2">$2.5M</div>
                    <div className="text-muted-foreground font-medium">Grant Secured</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visionary Appeal */}
      <section className="py-20 md:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,180,255,0.3),transparent)]" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
              The Convergence Moment
            </Badge>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Spectroscopy Into a <span className="gradient-text">Predictive Science</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                For the first time in history, three forces converge: massive open spectroscopy datasets, 
                GPU-accelerated high-performance computing, and mature machine learning architectures.
              </p>
              
              <p className="text-xl md:text-2xl font-semibold text-white">
                This isn't an incremental improvement—it's a paradigm shift.
              </p>
              
              <p>
                EspectroAI transforms spectroscopy from a slow, reactive bottleneck into a fast, predictive, 
                and scalable science. Industries from pharmaceuticals to renewable energy can now innovate 
                at the speed of thought, not the speed of manual analysis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-white/80">Open Spectra</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">1000x</div>
                <div className="text-white/80">GPU Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">2024</div>
                <div className="text-white/80">The Perfect Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Invest in the <span className="gradient-text">Future of Spectroscopy</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Be part of the breakthrough that accelerates science, unlocks innovation, 
              and transforms entire industries. The convergence has arrived. The technology is ready. 
              The market is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/analyzer">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-xl px-12 py-8 transition-smooth w-full sm:w-auto"
                >
                  <Microscope className="mr-2" /> Try the Platform
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 transition-smooth"
              >
                Schedule Investor Call <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-xl px-12 py-8 transition-smooth hover:bg-primary/10 hover:border-primary"
              >
                Download Pitch Deck
              </Button>
            </div>
            
            <div className="pt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <span>Pre-seed Round Open</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-glow" />
                <span>Pilot Programs Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">EspectroAI</h3>
              <p className="text-sm text-muted-foreground">Accelerating science, accelerating markets.</p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Contact</a>
              <a href="#" className="hover:text-primary transition-smooth">About</a>
              <a href="#" className="hover:text-primary transition-smooth">Technology</a>
              <a href="#" className="hover:text-primary transition-smooth">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
