import UseLocalStorage from "./UseLocalStorage";
import React, { useState } from "react";

const darkModeOn = "false";
const UseDarkMode = () => {
	const [darkMode, setDarkMode] = UseLocalStorage(darkModeOn);
	return [darkMode, setDarkMode];
};

export default UseDarkMode;
