import css from "./Professional.css";

function Professional(props) {
  return (
    <div className={css["professional"]}>
      <div className={css["professional__header"]}>Professional</div>
      <div className={css["professional__price"]}>{props.price}</div>
      <div className="professional__stats-group">
        <div className={css["professional__storage"]}>1 TB Storage</div>
        <div className={css["professional__users"]}>5 Users Allowed</div>
        <div className={css["professional__send"]}>Send up to 10 GB</div>
      </div>
      <button className={css["professional__learn"]}>Learn More</button>
    </div>
  );
}

export default Professional;