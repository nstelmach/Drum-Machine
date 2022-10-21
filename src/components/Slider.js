import classes from "./Slider.module.css";

function Slider(props) {
  return (
    <div className={classes.slideContainer}>
      <input
        onChange={props.onChange}
        className={classes.slider}
        type="range"
        min="1"
        max="100"
        value={props.value}
      />
    </div>
  );
}

export default Slider;
