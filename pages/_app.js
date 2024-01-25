import "../public/styles/index.css";
import DashboardProvider from "../components/context";

const App = ({ Component, pageProps }) => (
	<DashboardProvider>
		<Component {...pageProps} />
	</DashboardProvider>
);

export default App;
