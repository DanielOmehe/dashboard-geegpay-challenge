import { useEffect, createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardProvider =({children})=>{
    const [currentTheme, setCurrentTheme] = useState("light");
    const [option, setOption] = useState('');
    const [ showNotification, setShowNotification ] = useState(false);
    const [ showSideBar, setShowSidebar ] = useState(false);
    const [ showInfo, setShowInfo ] = useState(false);

    const toggleShowNotification =()=> setShowNotification(prev => !prev);
    const toggleShowSidebar =()=> setShowSidebar(prev => !prev);
    const toggleShowInfo =()=> setShowInfo(prev => !prev);

    const handleSelect =(e)=>{
        setOption(e.target.value)
    }

    const orders = [
        {
            image: '/images/marcus.png',
            name: 'Marcus Bergson',
            date: 'Nov 15, 2023',
            amount: '80,000',
            status: 'Paid'
        },
        {
            image: '/images/jay.png',
            name: 'Jaydon Vaccaro',
            date: 'Nov 15, 2023',
            amount: '150,000',
            status: 'Refund'
        },
        {
            image: '/images/corey.png',
            name: 'Corey Schleifer',
            date: 'Nov 14, 2023',
            amount: '87,000',
            status: 'Paid'
        },
        {
            image: '/images/cooper.png',
            name: 'Cooper Press',
            date: 'Nov 14, 2023',
            amount: '100,000',
            status: 'Refund'
        },
        {
            image: '/images/phil.png',
            name: 'Phillip Lubin',
            date: 'Nov 13, 2023',
            amount: '78,000',
            status: 'Paid'
        },
    ]

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

    const platforms = [
        {
            progress_color: 'var(--progress-background-primary)',
            progress: 50,
            platform: 'Book Bazaar',
            rate: 15,
            income: '2,500,000'
        },
        {
            progress_color: 'var(--progress-background-secondary)',
            progress: 45,
            platform: 'Artisan Aisle',
            rate: 10,
            income: '1,800,000'
        },
        {
            progress_color: 'var(--progress-background-tertiary)',
            progress: 30,
            platform: 'Toy Troop',
            rate: 8,
            income: '1,200,000'
        },
        {
            progress_color: 'var(--progress-background-danger)',
            progress: 30,
            platform: 'Xstore',
            rate: 5,
            income: '1,200,000'
        },
    ]

    const summaries = [
        {
            icon: "/icons/order.svg",
            name: "Total Order",
            value: 350,
            trend: "icons/trend_up.svg",
            graph: "/icons/order_graph.svg",
            color: "rgba(52, 202, 165, 0.12)",
            text_color: "var(--success)"
        },
        {
            icon: "/icons/refund.svg",
            name: "Total Refund",
            value: 270,
            trend: "icons/trend_down.svg",
            graph: "/icons/refund_graph.svg",
            color: "rgba(237, 84, 78, 0.1)",
            text_color: "var(--error)"
        },
        {
            icon: "/icons/cart.svg",
            name: "Average Sales",
            value: 1567,
            trend: "icons/trend_down.svg",
            graph: "/icons/sales_graph.svg",
            color: "rgba(237, 84, 78, 0.1)",
            text_color: "var(--error)"
        },
        {
            icon: "/icons/order.svg",
            name: "Total Income",
            value: 350,
            trend: "icons/trend_up.svg",
            graph: "/icons/income_graph.svg",
            color: "rgba(52, 202, 165, 0.12)",
            text_color: "var(--success)"
        },
    ]

	useEffect(() => {
        const pageBody =  document.body;
        pageBody.setAttribute('data-theme', currentTheme)
		getThemeFromLocalStorage();
	}, [currentTheme]);
    return(
    <DashboardContext.Provider value={{
        currentTheme,
        toggleTheme,
        platforms,
        handleSelect,
        option,
        orders,
        summaries,
        showNotification,
        toggleShowNotification,
        showSideBar,
        toggleShowSidebar,
        showInfo,
        toggleShowInfo
    }}>{children}</DashboardContext.Provider>
)}

export default DashboardProvider