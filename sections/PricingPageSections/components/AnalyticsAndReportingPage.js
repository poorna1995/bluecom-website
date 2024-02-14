import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import image from "public/assets/Group 39519.png";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BaseDialog from "components/Common/Dialog";
import BaseCard from "components/Common/Cards/BaseCard";
import CheckIcon from "components/Common/Icons/PricingPageIcons/CheckIcon";
import ForecastIcon from "components/Common/Icons/PricingPageIcons/ForecastIcon";
import CheckIconWithCircle from "components/Common/Icons/PricingPageIcons/CheckIconWithCircle";
import OutlinedButton from "components/Common/Buttons/OutlinedButton";

const AnalyticsAndReportingPage = () => {
  const data = [
    {
      title: "Forecasting",
      icon: image,
      desc: "Get Complete Operations Analytics",
      button: "Get Started",
      features: [
        {
          description: "What’s included",
          keyfeature: [
            "All analytics features",
            "Up to 250,000 tracked visits",
            "Normal support",
            "Up to 3 team members",
          ],
        },
      ],
    },
    {
      title: "Analytics  & Reporting",
      icon: image,
      desc: "Get Complete Operations Analytics",
      button: "Get Started",
      features: [
        {
          description: "What’s included",
          keyfeature: [
            "All analytics features",
            "Up to 250,000 tracked visits",
            "Normal support",
            "Up to 3 team members",
          ],
        },
      ],
    },
    {
      title: "Replenishment System",
      icon: image,
      desc: "Get Complete Operations Analytics",
      button: "Get Started",
      features: [
        {
          description: "What’s included",
          keyfeature: [
            "All analytics features",
            "Up to 250,000 tracked visits",
            "Normal support",
            "Up to 3 team members",
          ],
        },
      ],
    },
  ];

  const cards = data.map((item, index) => (
    <Grid
      item
      xs={12}
      md={12}
      key={index}
      sx={{
        display: "flex",
        border: "1px solid #E5E5E5",
        // padding: "30px",
        gap: "80px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          <ForecastIcon />
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#151515",
            }}
          >
            {item.title}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#6F6C90",
            padding: "20px",
          }}
        >
          {item.desc}
        </Typography>
        <Box
          sx={{
            paddingLeft: "20px",
          }}
        >
          <PrimaryButton
            sx={{
              width: "200px",
            }}
          >
            {item.button}
          </PrimaryButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          backgroundColor: "#F9FAFF",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        {item.features.map((feature, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
            key={index}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#4F44E0",
                paddingBottom: "20px",
              }}
            >
              {feature.description}
            </Typography>
            {feature.keyfeature.map((key, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
                key={index}
              >
                <CheckIconWithCircle />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#151515",
                  }}
                >
                  {key}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Grid>
  ));

  return (
    <Box sx={{ maxWidth: "1440px", mx: "auto" }}>
      <Grid
        container
        // spacing={2}
        xs={12}
        md={12}
        rowGap={"50px"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          px: "120px",
          py: "36px",
        }}
      >
        {cards}
      </Grid>
    </Box>

    // <Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       marginBottom: "90px",
    //     }}
    //   >
    //     <BaseCard
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <CardContent
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "space-around",
    //           alignItems: "center",
    //           width: "392px",
    //           height: "448px",
    //         }}
    //       >
    //         <Box
    //           sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    //         >
    //           <Box
    //             sx={{
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "center",
    //               gap: "10px",
    //             }}
    //           >
    //             <AppImage src={image} width="72" height="72" />
    //             <Typography
    //               sx={{
    //                 fontWeight: "700",
    //                 fontSize: "24px",
    //                 lineHeight: "35px",
    //                 color: "#170F49",
    //               }}
    //             >
    //               Analytics & Reporting
    //             </Typography>
    //           </Box>
    //           <Box>
    //             <Typography
    //               sx={{
    //                 color: "#6F6C90",
    //                 lineHeight: "30px",
    //                 fontSize: "18px",
    //                 fontWeight: "400",
    //               }}
    //             >
    //               Get Complete Operations Analytics
    //             </Typography>
    //           </Box>
    //         </Box>
    //         <Box>
    //           <PrimaryButton
    //             sx={{
    //               backgroundColor: "#4A3AFF",
    //               padding: "26px 78px",
    //               borderRadius: "96px",
    //             }}
    //           >
    //             Get started
    //           </PrimaryButton>
    //         </Box>
    //       </CardContent>

    //       <CardContent
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           width: "392px",
    //           height: "448px",
    //           backgroundColor: "#F7F7FC",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "space-around",
    //             flexDirection: "column",
    //             gap: "0.7rem",
    //           }}
    //         >
    //           <Box sx={{ display: "flex" }}>
    //             <Typography
    //               sx={{
    //                 color: "#170F49",
    //                 fontWeight: "700",
    //                 fontSize: "18px",
    //                 lineHeight: "20px",
    //                 marginRight: "55px",
    //               }}
    //             >
    //               What’s included
    //             </Typography>
    //           </Box>
    //           <Box sx={{ marginTop: "1rem" }}>
    //             <Box sx={{ display: "flex", alignItems: "center" }}>
    //               <CheckCircleIcon
    //                 style={{
    //                   color: "4A3AFF",
    //                   width: "28px",
    //                   height: "28px",
    //                   marginRight: "10px",
    //                 }}
    //               />
    //               <Typography
    //                 sx={{
    //                   color: "#170F49",
    //                   fontSize: "16px",
    //                   fontWeight: "400",
    //                   lineHeight: "20px",
    //                 }}
    //               >
    //                 All analytics features
    //               </Typography>
    //             </Box>
    //           </Box>
    //           <Box>
    //             <Box sx={{ display: "flex", alignItems: "center" }}>
    //               <CheckCircleIcon
    //                 style={{
    //                   color: "4A3AFF",
    //                   width: "28px",
    //                   height: "28px",
    //                   marginRight: "10px",
    //                 }}
    //               />
    //               <Typography
    //                 sx={{
    //                   color: "#170F49",
    //                   fontSize: "16px",
    //                   fontWeight: "400",
    //                   lineHeight: "20px",
    //                 }}
    //               >
    //                 All analytics features
    //               </Typography>
    //             </Box>
    //           </Box>
    //           <Box>
    //             <Box sx={{ display: "flex", alignItems: "center" }}>
    //               <CheckCircleIcon
    //                 style={{
    //                   color: "4A3AFF",
    //                   width: "28px",
    //                   height: "28px",
    //                   marginRight: "10px",
    //                 }}
    //               />
    //               <Typography
    //                 sx={{
    //                   color: "#170F49",
    //                   fontSize: "16px",
    //                   fontWeight: "400",
    //                   lineHeight: "20px",
    //                 }}
    //               >
    //                 All analytics features
    //               </Typography>
    //             </Box>
    //           </Box>
    //           <Box>
    //             <Box sx={{ display: "flex", alignItems: "center" }}>
    //               <CheckCircleIcon
    //                 style={{
    //                   color: "4A3AFF",
    //                   width: "28px",
    //                   height: "28px",
    //                   marginRight: "10px",
    //                 }}
    //               />
    //               <Typography
    //                 sx={{
    //                   color: "#170F49",
    //                   fontSize: "16px",
    //                   fontWeight: "400",
    //                   lineHeight: "20px",
    //                 }}
    //               >
    //                 All analytics features
    //               </Typography>
    //             </Box>
    //           </Box>
    //         </Box>
    //       </CardContent>
    //     </BaseCard>
    //   </Box>
    // </Box>
  );
};

export default AnalyticsAndReportingPage;
