import css from "./Basic.css";

export default function Basic(props){
    return(
        <div className={css["basic"]}>
        <div className={css["basic__header"]}>Basic</div>
        <div className={css["basic__price"]}>{props.price}</div>
        <div className="basic__stats-group">
          <div className={css["basic__storage"]}>500 GB Storage</div>
          <div className={css["basic__users"]}>2 Users Allowed</div>
          <div className={css["basic__send"]}>Send up to 3 GB</div>
        </div>
        <button className={css["basic__learn"]}>Learn More</button>
      </div>
    );
}