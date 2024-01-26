import "../public/styles/index.css";
import DashboardProvider from "../components/context";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coding Beauty',
  description:
    'codingbeautydev.com: Coding - the art, the science, and the passion.',
};

const App = ({ Component, pageProps }) => (
	<DashboardProvider>
		<link
			rel="icon"
			href="/icon?<generated>"
			type="image/<generated>"
			sizes="<generated>"
		/>
		<Component {...pageProps} />
	</DashboardProvider>
);

export default App;
