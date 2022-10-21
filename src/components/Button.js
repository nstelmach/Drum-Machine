import "./Button.css";
import { useCallback, useEffect, useRef } from "react";

function Button({
  power,
  onSoundPlay,
  buttonId,
  name,
  src,
  audioId,
  keyCode,
  volume,
}) {
  const audioRef = useRef();

  const playSound = useCallback(() => {
    if (power) {
      audioRef.current.volume = volume / 100;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      onSoundPlay();
    }
  }, [power, onSoundPlay, volume]);

  const keyDownHandler = useCallback(
    (event) => {
      if (event.keyCode === keyCode) {
        playSound();
      }
    },
    [playSound, keyCode]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <button onClick={playSound} id={buttonId} className="drum-pad">
      {name}
      <audio src={src} ref={audioRef} id={audioId} className="clip" />
    </button>
  );
}

export default Button;
