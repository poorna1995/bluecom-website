import { Box, Grid, Typography } from "@mui/material";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import React from "react";
import CalculatorRangeSlider from "./CalculatorRangeSlider";
import { useRouter } from "next/router";

const styles = {
  py: 12,
  maxWidth: "1440px",
  margin: "auto",
  position: "relative",
  "& .card-background": {
    background: "#000",
    color: "#fff",
    borderRadius: "12px",
    p: "32px",
    maxWidth: "1200px",
    pb: "196px",
    pt: "64px",
  },
  "& .card-title": {
    color: "#fff",
    fontSize: "36px",
    fontWeight: 700,
    maxWidth: "560px",
    my: 4,
  },
  "& .card-description": {
    color: "#fff",
    fontSize: "20px",
    fontWeight: 500,
    mb: 4,
  },
  "& .input-card": {
    background: "#27272a",
    width: "640px",
    p: 4,
    pb: 10,
    pt: 8,
    borderRadius: "12px",
    position: "absolute",
    top: "20%",
    right: "0%",
    "& .title": {
      fontSize: "24px",
      lineHeight: "32px",
      color: "#fff",
      mb: 2,
    },
  },
};

export default function PartnerRevenueCalculatorSection() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" }, ...styles }}>
        <div className="card-background">
          <Typography className="card-title">
            Earn passive income with uncapped commissions
          </Typography>
          <Typography className="card-description">
            We split revenue with partners 50-50 for the first 12 months.
          </Typography>
          <PrimaryButton
            sx={{
              height: "52px",
              fontSize: " 16px !important",
              fontWeight: 600,
              px: "20px !important",
            }}
            onClick={() => router.push("/partner-program")}
          >
            Become an affiliate
          </PrimaryButton>
        </div>
        <div className="input-card">
          <Typography className="title">
            Estimate your earnings with referrals
          </Typography>
          <CalculatorRangeSlider />
          <Typography
            sx={{
              color: "#fff",
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            *Based on an average monthly revenue of $75 per user.
          </Typography>
        </div>
      </Box>
      <Box
        sx={{ display: { xs: "block", sm: "block", md: "none" }, ...styles }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              px: { xs: 1.5, md: 1.5 },
              py: 6,
			  pt: "3px",
            }}
            order={{ md: 2, xs: 1 }}
          >
            <div
              className="card-background"
              style={{
                paddingBottom: "100px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: 700,
                  maxWidth: "560px",
                  my: 2,
                }}
              >
                Earn passive income with uncapped commissions
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                We split revenue with partners 50-50 for the first 12 months.
              </Typography>
              <PrimaryButton
                sx={{
                  //   height: "52px",
                  //   fontSize: " 16px !important",
                  //   fontWeight: 600,
                  px: "20px !important",
                }}
                onClick={() => router.push("/partner-program")}
              >
                Become an affiliate
              </PrimaryButton>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ px: { xs: 1.5, md: 1.5 }, mt: "8px" }}
            order={{ md: 1, xs: 2 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                background: "#27272a",
                // width: "387px",
                padding: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                paddingBottom: 10,
                paddingTop: 8,
                borderRadius: "12px",
                position: "absolute",
                top: "70%",
                right: "0%",
              }}
            >
              <Typography
                sx={{
                  fontSize: ["16px", "24px"],
                  lineHeight: "32px",
                  color: "#fff",
                  //   mb: 1,
                  //   padding: "8px 16px",
                }}
              >
                Estimate your earnings with referrals
              </Typography>
              <span
                style={
                  {
                    //   padding: "0px 16px",
                  }
                }
              >
                <CalculatorRangeSlider />
              </span>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  lineHeight: "19px",
                    padding: "8px 10px",
                }}
              >
                *Based on an average monthly revenue of $75 per user.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
