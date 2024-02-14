import React from "react";
import HeroSectionComponent from "./components/HeroSectionComponent";
import WhatWePromiseComponent from "./components/WhatWePromiseComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import MultiStoreOmniChannelPresenceComponent from "./components/MultiStoreOmniChannelPresenceComponent";
import { Box } from "@mui/material";
import UnlockEfficiencyAndGrowthComponent from "./components/UnlockEfficiencyAndGrowthComponent";
import BaseDialog from "components/Common/Dialog";
import AppImage from "components/Common/AppImage";
import PopupImage from "public/images/Popup/popupBookdemo.png";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { ScheduleDemo } from "components/Common/Buttons/ScheduleDemo";

export default function HomePageSections() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			)
		) {
			// true for mobile device
			console.log("mobile device");
		} else {
			const timer = setTimeout(() => {
				setOpen(true);
			}, 15000);
			console.log("not mobile device");
			return () => clearTimeout(timer); // Clear the timeout when the component unmounts

			// false for not mobile device
			
		}
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box>
			{/* <BannerBookDemoComponent /> */}
			<Box
				sx={{
					maxWidth: "1440px",
					mx: "auto",
					// px: "66px"
				}}
			>
				{/* hero section */}
				{/* fix padding for grid */}
				<HeroSectionComponent />
			</Box>

			{/* Ecommerce Operations Stack */}
			<UnlockEfficiencyAndGrowthComponent />
			{/* What we Promise  */}
			<Box
				sx={{
					maxWidth: "1440px",
					mx: "auto",
					// px: "66px"
				}}
			>
				<WhatWePromiseComponent />
			</Box>
			{/* why us */}
			<WhyUsComponent />
			<Box
				sx={{
					maxWidth: "1440px",
					mx: "auto",
					// px: "66px"
				}}
			>
				{/* Multi Store, Omichannel Presence */}
				<MultiStoreOmniChannelPresenceComponent />
			</Box>
			{/* popup */}
			{/* <BaseDialog
				open={open}
				handleClose={handleClose}
				buttonColor={"#fff"}
				dialogPaperStyles={{
					maxWidth: "680px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						pb: "32px",
					}}
				>
					<AppImage
						src={PopupImage}
						sx={{ width: "100%", height: "100%" }}
					/>

					<SectionTitleText
						sx={{
							fontSize: { md: "32px", xs: "18px", sm: "24px" },
							fontWeight: "700",
							lineHeight: "39px",
							fontFamily: "Plus Jakarta Sans, sans-serif",
							textAlign: "center",
							color: "#0E0B3D",
							mt: "34px",
						}}
					>
						Interested to know more <br /> about our product?
					</SectionTitleText>
					{/* <DescriptionText
            sx={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "24px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "#0E0B3D",
              mt: "20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt
            gravida <br /> ut pharetra urna ornare. Egestas magnis nunc metus
            nulla amet.
          </DescriptionText> 
					<ScheduleDemo mr={"0"} mt={"20px"} />
				</Box>
			</BaseDialog> */}
		</Box>
	);
}
