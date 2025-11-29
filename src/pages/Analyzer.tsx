import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SpectrumChart } from '@/components/SpectrumChart';
import { SpectrumMetrics } from '@/components/SpectrumMetrics';
import { ChemicalInsight } from '@/components/ChemicalInsight';
import { getSpectrumData, getAvailableMaterials, SpectrumData } from '@/data/mockSpectra';
import { Search, ArrowLeft, Sparkles, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Analyzer = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState<SpectrumData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const availableMaterials = getAvailableMaterials();

  const handlePredict = () => {
    if (!formula.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a chemical formula (e.g., Co3O4)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate processing delay for realistic UX
    setTimeout(() => {
      const data = getSpectrumData(formula);
      
      if (data) {
        setResult(data);
        toast({
          title: "Spectrum Generated",
          description: `O K-edge spectrum predicted for ${data.formula_pretty}`,
        });
      } else {
        toast({
          title: "Material Not Found",
          description: `No data for "${formula}". Try: ${availableMaterials.slice(0, 3).join(', ')}`,
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1200);
  };

  const handleExampleClick = (exampleFormula: string) => {
    setFormula(exampleFormula);
    setTimeout(() => {
      const data = getSpectrumData(exampleFormula);
      if (data) setResult(data);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Beaker className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EspectroAI Analyzer
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Input Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Predict O K-edge Spectra
            </h2>
            <p className="text-muted-foreground text-lg">
              Enter a transition-metal oxide formula to generate synthetic XAS spectrum
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-2xl p-8 shadow-elevated">
            <div className="flex gap-3 mb-6">
              <Input
                type="text"
                placeholder="Enter formula (e.g., Co3O4, Fe2O3, MnO2)"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePredict()}
                className="text-lg h-12"
              />
              <Button 
                onClick={handlePredict} 
                disabled={isLoading}
                size="lg"
                className="px-8"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse-glow" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Predict
                  </>
                )}
              </Button>
            </div>

            {/* Example Materials */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {availableMaterials.map((mat) => (
                  <Button
                    key={mat}
                    variant="outline"
                    size="sm"
                    onClick={() => handleExampleClick(mat)}
                    className="text-xs"
                  >
                    {mat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="max-w-7xl mx-auto space-y-8 animate-slide-in">
            {/* Spectrum Chart */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                O K-edge Spectrum: {result.formula_pretty}
              </h2>
              <SpectrumChart data={result} />
            </div>

            {/* Metrics and Insight Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SpectrumMetrics data={result} />
              <ChemicalInsight data={result} />
            </div>

            {/* Scientific Context */}
            <div className="bg-card/30 border border-border/50 rounded-xl p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">About This Prediction:</p>
              <p>
                This synthetic O K-edge spectrum was generated from oxygen-projected partial density of states (p-DOS) 
                data obtained from DFT calculations. The spectrum shows the unoccupied O 2p states hybridized with 
                transition-metal 3d orbitals, shifted to the standard O K-edge energy scale (530-540 eV). 
                Gaussian broadening (σ=0.3 eV) simulates core-hole lifetime effects. Peak positions and intensities 
                correlate with experimental XAS measurements of transition-metal oxides.
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!result && !isLoading && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Beaker className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Analyze
            </h3>
            <p className="text-muted-foreground">
              Enter a chemical formula above to generate synthetic O K-edge spectrum 
              with detailed spectral analysis and chemical insights.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Analyzer;
