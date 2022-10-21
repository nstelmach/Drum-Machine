import classes from "./Switch.module.css";

function Switch(props) {
  return (
    <div>
      <div className={classes.ctrlName}>{props.name}</div>
      <label className={classes.switch} htmlFor={props.htmlFor}>
        <input onChange={props.onChange} type="checkbox" id={props.id} />
        <span className={classes.slider}></span>
      </label>
    </div>
  );
}

export default Switch;
