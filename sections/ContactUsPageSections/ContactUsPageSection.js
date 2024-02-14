import {
	Box,
	Container,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import CheckIcon from "components/Common/Icons/PricingPageIcons/CheckIcon";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import TextInput from "components/Common/Inputs/TextInput";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import FormSection from "./ContactUsFormSection";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import EcomJourneyCard from "sections/BlogsPageSections/component/EcomJourneyCard";

export default function ContactUs() {
	const featureData = [
		{
			description: "Product Information Management",
		},
		{
			description: "Vendor Manangement",
		},
		{
			description: "Location/warehouse management",
		},
		{
			description: "Purchase order Management",
		},
		{
			description: "Inventory Management",
		},
	];

	const featureList = featureData.map((item, index) => (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: "12px",
				paddingBottom: "20px",
			}}
			key={index}
		>
			<CheckIcon />
			<Typography
				sx={{
					fontSize: ["14px", "16px"],
					fontWeight: "600",
					color: "#313131",
				}}
			>
				{item.description}
			</Typography>
		</Box>
	));

	return (
		<>
			<Grid
				container
				// spacing={2}
				sx={{
					py: "36px",
					maxWidth: "1440px",
					margin: "auto",
					justifyContent: "center",
				}}
			>
				<Grid item xs={12} sm={12} md={6} order={{ md: 1, xs: 2 }}>
					<BaseCard>
						<Box
							sx={{
								px: { xs: 4, sm: 4, md: 12 },
								mt: {
									xs: 4,
									md: 0,
								},
							}}
						>
							<Typography
								variant="h1"
								sx={{
									fontSize: ["28px", "62px"],
									fontWeight: "800",
									color: "#313131",
									paddingBottom: ["4px", "0px"],
								}}
							>
								Get in touch
								<br /> with{" "}
								<span
									style={{
										color: "#4F44E0",
									}}
								>
									bluecom.ai
								</span>
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{
									fontSize: ["16px", "18px"],
									fontWeight: "500",
									color: "#313131",
									paddingBottom: ["12px", "25px"],
								}}
							>
								Fill out the form and we{"'"}ll get back to you
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{
									fontSize: ["14px", "16px", "18px"],
									fontWeight: "700",
									color: "#222222",
									paddingBottom: "25px",
								}}
							>
								Features
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									alignSelf: "center",
								}}
							>
								{featureList}
							</Box>
						</Box>
					</BaseCard>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					sx={{
						px: { xs: 1.5, md: 1.5 },
					}}
					order={{ md: 2, xs: 1 }}
				>
					<FormSection />
				</Grid>

				{/* <Box
          sx={{
            maxWidth: "100%",
            pt: "36px",
          }}
        >
          <EcomJourneyCard />
        </Box> */}
			</Grid>
		</>
	);
}

{
	/* <Grid container spacing={2}>
        <Grid
          item
          xl={5}
          sx={{
            display: "flex",
            marginLeft: "120px",
            justifyContent: "center",
          }}
        >
          <BaseCard
            sx={{
              display: "flex",
              flexDirection: "row",
              //   gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "62px",
                  fontWeight: "800",
                  color: "#313131",
                //   mb: "10px",
                }}
              >
                Get in touch with{" "}
                <span
                  style={{
                    color: "#4F44E0",
                  }}
                >
                  bluecom.ai
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#313131",
                }}
              >
                Fill out the form and we{"'"}ll get back to you
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextInput
                title="First Name"
                placeholder="Enter your First name"
                required
                //   value={firstName}
                //   onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                title="Last Name"
                placeholder="Enter Last Name"
                required
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
              />

              <PrimaryButton>Contact Us</PrimaryButton>
            </Box>
          </BaseCard>
        </Grid>
      </Grid> */
}
