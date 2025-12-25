import './DataMethodologyModal.css';

import { useState } from 'react';
import { HelpCircle, Calculator, Database, RefreshCw } from 'lucide-react';
import { dataMethodology } from '@/data/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const DataMethodologyModal = () => {
  const [open, setOpen] = useState(false);

  const methodologyItems = Object.values(dataMethodology);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="methodology-trigger">
          <HelpCircle />
          How Data is Calculated
        </button>
      </DialogTrigger>

      <DialogContent className="methodology-dialog">
        <DialogHeader>
          <DialogTitle className="methodology-title">
            <Calculator />
            Data Methodology
          </DialogTitle>
        </DialogHeader>

        <div className="methodology-body">
          <p className="methodology-intro">
            Our market insights are powered by comprehensive data analysis from
            multiple trusted sources. Here’s how we calculate each metric:
          </p>

          <div className="methodology-list">
            {methodologyItems.map((item, index) => (
              <div key={index} className="methodology-card">
                <h4 className="methodology-card-title">
                  <span className="dot" />
                  {item.title}
                </h4>

                <p className="methodology-description">
                  {item.description}
                </p>

                <div className="methodology-details">
                  <div className="detail-row">
                    <Calculator />
                    <span>{item.calculation}</span>
                  </div>

                  <div className="detail-row">
                    <Database />
                    <span>{item.dataSource}</span>
                  </div>

                  <div className="detail-row muted">
                    <RefreshCw />
                    <span>{item.updateFrequency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="methodology-note">
            <p>
              <strong>Note:</strong> All data is for illustration purposes. In
              production, this would be connected to real-time data feeds from
              property registrars, listing platforms, and market research firms.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
