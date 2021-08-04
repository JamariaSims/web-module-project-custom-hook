import UseLocalStorage from "./UseLocalStorage";

const darkModeOn = "false";
const UseDarkMode = () => {
	const [darkMode, setDarkMode] = UseLocalStorage(darkModeOn);
	return [darkMode, setDarkMode];
};

export default UseDarkMode;
