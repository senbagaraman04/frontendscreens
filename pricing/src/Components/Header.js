import css from "./Header.css";

function Header(props) {
  const switchClasses = `${css.slider} ${css.round}`;

  return (
    <div className={css["header"]}>
      <h1 className={css["header__h1"]}>Our Pricing</h1>
      <div className={css["header__switch-group"]}>
        <div className={css["header__annually"]}>Annually</div>
        <div className={css["header__switch"]}>
          <label className={css.switch}>
            <input
              type="checkbox"
              id="checkbox"
              value={props.isChecked}
              onChange={props.handleChange}
              aria-label="duration"
            />
            <span className={switchClasses}></span>
          </label>
        </div>
        <div className={css["header__monthly"]}>Monthly</div>
      </div>
    </div>
  );
}

export default Header;