import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "public/images/blog/blog1.png";
import image2 from "public/images/blog/blog2.png";
import image3 from "public/images/blog/blog3.png";
import image4 from "public/images/blog/blog4.png";
import AppImage from "components/Common/AppImage";

export default function FeaturedBlogSection() {
  const blogs = [
    {
      image: image1,
      title: "Welcome!",
      description:
        "Whether you're running a multi-channel business or selling on Shopify, Bluecom.ai has got you covered. ",
    },
    {
      image: image2,
      title: "Inventory Management for E-commerce Businesses:",
      description:
        "Whether you're running a multi-channel business or selling on Shopify, Bluecom.ai has got you covered. ",
    },
    {
      image: image3,
      title: "Welcome!",
      description:
        "Whether you're running a multi-channel business or selling on Shopify, Bluecom.ai has got you covered. ",
    },
    {
      image: image4,
      title: "Inventory Management for E-commerce Businesses:",
      description:
        "Whether you're running a multi-channel business or selling on Shopify, Bluecom.ai has got you covered. ",
    },
  ];

  const renderBlogs = blogs.map((blog, index) => {
    //create a grid item for each blog
    return (
      <Grid item xs={12} sm={6} md={6} key={index} sx={{ pb: "1.5rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <AppImage
            src={blog.image}
            alt="blog"
            style={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              pl: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#151515",
                pt: "20px",
                pb: "10px",
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#151515",
                pb: "20px",
              }}
            >
              {blog.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  });
  return (
    <Box sx={{ pt: "59px" }}>
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        FeaturedBlogSection
      </Typography>
      <Grid container spacing={6} sx={{ pt: "1.375rem" }}>
        {renderBlogs}
      </Grid>
    </Box>
  );
}
