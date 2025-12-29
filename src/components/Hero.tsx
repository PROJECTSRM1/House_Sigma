import { Search, AlertCircle } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';
import heroSlide1 from '/assets/hero-slide-1.jpeg';
import heroSlide2 from '/assets/hero-slide-2.jpeg';
import heroSlide3 from '/assets/hero-slide-3.jpeg';
import heroSlide4 from '/assets/hero-slide-4.jpeg';
import heroSlide5 from '/assets/hero-slide-5.jpeg';

const Hero = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    heroSlide1,
    heroSlide2,
    heroSlide3,
    heroSlide4,
    heroSlide5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  return (
    <section className={styles.hero}>
      {/* Image Slider Background */}
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.slideActive : ''
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{t("make_better")}<br />{t("real_estate_decisions")}</h1>
          <p className={styles.subtitle}>{t("browse_22_years_of_sales_history")}<br />{t("watch_new_listings_get_notified_when_they_re_sold")}</p>

          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Address, Street Name or Listing#"
              className={styles.searchInput}
            />
          </div>

          <div className={styles.alertButtons}>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent text-white border-white/60 hover:bg-white hover:text-foreground font-medium"
            >
              <AlertCircle className="h-4 w-4 mr-2" />{t("scam_alert")}</Button>

            <Button
              variant="outline"
              size="sm"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-foreground font-medium transition-colors"
              onClick={handleLearnMore}
            >{t("learn_more")}</Button>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.indicatorActive : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;