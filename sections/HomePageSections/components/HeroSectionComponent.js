import { Box, Button, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import HeroImageNew from "public/images/02heroSection/HeroImageNew.svg";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import { ArrowIcon, ScheduleIcon } from "./BannerBookDemoComponent";

export default function HeroSectionComponent() {
  function handleClickButton() {
    // handleClick();
    // router.push("/auth/login");
    window.open(`https://demo.bluecom.ai?type=demo`, "_blank");
  }

  return (
    <Box>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          mt: { xs: "0px", sm: "0px", md: "100px" },
          p: ["0px", "0px", "63px"],
        }}
      >
        {/* Hero contents */}
        <Grid
          alignContent={"center"}
          item
          xs={12}
          md={6}
          // sx={{ padding: { xs: "16px", sm: "16px", md: "0px" } }}
        >
          {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AppImage src={PlayIcon} />
          <Typography
            sx={{
              color: "#4F44E0",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Introduction tutorial
          </Typography>
          <AppImage src={RightArrow} />
        </Box> */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              alignItems: "center",
              // gap: "22px",
              // flex: 1,
              borderRadius: "50px",
              background: "rgba(197, 98, 6, 0.10)",
              px: 3,
              py: 1,
              maxWidth: "500px",
              width: "auto",
            }}
          >
            <Typography
              sx={{
                color: " #121212",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",

                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "20px",
                // flex: { xs: 0.65, md: 1 },
              }}
            >
              Explore the Potential of Bluecom
              {/* through a Self-Guided Product Tour */}
            </Typography>
            <Button
              // variant="outlined"
              sx={{
                // background: "white",
                textTransform: "none",
                // border: `1px solid rgba(0, 0, 0, 0.20)`,
                height: "36px",
                fontFamily: " Plus Jakarta Sans",
                borderRadius: "8px",
                fontSize: {
                  md: "14px",
                  xs: "10px",
                  sm: "10px",
                },
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "20px",
                ml: { md: 2 },
                color: "rgba(225, 108, 0, 1)",
                minWidth: "168px",
                // flex: { xs: 0.35, md: 1 },

                // width: "100%",
                // mr: 2,
                "&:hover": {
                  background: "transparent",
                  // 	// background: "white",
                  // 	background: "rgba(225, 108, 0, 1)",
                  // 	border: "1px solid rgba(225, 108, 0, 1)",

                  // 	// background: (theme) => theme.palette.primary.main,
                  // 	color: "white",
                  // 	"& .schedule-icon path": {
                  // 		fill: "white",
                  // 	},
                  "& .arrow-icon ": {
                    // stroke: "white",
                    ml: 1,
                  },
                },
              }}
              startIcon={<ScheduleIcon />}
              endIcon={<ArrowIcon />}
              onClick={handleClickButton}
              disableRipple
            >
              Product Tour
            </Button>
          </Box>

          <Typography
            // variant="h1"
            component={"h1"}
            sx={{
              // mt: "1rem",
              // fontSize: { xs: "28px", sm: "28px", md: "60px" },
              fontSize: {
                md: "40px",
                xs: "28px",
                sm: "28px",
                lg: "60px",
                xl: "60px",
              },
              fontWeight: 800,
              lineHeight: {
                xs: "34px",
                sm: "34px",
                md: "55px",
                lg: "85px",
                xl: "85px",
              },
              color: "#151515",
              span: { color: "#4F44E0" },
              fontFamily: "Manrope, sans-serif",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
              maxWidth: "100%",
              marginX: {
                xs: "auto",
              },
              mt: {
                xs: 4,
                md: 0,
              },
              "& .hide": {
                display: {
                  xs: "block",
                  sm: "none",
                  md: "block",
                },
              },
            }}
          >
            Inventory and Product Management for <br className="hide" />
            Multi-channel <br className="hide" />
            <span>E-commerce Operations</span>
          </Typography>

          <Box
            sx={{
              padding: { xs: "8px", sm: "16px", md: "0px" },
              // padding: { xs: "8px", sm: "16px", md: "0px" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mt: "1rem",
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "16px",
                  lg: "18px",
                  xl: "18px",
                },

                fontWeight: 600,
                lineHeight: "28px",
                color: "#313131",
                fontFamily: "Manrope, sans-serif",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "400px",
                  md: "100%",
                },
                mx: {
                  sm: "auto",
                },
              }}
            >
              All-inclusive platform for Product Information, Inventory,
              Purchase Order, Vendor, and Location Management
            </Typography>

            {/* <GetStartedAndScheduleDemo /> */}
            <Box
              sx={{
                mt: "1rem",
                maxWidth: "100%",
                // m: { xs: "auto", sm: "auto", md: "0px" },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <GetStartedAndScheduleDemo />
            </Box>

            {/* <Typography
							variant="subtitle1"
							sx={{
								mt: "1rem",
								fontSize: "14px",
								fontWeight: 600,
								color: "#313131",
								fontFamily: "Manrope, sans-serif",
								// mx: { xs: "15px", md: "0px" },
							}}
						>
						 No Credit Card required 
						</Typography> */}
          </Box>
        </Grid>
        {/* Hero Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppImage
            src={HeroImageNew}
            unoptimized={false}
            sx={{
              p: "16px",
              width: { xs: "100%", md: "100%", sm: "85%" },
              height: "auto",
              // maxWidth: { xs: "100%", md: "80%" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
