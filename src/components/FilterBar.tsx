import styles from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <h2 className={styles.header}>Personalize Listings</h2>
      <div className={styles.filters}>
        <button className={styles.filterButton}>All Property Types</button>
        <button className={styles.filterButton}>0 - Max</button>
        <button className={styles.filterButton}>All Cities</button>
      </div>
    </div>
  );
};

export default FilterBar;
