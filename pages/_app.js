import "../styles/globals.css";
import { Provider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider session={pageProps.session}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default MyApp;
