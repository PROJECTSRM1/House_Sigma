import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Mic,
  Phone,
  Search,
  Settings,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactUs() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = `${t("contactUs.title")} | HomeNest`;
  }, [t]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open("https://housesigma.com/blog-en/faq", "_blank");
    }
  };

  const quickTopics = [
    { key: "payment", icon: "💳" },
    { key: "bookingViewing", icon: "👁" },
    { key: "pricing", icon: "🔥" },
    { key: "listingIssues", icon: "🏠" },
    { key: "howToUsePlatform", icon: "❓" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* HEADER */}
        <header className="bg-gradient-to-b from-muted/50 to-background pt-12 pb-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {t("contactUs.title")}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("contactUs.subtitle")}
            </p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-4 pb-16">
          {/* SEARCH */}
          <div className="bg-card rounded-xl border p-6 -mt-4 mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={t("contactUs.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <Button onClick={handleSearch}>
                {t("contactUs.searchButton")}
              </Button>
            </div>
          </div>

          {/* INFO */}
          <div className="bg-accent/40 border rounded-lg p-4 mb-8">
            <p>
              {t("contactUs.beforeSubmit")}{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                rel="noreferrer"
                className="underline font-medium"
              >
                {t("contactUs.knowledgeBase")}
              </a>{" "}
              {t("contactUs.afterSubmit")}
            </p>
          </div>

          {/* QUICK HELP */}
          <h2 className="font-semibold mb-4">
            {t("contactUs.quickHelpTopics")}
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {quickTopics.map((q) => (
              <span
                key={q.key}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {q.icon} {t(`contactUs.${q.key}`)}
              </span>
            ))}
          </div>

          {/* TOP 3 CARDS */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <MainCard
              icon={<Phone />}
              title={t("contactUs.callUs")}
              desc={t("contactUs.callUsDesc")}
              btn={t("contactUs.getPhoneNumber")}
            />
            <MainCard
              icon={<Mail />}
              title={t("contactUs.emailSupport")}
              desc={t("contactUs.emailSupportDesc")}
              btn={t("contactUs.sendEmail")}
            />
            <MainCard
              icon={<MessageCircle />}
              title={t("contactUs.liveChat")}
              desc={t("contactUs.liveChatDesc")}
              btn={t("contactUs.startChat")}
            />
          </div>

          {/* 🔴 FIXED: LAST 5 → 2x2 GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Home />}
              title={t("contactUs.buySellLease")}
              desc={t("contactUs.buySellLeaseDesc")}
            />
            <InfoCard
              icon={<Settings />}
              title={t("contactUs.techSupport")}
              desc={t("contactUs.techSupportDesc")}
            />
            <InfoCard
              icon={<FileText />}
              title={t("contactUs.brokerageComplaints")}
              desc={t("contactUs.brokerageComplaintsDesc")}
            />
            <InfoCard
              icon={<Briefcase />}
              title={t("contactUs.dealConveyancing")}
              desc={t("contactUs.dealConveyancingDesc")}
            />
            <InfoCard
              icon={<Mic />}
              title={t("contactUs.mediaInquiries")}
              desc={t("contactUs.mediaInquiriesDesc")}
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

const MainCard = ({ icon, title, desc, btn }: any) => (
  <div className="border rounded-xl p-6 text-center">
    <div className="mx-auto mb-3">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm mb-4">{desc}</p>
    <Button className="w-full">{btn}</Button>
  </div>
);

const InfoCard = ({ icon, title, desc }: any) => (
  <div className="border rounded-xl p-6">
    <div className="flex items-start gap-3 mb-2">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm">{desc}</p>
  </div>
);
