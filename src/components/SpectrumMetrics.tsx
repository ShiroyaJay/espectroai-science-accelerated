import { SpectrumData } from '@/data/mockSpectra';
import { TrendingUp, Layers, Zap } from 'lucide-react';

interface SpectrumMetricsProps {
  data: SpectrumData;
}

export const SpectrumMetrics = ({ data }: SpectrumMetricsProps) => {
  const { spectrum_analysis } = data;
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Spectrum Metrics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Edge Onset */}
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 transition-smooth hover:shadow-glow">
          <div className="text-sm text-muted-foreground mb-1">Edge Onset</div>
          <div className="text-2xl font-bold text-primary">
            {spectrum_analysis.edge_onset_eV.toFixed(1)} eV
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Typical O K-edge range
          </div>
        </div>
        
        {/* Number of Peaks */}
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 transition-smooth hover:shadow-glow">
          <div className="text-sm text-muted-foreground mb-1">Features Detected</div>
          <div className="text-2xl font-bold text-accent">
            {spectrum_analysis.num_peaks} peaks
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Pre-edge, main, white line
          </div>
        </div>
        
        {/* Material ID */}
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 transition-smooth hover:shadow-glow">
          <div className="text-sm text-muted-foreground mb-1">Material ID</div>
          <div className="text-2xl font-bold text-secondary">
            {data.material_id}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Materials Project
          </div>
        </div>
      </div>
      
      {/* Peak Details */}
      <div className="bg-card/50 border border-border/50 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <Layers className="w-4 h-4 text-accent" />
          <h4 className="text-sm font-semibold text-foreground">Peak Analysis</h4>
        </div>
        
        <div className="space-y-3">
          {spectrum_analysis.peaks.map((peak, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm border-l-2 border-primary/50 pl-3 py-1">
              <div>
                <span className="font-semibold text-foreground">Peak {idx + 1}:</span>
                <span className="text-muted-foreground ml-2">{peak.energy_eV.toFixed(1)} eV</span>
              </div>
              <div className="flex gap-4 text-muted-foreground">
                <span>
                  <span className="text-xs">Int:</span> {peak.intensity.toFixed(2)}
                </span>
                <span>
                  <span className="text-xs">FWHM:</span> {peak.fwhm_eV.toFixed(1)} eV
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Graph Features Legend */}
      <div className="bg-card/50 border border-border/50 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-secondary" />
          <h4 className="text-sm font-semibold text-foreground">Spectral Features</h4>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-accent mt-1 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">
                Pre-edge ({data.graph_features.pre_edge.energy.toFixed(1)} eV)
              </div>
              <div className="text-muted-foreground text-xs">
                {data.graph_features.pre_edge.meaning}
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-primary mt-1 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">
                Main Edge ({data.graph_features.main_edge.energy.toFixed(1)} eV)
              </div>
              <div className="text-muted-foreground text-xs">
                {data.graph_features.main_edge.meaning}
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary mt-1 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">
                White Line ({data.graph_features.white_line.energy.toFixed(1)} eV)
              </div>
              <div className="text-muted-foreground text-xs">
                {data.graph_features.white_line.meaning}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
