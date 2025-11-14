import { ontarioCities, bcCities, albertaCities } from '@/data/mockData';
import styles from './CityLinks.module.css';

const CityLinks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Homes for Sale */}
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Homes for Sale in Popular Cities</h2>
          <div className={styles.grid}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Ontario</h3>
              <div className={styles.cityList}>
                {ontarioCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>British Columbia</h3>
              <div className={styles.cityList}>
                {bcCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Alberta</h3>
              <div className={styles.cityList}>
                {albertaCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sold Homes */}
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Sold Homes in Popular Cities</h2>
          <div className={styles.grid}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Ontario</h3>
              <div className={styles.cityList}>
                {ontarioCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>British Columbia</h3>
              <div className={styles.cityList}>
                {bcCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Alberta</h3>
              <div className={styles.cityList}>
                {albertaCities.map((city, index) => (
                  <a key={index} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityLinks;
