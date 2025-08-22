import { Results } from '@/types/Results';

type InputParameters = {
  frequency: number;
  spacing: number;
  turns: number;
  circumference: number;
};

export function calculateAntennaResults(inputs: InputParameters): Results {
  const { frequency, spacing, turns, circumference } = inputs;
  
  // Operating wavelength in mm
  const wavelength = Math.round(299792458 / frequency / 1000 * 10) / 10;
  
  // Turn spacing in mm
  const spacingMM = spacing * wavelength;
  
  // Circumference in mm
  const circumferenceMM = Math.round(wavelength * circumference * 10) / 10;
  
  // Diameter in mm
  const diameter = Math.round(wavelength / Math.PI * 10) / 10;
  
  // Total axial length in mm
  const axialLength = Math.round(turns * spacingMM * 10) / 10;
  
  // Pitch angle in degrees
  const pitchAngle = Math.round((Math.atan(spacingMM / circumferenceMM)) * 180 / Math.PI * 10) / 10;
  
  // Length of one turn in mm
  const turnLength = Math.round(Math.sqrt(spacingMM * spacingMM + circumferenceMM * circumferenceMM) * 10) / 10;
  
  // Total conductor length in mm
  const conductorLength = Math.round(turnLength * turns * 10) / 10;
  
  // Ideal conductor diameter in mm
  const conductorDiameter = Math.round(wavelength * 0.02 * 100) / 100;
  
  // Minimum reflector diameter in mm
  const reflectorMin = Math.round(wavelength * 0.75 * 10) / 10;
  
  // Half power beamwidth in degrees
  const HPBW = Math.round(52 / (circumference * Math.sqrt(turns * spacing)) * 10) / 10;
  
  // First null beamwidth in degrees
  const BWFN = Math.round(115 / (circumference * Math.sqrt(turns * spacing)) * 10) / 10;
  
  // Gain in dBi
  const gain = Math.round((10.79 + 10 * Math.log10(circumference * circumference * turns * spacing)) * 10) / 10;
  
  // Impedance in ohm
  const impedance = Math.round((140 * circumference) * 10) / 10;

  return {
    wavelength,
    spacingMM: Math.round(spacingMM * 10) / 10,
    circumferenceMM,
    diameter,
    axialLength,
    pitchAngle,
    turnLength,
    conductorLength,
    conductorDiameter,
    reflectorMin,
    HPBW,
    BWFN,
    gain,
    impedance
  };
}
