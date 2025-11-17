import { Search, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-home.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div 
        className={styles.background}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Make Better<br />Real Estate Decisions
          </h1>
          <p className={styles.subtitle}>
            Browse 22 years of sales history.<br />
            Watch new listings, get notified when they're sold.
          </p>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Address, Street Name or Listing#"
              className={styles.searchInput}
            />
          </div>

          {/* Alert */}
          <div className={styles.alertButtons}>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent text-white font-medium"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              Scam Alert
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-foreground font-medium transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
