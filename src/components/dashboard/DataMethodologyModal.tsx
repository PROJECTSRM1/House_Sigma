import './DataMethodologyModal.css';

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const methodologyItems = Object.values(dataMethodology);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="methodology-trigger">
          <HelpCircle />{t("how_data_is_calculated")}</button>
      </DialogTrigger>
      <DialogContent className="methodology-dialog">
        <DialogHeader>
          <DialogTitle className="methodology-title">
            <Calculator />{t("data_methodology")}</DialogTitle>
        </DialogHeader>

        <div className="methodology-body">
          <p className="methodology-intro">{t(
            "our_market_insights_are_powered_by_comprehensive_data_analysis_from_multiple_trusted_sources_here_s_how_we_calculate_each_metric"
          )}</p>

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
              <strong>{t("note")}</strong>{t(
              "all_data_is_for_illustration_purposes_in_production_this_would_be_connected_to_real_time_data_feeds_from_property_registrars_listing_platforms_and_market_research_firms"
            )}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
