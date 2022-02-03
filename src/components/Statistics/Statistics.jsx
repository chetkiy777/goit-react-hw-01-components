import styles from "./styles.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : " "}

      <ul className={styles.statsList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li className={styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
