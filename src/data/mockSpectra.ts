// Mock O K-edge spectra data based on realistic DOS profiles
// Energy scale: 530-540 eV (standard O K-edge range)

export interface Peak {
  energy_eV: number;
  intensity: number;
  fwhm_eV: number;
}

export interface SpectrumData {
  formula: string;
  formula_pretty: string;
  material_id: string;
  energies: number[];
  intensity: number[];
  spectrum_analysis: {
    edge_onset_eV: number;
    num_peaks: number;
    peaks: Peak[];
    summary_text: string;
  };
  graph_features: {
    pre_edge: { energy: number; meaning: string };
    main_edge: { energy: number; meaning: string };
    white_line: { energy: number; meaning: string };
  };
}

// Generate Gaussian peak
const gaussian = (x: number, center: number, intensity: number, fwhm: number): number => {
  const sigma = fwhm / 2.355; // FWHM to sigma conversion
  return intensity * Math.exp(-Math.pow(x - center, 2) / (2 * sigma * sigma));
};

// Generate realistic O K-edge spectrum
const generateSpectrum = (peaks: Peak[]): { energies: number[]; intensity: number[] } => {
  const energies: number[] = [];
  const intensity: number[] = [];
  
  // Energy range: 530-540 eV with 0.1 eV steps
  for (let e = 530.0; e <= 540.0; e += 0.1) {
    energies.push(parseFloat(e.toFixed(1)));
    
    // Sum all Gaussian peaks
    let totalIntensity = 0;
    peaks.forEach(peak => {
      totalIntensity += gaussian(e, peak.energy_eV, peak.intensity, peak.fwhm_eV);
    });
    
    // Add small baseline noise
    totalIntensity += Math.random() * 0.02;
    intensity.push(totalIntensity);
  }
  
  return { energies, intensity };
};

