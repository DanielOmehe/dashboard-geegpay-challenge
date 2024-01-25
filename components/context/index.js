import { useEffect, createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardProvider =({children})=>{
    const [currentTheme, setCurrentTheme] = useState("light");

	function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setCurrentTheme(savedTheme);
		}
	}

	function toggleTheme() {
		setCurrentTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}

	useEffect(() => {
		getThemeFromLocalStorage();
	}, [currentTheme]);
    return(
    <DashboardContext.Provider value={{
        currentTheme,
        toggleTheme
    }}>{children}</DashboardContext.Provider>
)}

export default DashboardProvider