import { Box, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import BlueTickIcon from "components/Common/Icons/FeaturesIcons/BlueTickIcon";
import React from "react";

export default function FeaturesProductPublishingComponent({
  headerName,
  handleImageLeft,
  productData = [],
}) {
  const FeaturesList = () => {
    return productData.map((item, index) => (
      <Typography
        key={index}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: "#161E28",
          lineHeight: { md: "45px", xs: "35px" },
          fontSize: { md: "22px", xs: "18px" },
          fontWeight: 500,
          gap: "5px",
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
            src={handleImageLeft}
            sx={{
              p: "16px",
              width: ["120%", "120%"],
              height: "auto",
            }}
          />
        </Grid>
        <Grid
          alignContent={"center"}
          item
          xs={12}
          md={6}
          paddingLeft={{ md: "120px", xs: "0px" }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: 800,
                color: "#0E0B3D",
                lineHeight: "55px",
                p: { xs: "16px", md: "0px" },
              }}
            >
              {headerName}
              {FeaturesList()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
