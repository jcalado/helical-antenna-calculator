"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, Radio, Moon, Sun } from 'lucide-react';

import { Results } from '@/types/Results';
import { PhysicalDimensions } from '@/components/PhysicalDimensions';
import { Conductor } from '@/components/Conductor';
import { Performance } from '@/components/Performance';
import { AntennaDocumentation } from '@/components/AntennaDocumentation';
import { calculateAntennaResults } from '@/lib/antennaCalculations';

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [inputs, setInputs] = useState({
    frequency: 1700,
    spacing: 0.2,
    turns: 5,
    circumference: 1
  });

  const [results, setResults] = useState<Results>({
    wavelength: 0,
    spacingMM: 0,
    circumferenceMM: 0,
    diameter: 0,
    axialLength: 0,
    pitchAngle: 0,
    turnLength: 0,
    conductorLength: 0,
    conductorDiameter: 0,
    reflectorMin: 0,
    HPBW: 0,
    BWFN: 0,
    gain: 0,
    impedance: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => setDarkMode(e.matches);
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const calculateResults = () => {
    const results = calculateAntennaResults(inputs);
    setResults(results);
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };


  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground min-h-screen">
        <div className="max-w-6xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6" />
              <div>
                <h1 className="text-2xl font-semibold">Helical Antenna Calculator</h1>
                <p className="text-sm text-muted-foreground">Design parameters and performance calculations</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 p-0"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Input Parameters */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Input Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="frequency" className="text-sm">Frequency</Label>
                      <div className="flex">
                        <Input
                          id="frequency"
                          type="number"
                          value={inputs.frequency}
                          onChange={(e) => handleInputChange('frequency', e.target.value)}
                          className="rounded-r-none text-sm h-8"
                        />
                        <div className="px-2 py-1.5 bg-muted border border-l-0 rounded-r text-xs flex items-center">
                          MHz
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="spacing" className="text-sm">Turn Spacing</Label>
                      <div className="flex">
                        <Input
                          id="spacing"
                          type="number"
                          step="0.01"
                          value={inputs.spacing}
                          onChange={(e) => handleInputChange('spacing', e.target.value)}
                          className="rounded-r-none text-sm h-8"
                        />
                        <div className="px-2 py-1.5 bg-muted border border-l-0 rounded-r text-xs flex items-center">
                          λ
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Rec: 0.2-0.25</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="turns" className="text-sm">Number of Turns</Label>
                      <Input
                        id="turns"
                        type="number"
                        value={inputs.turns}
                        onChange={(e) => handleInputChange('turns', e.target.value)}
                        className="text-sm h-8"
                      />
                      <p className="text-xs text-muted-foreground">Min: 3, Max: ~16</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="circumference" className="text-sm">Circumference</Label>
                      <div className="flex">
                        <Input
                          id="circumference"
                          type="number"
                          step="0.01"
                          value={inputs.circumference}
                          onChange={(e) => handleInputChange('circumference', e.target.value)}
                          className="rounded-r-none text-sm h-8"
                        />
                        <div className="px-2 py-1.5 bg-muted border border-l-0 rounded-r text-xs flex items-center">
                          λ
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Ideal: 1.0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-4">
              {/* Physical Dimensions */}
              <PhysicalDimensions results={results} />

              {/* Conductor & Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Conductor results={results} />
                <Performance results={results} />
              </div>
            </div>
          </div>

          <AntennaDocumentation />
        </div>
      </div>
    </div>
  );
}