import styles from "./styles.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.tsbleHead}>Type</th>
            <th className={styles.tsbleHead}>Amount</th>
            <th className={styles.tsbleHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.row}>
              <td className={styles.col}>{type}</td>
              <td className={styles.col}>{amount}</td>
              <td className={styles.col}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
