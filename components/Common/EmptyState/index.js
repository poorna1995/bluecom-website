// import React from "react";
// import placeholder from "public/assets/placeholder/empty_state.png";
// import { Box } from "@mui/material";
// import AppImage from "../AppImage";
// import DescriptionText from "../Typography/BodyText/DescriptionText";
// import PrimaryButton from "../Buttons/PrimaryButton";
// import { Outbound } from "@mui/icons-material";
// import OutlinedButton from "../Buttons/OutlinedButton";

// export default function EmptyState({ text,  primaryButton,
// 	outlinedButton,
// 	bodyText,
// 	image,
// 	children,
// 	containerStyles,
// 	imageStyles,
//   }) {
// 	return (
// 		<Box sx={{ height: "400px", display: "grid", placeItems: "center" ,mt: 5,
//         ...containerStyles,
//  }}>
// 			{/* <AppImage src={placeholder} width="150" height="150" /> */}
// 			<AppImage
//         src={image}
//         width="190"
//         height="180"
//         sx={{ mb: 1, ...imageStyles }}
//       />

// 			{/* <DescriptionText>{text || "No data found"}</DescriptionText> */}

//  			<DescriptionText
//         sx={{ color: "grey.800", fontWeight: 700, fontSize: "16px" }}
//       >
//         {text || "No data found"}
//       </DescriptionText>
//      {bodyText && <Typography
//         sx={{
//           color: "grey.600",
//           fontWeight: 500,
//           fontSize: "16px",
//           width: "450px",
//           textAlign: "center",
//         }}
//       >
//         {bodyText}
//       </Typography>}
//       {children}
//       {/* <PrimaryButton>{primaryButton}</PrimaryButton> */}
//       {/* <OutlinedButton>{outlinedButton}</OutlinedButton> */}

// 		</Box>
// 	);
// }

// Depeesh code

import React from "react";
import placeholder from "public/assets/placeholder/empty_state1.png";
import { Box, Typography } from "@mui/material";
import AppImage from "../AppImage";
import DescriptionText from "../Typography/BodyText/DescriptionText";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Outbound } from "@mui/icons-material";
import OutlinedButton from "../Buttons/OutlinedButton";

export default function EmptyState({
  text,
  primaryButton,
  outlinedButton,
  bodyText,
  image,
  children,
  containerStyles,
  imageStyles,
}) {
  return (
    <Box
      sx={{
        height: "400px",
        display: "grid",
        placeItems: "center",
        mt: 5,
        ...containerStyles,
      }}
    >
      <AppImage src={placeholder} width="150" height="150" />

      {/* <AppImage
        src={image}
        width="190"
        height="180"
        sx={{ mb: 1, ...imageStyles }}
      /> */}
      <DescriptionText
        sx={{ color: "grey.800", fontWeight: 700, fontSize: "16px" }}
      >
        {text || "No Products availiable !"}
      </DescriptionText>
      <Typography
        //  {bodyText && <Typography
        sx={{
          color: "grey.600",
          fontWeight: 500,
          fontSize: "16px",
          width: "450px",
          textAlign: "center",
        }}
      >
        {/* {bodyText} */}
        {bodyText ||
          "Look Like you have not added any store. You can add new purchase order by clicking below"}
      </Typography>
      {/* </Typography>} */}
      {children}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <PrimaryButton>Add New Product</PrimaryButton>
        <OutlinedButton>Add New Store</OutlinedButton>
      </Box>
      {/* <PrimaryButton>{primaryButton}</PrimaryButton> */}
      {/* <OutlinedButton>{outlinedButton}</OutlinedButton> */}
    </Box>
  );
}
