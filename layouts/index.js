import AppHeader from "components/AppHeader";
import BaseDialog from "components/Common/Dialog";
import BluecomHomeFAB from "components/Common/FloatingAction/BluecomHomeFAB";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import EcomJourneyCard from "sections/BlogsPageSections/component/EcomJourneyCard";
import BannerBookDemoComponent from "sections/HomePageSections/components/BannerBookDemoComponent";

import DownloadWhitePaperComponent from "sections/HomePageSections/components/DownloadWhitePaperComponent";
import FooterSectionComponent from "sections/HomePageSections/components/FooterSectionComponent";

const BaseLayout = ({
	pageTitle,
	pageDescription,
	pageImage,
	children,
	hideJourneyCard,
}) => {
	const { isBannerVisible } = useSelector((state) => state.views);
	return (
		<div
			style={{
				maxWidth: "100%",
				overflowX: "hidden",
			}}
		>
			<NextSeo
				title={pageTitle}
				description={pageDescription}
				openGraph={{
					images: [
						{
							url:
								pageImage ||
								`https://bluecom.ai/assets/welcome.png`,
						},
					],
				}}
			/>

			<AppHeader showLogo isBannerVisible={isBannerVisible} />

			<div style={{ marginTop: isBannerVisible ? "120px" : "80px" }}>
				{children}
			</div>
			{!hideJourneyCard && <EcomJourneyCard />}
			<FooterSectionComponent />
			<BluecomHomeFAB />
		</div>
	);
};

export default BaseLayout;
