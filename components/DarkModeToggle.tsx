import { useDarkMode } from "next-dark-mode";
import style from '../styles/DarkModeToggle.module.scss';

type Props = {
  // anything?
};

const DarkModeToggle = (props: Props) => {
  const {
    autoModeActive,    // boolean - whether the auto mode is active or not
    autoModeSupported, // boolean - whether the auto mode is supported on this browser
    darkModeActive,    // boolean - whether the dark mode is active or not
    switchToAutoMode,  // function - toggles the auto mode on
    switchToDarkMode,  // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode();

  const toggleDarkMode = () => {
    if (darkModeActive) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  };

  return (
    <div>
      <button className={`${style.DarkModeToggle} ${style['gg-moon']} ${!darkModeActive ? style['dark'] : ''}`} onClick={toggleDarkMode}>

      </button>
      {/*
      <span>
        {darkModeActive ? 'dark' : 'light'}
      </span>
      */}
    </div>
  );
};

export default DarkModeToggle;
