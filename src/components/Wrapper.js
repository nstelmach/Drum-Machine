import classes from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div id={props.id} className={classes.wrapper}>
      {props.children}
    </div>
  );
}

export default Wrapper;
