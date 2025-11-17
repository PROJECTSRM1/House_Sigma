import { agents } from '@/data/mockData';
import styles from './AgentSection.module.css';

const AgentSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Agent Team</h2>
          <a href="#" className={styles.seeMore}>
            See More
          </a>
        </div>

        <div className={styles.grid}>
          {agents.map((agent) => (
            <div key={agent.id} className={styles.agentCard}>
              <div className={styles.photoWrapper}>
                <img
                  src={agent.image}
                  alt={agent.name}
                  className={styles.avatar}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.name}>{agent.name}</div>
                <div className={styles.role}>{agent.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
