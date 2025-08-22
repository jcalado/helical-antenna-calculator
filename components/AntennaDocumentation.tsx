import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Info, Calculator, Radio, Zap } from 'lucide-react';

export const AntennaDocumentation: React.FC = () => (
  <div className="space-y-6">
    {/* Important Notice */}
    <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Performance estimates are theoretical
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
              Beam width, gain, and impedance calculations may vary significantly from real-world performance. 
              Formulas tend to overestimate gain. Ground plane size and environmental factors significantly influence actual results.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Polarization Reference */}
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Polarization Quick Reference</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="h-6">RHCP</Badge>
            <span>Clockwise winding (looking down)</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="h-6">LHCP</Badge>
            <span>Counter-clockwise winding</span>
          </div>
        </div>
        <Separator className="my-3" />
        <p className="text-xs text-muted-foreground">
          <strong>Dish feed tip:</strong> Use opposite polarization of target signal due to reflection inversion.
        </p>
      </CardContent>
    </Card>

    {/* Parameter Explanations */}
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Parameter Explanations</CardTitle>
        <CardDescription className="text-sm">Detailed descriptions of input parameters and calculated outputs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Parameters */}
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Calculator className="w-3 h-3" />
            Input Parameters
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-medium">Operating Frequency (F):</span>
              <p className="text-muted-foreground mt-1">
                Defines the frequency in MHz that the helix should operate at. Helical antennas work best between ~500-3000 MHz. 
                At lower frequencies, cross-dipoles are preferred; at higher frequencies, waveguide feeds become more practical.
              </p>
            </div>
            <div>
              <span className="font-medium">Turn Spacing (S<sub>λ</sub>):</span>
              <p className="text-muted-foreground mt-1">
                Vertical spacing between turns expressed in wavelengths. Recommended range is 0.2-0.25, though values as low as 0.1 
                are used in practice. Lower spacing requires more turns to achieve the same gain.
              </p>
            </div>
            <div>
              <span className="font-medium">Number of Turns (n):</span>
              <p className="text-muted-foreground mt-1">
                Defines gain and beamwidth along with turn spacing. Minimum ~3 turns for proper operation, maximum ~16 turns 
                for practical construction. More turns = higher gain and directivity.
              </p>
            </div>
            <div>
              <span className="font-medium">Helix Circumference (C<sub>λ</sub>):</span>
              <p className="text-muted-foreground mt-1">
                Circumference of the imaginary cylinder the helix is wound around, measured between conductor centers. 
                Ideal value is 1.0 wavelength for optimal axial mode operation.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Physical Dimensions */}
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Zap className="w-3 h-3" />
            Physical Dimensions
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-medium">Wavelength (λ):</span>
              <span className="text-muted-foreground ml-2">Operating frequency converted to wavelength in millimeters.</span>
            </div>
            <div>
              <span className="font-medium">Diameter (D):</span>
              <span className="text-muted-foreground ml-2">Helix diameter measured between conductor center points.</span>
            </div>
            <div>
              <span className="font-medium">Turn Spacing (S):</span>
              <span className="text-muted-foreground ml-2">Real turn spacing in mm. Critical construction dimension along with diameter.</span>
            </div>
            <div>
              <span className="font-medium">Axial Length (A):</span>
              <span className="text-muted-foreground ml-2">Total helix height. Excludes ground plane, connector, and impedance matching sections.</span>
            </div>
            <div>
              <span className="font-medium">Pitch Angle (α):</span>
              <span className="text-muted-foreground ml-2">Angle at which conductor is wound. Related to turn spacing when circumference = 1λ.</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Conductor & Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
              <Radio className="w-3 h-3" />
              Conductor Specifications
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-medium">Turn Length:</span>
                <span className="text-muted-foreground ml-2">Conductor length for one complete turn.</span>
              </div>
              <div>
                <span className="font-medium">Total Length:</span>
                <span className="text-muted-foreground ml-2">Total conductor needed. Add extra for impedance matching and build tolerances.</span>
              </div>
              <div>
                <span className="font-medium">Wire Diameter:</span>
                <span className="text-muted-foreground ml-2">Ideal conductor diameter. Not critical - thinner wire generally acceptable.</span>
              </div>
              <div>
                <span className="font-medium">Ground Plane:</span>
                <span className="text-muted-foreground ml-2">Minimum diameter for circular ground plane, or side length for square plane.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
              <Info className="w-3 h-3" />
              Performance (Estimated)
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-medium">HPBW:</span>
                <span className="text-muted-foreground ml-2">Half Power Beam Width - angle between -3dB points of main lobe.</span>
              </div>
              <div>
                <span className="font-medium">BWFN:</span>
                <span className="text-muted-foreground ml-2">First Null Beam Width - angle between nulls around main lobe.</span>
              </div>
              <div>
                <span className="font-medium">Gain:</span>
                <span className="text-muted-foreground ml-2">Peak gain in dBi. Formulas tend to overestimate real-world performance.</span>
              </div>
              <div>
                <span className="font-medium">Impedance:</span>
                <span className="text-muted-foreground ml-2">Typically ~140Ω. Use impedance matching to achieve 50Ω for coax connection.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
