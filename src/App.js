import { useCallback, useEffect, useState } from "react";
import Button from "./components/Button";
import Slider from "./components/Slider";
import Switch from "./components/Switch";
import Wrapper from "./components/Wrapper";
import classes from "./App.module.css";
import { audioMap } from "./constants/audioMap";

function App() {
  const [value, setValue] = useState(50);
  const [volumeMessage, setVolumeMessage] = useState();
  const [bank, setBank] = useState("Heater Kit");
  const [play, setPlay] = useState("");
  const [power, setPower] = useState(true);

  function volumeValue(event) {
    setValue(event.target.value);
    setVolumeMessage(`Volume: ${event.target.value}`);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVolumeMessage("");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [volumeMessage]);

  function checkedHandler(event) {
    if (event.target.checked) {
      setBank("Smooth Piano Kit");
    } else {
      setBank("Heater Kit");
    }
  }

  function powerHandler(event) {
    if (event.target.checked) {
      setPower(false);
    } else {
      setPower(true);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPlay("");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [play]);

  const playHandler = useCallback((name) => {
    setPlay(name);
  }, []);

  return (
    <Wrapper id="drum-machine">
      <div className={classes.btnContainer}>
        {audioMap[bank].map(({ name, audioSrc, keyName, keyCode }) => (
          <Button
            name={keyName}
            key={keyName}
            power={power}
            onSoundPlay={() => {
              playHandler(name);
            }}
            buttonId={name}
            audioId={keyName}
            src={audioSrc}
            keyCode={keyCode}
            volume={value}
          />
        ))}
      </div>
      <div className={classes.ctrlContainer}>
        <Switch
          onChange={powerHandler}
          htmlFor="power"
          id="power"
          name="Power"
        />
        <div id="display" className={classes.display}>
          {power ? volumeMessage || play || bank : ""}
        </div>
        <Slider onChange={power ? volumeValue : null} value={value} />
        <Switch
          onChange={power ? checkedHandler : null}
          htmlFor="bank"
          id="bank"
          name="Bank"
        />
      </div>
    </Wrapper>
  );
}

export default App;
