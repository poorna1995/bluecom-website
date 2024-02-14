import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
// import placeholder from "public/assets/imageList.png";
const StyledImage = styled(Image, {})(({ theme }) => ({}));

const AppImage = ({ src, alt, style, sx, unoptimized, ...props }) => {
	const imgURL = src === "" ? placeholder : src;
	return (
		<StyledImage
			src={src}
			alt={alt || "bluecom "}
			sx={sx}
			style={style}
			unoptimized={unoptimized ?? true}
			{...props}
		/>
	);
};

export default AppImage;
