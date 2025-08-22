import React from 'react';
import { Badge } from '@/components/ui/badge';

type ResultRowProps = {
  label: string;
  value: number;
  unit: string;
  estimated?: boolean;
};

export const ResultRow: React.FC<ResultRowProps> = ({ label, value, unit, estimated = false }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-2">
      <span className="text-sm">{label}</span>
      {estimated && <Badge variant="outline" className="text-xs h-4 px-1">est</Badge>}
    </div>
    <div className="flex items-center gap-1">
      <span className="font-mono text-sm font-medium">{value}</span>
      <span className="text-xs text-muted-foreground w-8">{unit}</span>
    </div>
  </div>
);
