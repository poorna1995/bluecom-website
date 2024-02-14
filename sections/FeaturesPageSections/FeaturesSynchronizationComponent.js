import { Box, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import BlueTickIcon from "components/Common/Icons/FeaturesIcons/BlueTickIcon";
import React from "react";

export default function FeaturesSynchronization({
  headerTitle,
  handleImage,
  ListData = [],
}) {
  const PassListData = () => {
    return ListData.map((item, index) => (
      <Box key={index}>
        <Typography
          // key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            color: "#161E28",
            fontWeight: 500,
            gap: "5px",
            lineHeight: { md: "45px", xs: "35px" },
            fontSize: { md: "22px", xs: "18px" },
            "& svg path": {
              height: "10px",
              width: "10px",
              p: "16px",
            },
          }}
        >
          <div
            style={{
              marginTop: "5px",
            }}
          >
            <BlueTickIcon />
          </div>
          {item.description}
        </Typography>
      </Box>
    ));
  };

  return (
    <Box>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Grid
          alignContent={"center"}
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: "16px", md: "0px" },
            order: { xs: 2, md: 1 }, // Reverse order on xs screens
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: { md: "42px", xs: "24px" },
                fontWeight: 800,
                color: "#0E0B3D",
                // lineHeight: "85px",
                paddingLeft: { xs: "0px", md: "100px" },
              }}
            >
              {headerTitle}
              {PassListData()}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 }, // Reverse order on xs screens
          }}
        >
          <AppImage
            src={handleImage}
            sx={{
              p: { xs: "16px", md: "0px" },
              width: ["100%", "120%"], // Adjust width on different screens
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
