import './InfoTooltip.css';

import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InfoTooltipProps {
  title: string;
  description: string;
  calculation?: string;
}

export const InfoTooltip = ({
  title,
  description,
  calculation,
}: InfoTooltipProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="info-tooltip-trigger">
            <Info />
          </button>
        </TooltipTrigger>

        <TooltipContent side="top" className="info-tooltip-content">
          <div className="info-tooltip-body">
            <p className="info-tooltip-title">{title}</p>
            <p className="info-tooltip-description">{description}</p>
            {calculation && (
              <p className="info-tooltip-calculation">
                {calculation}
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
