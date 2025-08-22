import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { ResultRow } from './ResultRow';
import { Results } from '@/types/Results';

export const Performance: React.FC<{ results: Results }> = ({ results }) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-base flex items-center gap-2">
        <Info className="w-4 h-4" />
        Performance
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-1">
      <ResultRow label="HPBW" value={results.HPBW} unit="deg" estimated />
      <ResultRow label="BWFN" value={results.BWFN} unit="deg" estimated />
      <ResultRow label="Gain" value={results.gain} unit="dBi" estimated />
      <ResultRow label="Impedance" value={results.impedance} unit="Ω" estimated />
    </CardContent>
  </Card>
);
