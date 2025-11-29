import { SpectrumData } from '@/data/mockSpectra';
import { Lightbulb } from 'lucide-react';

interface ChemicalInsightProps {
  data: SpectrumData;
}

export const ChemicalInsight = ({ data }: ChemicalInsightProps) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Chemical Insight</h3>
      </div>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-foreground/90 leading-relaxed">
          {data.spectrum_analysis.summary_text}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground space-y-1">
          <div>
            <span className="font-semibold">Formula:</span> {data.formula_pretty}
          </div>
          <div>
            <span className="font-semibold">Materials Project ID:</span> {data.material_id}
          </div>
          <div>
            <span className="font-semibold">Analysis Method:</span> DFT + Gaussian convolution (σ=0.3 eV)
          </div>
        </div>
      </div>
    </div>
  );
};
