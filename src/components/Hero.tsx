import { Search, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  backgroundImage: string;
}

const Hero = ({ backgroundImage }: HeroProps) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  return (
    <section className={styles.hero}>
      <div 
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Make Better<br />Real Estate Decisions
          </h1>
          <p className={styles.subtitle}>
            Browse 22 years of sales history.<br />
            Watch new listings, get notified when they're sold.
          </p>

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
              className="bg-transparent text-white font-medium"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              Scam Alert
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-foreground font-medium transition-colors"
              onClick={handleLearnMore}
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
