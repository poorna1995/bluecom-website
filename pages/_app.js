import { CssBaseline, ThemeProvider } from "@mui/material";
import ErrorBoundary from "components/ErrorBoundary";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import { useRef, useEffect } from "react";
import "styles/globals.css";
import "styles/legal-page-styles.css";
import theme from "theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import { Provider } from "react-redux";
import { store } from "redux/configureStore";
const APP_DATA = {
	WEBSITE_URL: "https://bluecom.ai",
};
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
	const snackbarRef = useRef();
	const title =
		"Bluecom - multi-channel technology stack platform for your ecommerce business";
	const description = `Running a multi-channel ecommerce business? Get started with Bluecom. We are dedicated to providing you with an exceptional experience by offering a comprehensive suite of features through our user-friendly interface. Login or create a new account on bluecom.`;
	const pageImage = "/icon.svg";
	const website = APP_DATA.WEBSITE_URL;
	const sitename = "bluecom.ai";

	const getLayout = Component.getLayout ?? ((page) => page);
	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			process.env.NODE_ENV === "production"
		) {
			LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_KEY);
			// plugins should also only be initialized when in the browser
			setupLogRocketReact(LogRocket);
		}
	}, []);
	return (
		<ErrorBoundary>
			<Script
				async
				defer
				strategy="lazyOnload"
				id="hs-script-loader"
				src="//js-na1.hs-scripts.com/40194709.js"
			/>
			<Script
				strategy="lazyOnload"
				async
				defer
				id="google-analytics"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
			/>

			<Script strategy="lazyOnload" async defer id="google-analytics-2">
				{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}");
		gtag('event', 'conversion', {'send_to': 'AW-10820005547/Vsz2CKi_geEYEKvdsKco'});
		gtag('event', 'conversion', {'send_to': 'AW-10820005547/pRlQCMLHgeEYEKvdsKco'});
	`}
			</Script>

			<Script strategy="lazyOnload" async defer id="hotjar-tracking">
				{`
					(function(h,o,t,j,a,r){
						h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
						h._hjSettings={hjid:3553415,hjsv:6};
						a=o.getElementsByTagName('head')[0];
						r=o.createElement('script');r.async=1;
						r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
						a.appendChild(r);
					})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
				`}
			</Script>

			<DefaultSeo
				defaultTitle={title}
				title={title}
				titleTemplate="%s - Bluecom"
				description={description}
				additionalLinkTags={[
					{
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "/apple-touch-icon.png",
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/favicon-32x32.png",
					},
					{
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/favicon-16x16.png",
					},
					{
						rel: "manifest",
						href: "/site.webmanifest",
					},
				]}
				openGraph={{
					title: title,
					description: description,
					type: "website",
					locale: "en_US",
					url: website,
					site_name: sitename,
					images: [
						{
							url: `${APP_DATA.WEBSITE_URL}/assets/welcome.png`,
						},
					],
				}}
				twitter={{
					handle: "@bluecom",
					site: "@bluecom",
					cardType: "summary_large_image",
				}}
				canonical={`${website}`}
			/>
			<Provider store={store}>
				{/* <PersistGate persistor={persistor}> */}
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<SnackbarProvider
							ref={snackbarRef}
							autoHideDuration={3000}
							maxSnack={3}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							preventDuplicate
							variant="success"
							// Components={{
							// 	publishProduct: PublishProductsSnackbar,
							// }}
						>
							{/* <NextNProgress color="white" /> */}
							<CssBaseline />
							{getLayout(<Component {...pageProps} />, pageProps)}
						</SnackbarProvider>
					</QueryClientProvider>
					{/* <ReactQueryDevtools initialIsOpen /> */}
				</ThemeProvider>
			</Provider>
			{/* </PersistGate> */}
		</ErrorBoundary>
	);
}
