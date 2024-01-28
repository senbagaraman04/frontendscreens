import css from "./Master.css";

function Master(props) {
  return (
    <div className={css["master"]}>
      <div className={css["master__header"]}>Master</div>
      <div className={css["master__price"]}>{props.price}</div>
      <div className="master__stats-group">
        <div className={css["master__storage"]}>2 TB Storage</div>
        <div className={css["master__users"]}>10 Users Allowed</div>
        <div className={css["master__send"]}>Send up to 20 GB</div>
      </div>
      <button className={css["master__learn"]}>Learn More</button>
    </div>
  );
}

export default Master;