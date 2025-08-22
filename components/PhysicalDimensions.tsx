import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { ResultRow } from './ResultRow';
import { Results } from '@/types/Results';

export const PhysicalDimensions: React.FC<{ results: Results }> = ({ results }) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-base flex items-center gap-2">
        <Zap className="w-4 h-4" />
        Physical Dimensions
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-1">
      <div className="grid grid-cols-2 gap-x-6">
        <div className="space-y-1">
          <ResultRow label="Wavelength (λ)" value={results.wavelength} unit="mm" />
          <ResultRow label="Diameter (D)" value={results.diameter} unit="mm" />
          <ResultRow label="Circumference (C)" value={results.circumferenceMM} unit="mm" />
        </div>
        <div className="space-y-1">
          <ResultRow label="Turn Spacing (S)" value={results.spacingMM} unit="mm" />
          <ResultRow label="Axial Length (A)" value={results.axialLength} unit="mm" />
          <ResultRow label="Pitch Angle (α)" value={results.pitchAngle} unit="deg" />
        </div>
      </div>
    </CardContent>
  </Card>
);
