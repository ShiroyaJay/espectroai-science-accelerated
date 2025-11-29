import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { SpectrumData } from '@/data/mockSpectra';

interface SpectrumChartProps {
  data: SpectrumData;
}

export const SpectrumChart = ({ data }: SpectrumChartProps) => {
  // Transform data for Recharts
  const chartData = data.energies.map((energy, i) => ({
    energy,
    intensity: data.intensity[i],
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const energy = payload[0].payload.energy;
      const intensity = payload[0].value;
      
      // Find nearest feature
      let feature = '';
      const features = [
        { e: data.graph_features.pre_edge.energy, label: 'Pre-edge', meaning: data.graph_features.pre_edge.meaning },
        { e: data.graph_features.main_edge.energy, label: 'Main edge', meaning: data.graph_features.main_edge.meaning },
        { e: data.graph_features.white_line.energy, label: 'White line', meaning: data.graph_features.white_line.meaning },
      ];
      
      const nearest = features.reduce((prev, curr) => 
        Math.abs(curr.e - energy) < Math.abs(prev.e - energy) ? curr : prev
      );
      
      if (Math.abs(nearest.e - energy) < 0.5) {
        feature = `${nearest.label}: ${nearest.meaning}`;
      }
      
      return (
        <div className="bg-background/95 border border-border rounded-lg p-3 shadow-elevated backdrop-blur-sm">
          <p className="text-sm font-semibold text-foreground mb-1">
            Energy: {energy.toFixed(1)} eV
          </p>
          <p className="text-sm text-muted-foreground">
            Intensity: {intensity.toFixed(3)}
          </p>
          {feature && (
            <p className="text-xs text-accent mt-2 max-w-[250px]">
              {feature}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[400px] bg-card/50 rounded-xl p-6 border border-border/50">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="energy" 
            label={{ value: 'Energy (eV)', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            domain={[530, 540]}
          />
          <YAxis 
            label={{ value: 'Intensity (a.u.)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={() => `O K-edge: ${data.formula_pretty}`}
          />
          
          {/* Annotate key features */}
          <ReferenceLine 
            x={data.graph_features.pre_edge.energy} 
            stroke="hsl(var(--accent))" 
            strokeDasharray="3 3"
            opacity={0.6}
          />
          <ReferenceLine 
            x={data.graph_features.main_edge.energy} 
            stroke="hsl(var(--primary))" 
            strokeDasharray="3 3"
            opacity={0.6}
          />
          <ReferenceLine 
            x={data.graph_features.white_line.energy} 
            stroke="hsl(var(--secondary))" 
            strokeDasharray="3 3"
            opacity={0.6}
          />
          
          <Line 
            type="monotone" 
            dataKey="intensity" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