// Mock spectra database
export const MOCK_SPECTRA: Record<string, SpectrumData> = {
  'Co3O4': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.5, intensity: 0.35, fwhm_eV: 0.8 }, // Pre-edge (t2g)
      { energy_eV: 533.2, intensity: 1.0, fwhm_eV: 0.9 },  // Main edge (eg)
      { energy_eV: 536.1, intensity: 0.42, fwhm_eV: 1.2 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'Co3O4',
      formula_pretty: 'Co₃O₄',
      material_id: 'mp-18748',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 531.2,
        num_peaks: 3,
        peaks,
        summary_text: "The predicted O K-edge spectrum shows onset at 531.2 eV with three dominant features at 531.5 eV (pre-edge), 533.2 eV (main edge), and 536.1 eV (white line). The intense main peak (FWHM: 0.9 eV) indicates high density of unoccupied O 2p-Co 3d states, characteristic of mixed Co²⁺/Co³⁺ valence in the spinel structure. Strong hybridization evidenced by the prominent white line suggests significant covalent character in Co-O bonding."
      },
      graph_features: {
        pre_edge: { energy: 531.5, meaning: "O 1s → Co 3d t₂g (crystal field splitting)" },
        main_edge: { energy: 533.2, meaning: "O 1s → O 2p/Co 3d eg (main transition)" },
        white_line: { energy: 536.1, meaning: "O 2p-Co 3d hybridization intensity" }
      }
    };
  })(),
  
  'Fe2O3': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.8, intensity: 0.28, fwhm_eV: 1.0 }, // Pre-edge
      { energy_eV: 533.8, intensity: 1.0, fwhm_eV: 1.1 },  // Main edge
      { energy_eV: 537.2, intensity: 0.38, fwhm_eV: 1.4 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'Fe2O3',
      formula_pretty: 'Fe₂O₃',
      material_id: 'mp-19770',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 531.5,
        num_peaks: 3,
        peaks,
        summary_text: "The O K-edge spectrum of hematite (α-Fe₂O₃) exhibits onset at 531.5 eV with main edge at 533.8 eV. The moderate pre-edge feature at 531.8 eV reflects Fe³⁺ 3d-O 2p hybridization in the corundum structure. The broader main peak (FWHM: 1.1 eV) compared to Co₃O₄ indicates more delocalized O 2p states, consistent with the antiferromagnetic ordering and high-spin Fe³⁺ configuration."
      },
      graph_features: {
        pre_edge: { energy: 531.8, meaning: "O 1s → Fe 3d (crystal field effects)" },
        main_edge: { energy: 533.8, meaning: "O 1s → O 2p/Fe 3d (dominant transition)" },
        white_line: { energy: 537.2, meaning: "Fe-O covalent bonding strength" }
      }
    };
  })(),
  
  'MnO2': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.3, intensity: 0.42, fwhm_eV: 0.7 }, // Strong pre-edge
      { energy_eV: 532.9, intensity: 1.0, fwhm_eV: 0.85 }, // Main edge
      { energy_eV: 535.8, intensity: 0.48, fwhm_eV: 1.1 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'MnO2',
      formula_pretty: 'MnO₂',
      material_id: 'mp-18759',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 530.9,
        num_peaks: 3,
        peaks,
        summary_text: "MnO₂ displays a characteristic O K-edge with onset at 530.9 eV and pronounced pre-edge feature at 531.3 eV (intensity: 0.42), significantly stronger than Fe₂O₃ or Co₃O₄. This reflects the high oxidation state (Mn⁴⁺) and strong Mn 3d-O 2p hybridization in the rutile structure. The sharp main peak at 532.9 eV (FWHM: 0.85 eV) indicates well-defined unoccupied Mn eg states, critical for battery cathode applications."
      },
      graph_features: {
        pre_edge: { energy: 531.3, meaning: "O 1s → Mn 3d t₂g/eg (strong hybridization)" },
        main_edge: { energy: 532.9, meaning: "O 1s → O 2p/Mn 3d (sharp transition)" },
        white_line: { energy: 535.8, meaning: "Mn⁴⁺-O covalency marker" }
      }
    };
  })(),
  
  'NiO': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.9, intensity: 0.22, fwhm_eV: 0.9 }, // Weak pre-edge
      { energy_eV: 534.1, intensity: 1.0, fwhm_eV: 1.2 },  // Main edge
      { energy_eV: 537.5, intensity: 0.32, fwhm_eV: 1.5 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'NiO',
      formula_pretty: 'NiO',
      material_id: 'mp-19009',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 531.6,
        num_peaks: 3,
        peaks,
        summary_text: "NiO exhibits a relatively late O K-edge onset at 531.6 eV with weak pre-edge (531.9 eV, intensity: 0.22) due to the d⁸ configuration of Ni²⁺ in the rock-salt structure. The main edge at 534.1 eV is broader (FWHM: 1.2 eV) than typical 3d transition-metal oxides, reflecting the Mott insulating character and strong electron correlations. This spectrum is diagnostic of antiferromagnetic NiO with minimal Ni-O covalency."
      },
      graph_features: {
        pre_edge: { energy: 531.9, meaning: "O 1s → Ni 3d eg (weak, d⁸ system)" },
        main_edge: { energy: 534.1, meaning: "O 1s → O 2p (correlation-broadened)" },
        white_line: { energy: 537.5, meaning: "Ni-O bonding (Mott insulator)" }
      }
    };
  })(),
  
  'CuO': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.6, intensity: 0.38, fwhm_eV: 0.8 }, // Pre-edge
      { energy_eV: 533.5, intensity: 1.0, fwhm_eV: 1.0 },  // Main edge
      { energy_eV: 536.8, intensity: 0.35, fwhm_eV: 1.3 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'CuO',
      formula_pretty: 'CuO',
      material_id: 'mp-704645',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 531.3,
        num_peaks: 3,
        peaks,
        summary_text: "CuO (tenorite) shows O K-edge onset at 531.3 eV with moderate pre-edge at 531.6 eV. The d⁹ configuration of Cu²⁺ leads to strong Jahn-Teller distortion, manifested in the spectrum as a well-defined main peak at 533.5 eV. The intermediate pre-edge intensity (0.38) between MnO₂ and NiO reflects moderate Cu 3d-O 2p mixing. This profile is consistent with the monoclinic structure and antiferromagnetic Cu-O chains."
      },
      graph_features: {
        pre_edge: { energy: 531.6, meaning: "O 1s → Cu 3d (Jahn-Teller split)" },
        main_edge: { energy: 533.5, meaning: "O 1s → O 2p/Cu 3d (main feature)" },
        white_line: { energy: 536.8, meaning: "Cu-O hybridization signature" }
      }
    };
  })(),
  
  'TiO2': (() => {
    const peaks: Peak[] = [
      { energy_eV: 532.5, intensity: 0.18, fwhm_eV: 1.1 }, // Very weak pre-edge
      { energy_eV: 534.8, intensity: 1.0, fwhm_eV: 1.3 },  // Main edge
      { energy_eV: 538.2, intensity: 0.28, fwhm_eV: 1.6 }, // White line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'TiO2',
      formula_pretty: 'TiO₂',
      material_id: 'mp-2657',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 532.0,
        num_peaks: 3,
        peaks,
        summary_text: "Rutile TiO₂ displays a late O K-edge onset at 532.0 eV, reflecting the d⁰ configuration of Ti⁴⁺. The very weak pre-edge at 532.5 eV (intensity: 0.18) is the lowest among the oxides shown, indicating minimal Ti 3d-O 2p hybridization below the Fermi level. The broad main edge at 534.8 eV (FWHM: 1.3 eV) corresponds to empty Ti t₂g/eg states, characteristic of the wide-bandgap semiconductor. This spectrum is diagnostic of photocatalytic TiO₂."
      },
      graph_features: {
        pre_edge: { energy: 532.5, meaning: "O 1s → Ti 3d t₂g (very weak, d⁰)" },
        main_edge: { energy: 534.8, meaning: "O 1s → O 2p (wide bandgap)" },
        white_line: { energy: 538.2, meaning: "Ti-O bonding (ionic character)" }
      }
    };
  })(),
  
  'V2O5': (() => {
    const peaks: Peak[] = [
      { energy_eV: 531.7, intensity: 0.45, fwhm_eV: 0.75 }, // Strong pre-edge
      { energy_eV: 533.4, intensity: 1.0, fwhm_eV: 0.95 },  // Main edge
      { energy_eV: 536.3, intensity: 0.52, fwhm_eV: 1.15 }, // Prominent white line
    ];
    const { energies, intensity } = generateSpectrum(peaks);
    
    return {
      formula: 'V2O5',
      formula_pretty: 'V₂O₅',
      material_id: 'mp-25279',
      energies,
      intensity,
      spectrum_analysis: {
        edge_onset_eV: 531.2,
        num_peaks: 3,
        peaks,
        summary_text: "V₂O₅ exhibits a distinctive O K-edge with onset at 531.2 eV and strong pre-edge feature at 531.7 eV (intensity: 0.45), the highest among conventional oxides. This reflects the V⁵⁺ d⁰ configuration with significant V-O π-bonding in the layered orthorhombic structure. The sharp main peak at 533.4 eV (FWHM: 0.95 eV) and prominent white line (intensity: 0.52) are signatures of the vanadyl V=O double bonds, crucial for its catalytic and battery intercalation properties."
      },
      graph_features: {
        pre_edge: { energy: 531.7, meaning: "O 1s → V 3d (V=O π* states)" },
        main_edge: { energy: 533.4, meaning: "O 1s → O 2p/V 3d (sharp, d⁰ system)" },
        white_line: { energy: 536.3, meaning: "V⁵⁺-O strong covalency (vanadyl)" }
      }
    };
  })(),
};

// Normalize formula input (case-insensitive, space removal)
export const normalizeFormula = (formula: string): string => {
  return formula.replace(/\s+/g, '').toUpperCase();
};

// Get spectrum by formula
export const getSpectrumData = (formula: string): SpectrumData | null => {
  const normalized = normalizeFormula(formula);
  
  // Try exact match first
  if (MOCK_SPECTRA[normalized]) {
    return MOCK_SPECTRA[normalized];
  }
  
  // Try case-insensitive match
  const key = Object.keys(MOCK_SPECTRA).find(
    k => k.toUpperCase() === normalized
  );
  
  return key ? MOCK_SPECTRA[key] : null;
};

// Get list of available materials
export const getAvailableMaterials = (): string[] => {
  return Object.keys(MOCK_SPECTRA);
};
