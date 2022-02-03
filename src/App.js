import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./localData/friends";
import transactions from "./localData/transactions";
import user from "./localData/user";
import data from "./localData/data.json";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
