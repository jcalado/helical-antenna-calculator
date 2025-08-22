import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Radio } from 'lucide-react';
import { ResultRow } from './ResultRow';
import { Results } from '@/types/Results';

export const Conductor: React.FC<{ results: Results }> = ({ results }) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-base flex items-center gap-2">
        <Radio className="w-4 h-4" />
        Conductor
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-1">
      <ResultRow label="Turn Length" value={results.turnLength} unit="mm" />
      <ResultRow label="Total Length" value={results.conductorLength} unit="mm" />
      <ResultRow label="Wire Diameter" value={results.conductorDiameter} unit="mm" />
      <ResultRow label="Ground Plane" value={results.reflectorMin} unit="mm" />
    </CardContent>
  </Card>
);
