import "../public/styles/index.css";
import DashboardProvider from "../components/context";
import Head from 'next/head'

export const metadata = {
	title: "Coding Beauty",
	description:
		"codingbeautydev.com: Coding - the art, the science, and the passion.",
};

const App = ({ Component, pageProps }) => (
	<DashboardProvider>
		<Head>
			<title>Analytic Dashboard </title>
			<meta name="description" content="A Geegpay coding Challenge" />
			<link
				rel="icon"
				href="/icons/logo.svg"
				type="image/svg"
			/>
		</Head>
		<Component {...pageProps} />
	</DashboardProvider>
);

export default App;
