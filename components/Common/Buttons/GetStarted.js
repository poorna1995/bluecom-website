import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import OutlinedButton from "./OutlinedButton";
import UserIcon from "../Icons/UserIcon";

export const GetStarted = ({
	widthInput,
	heightInput,
	fontSize,
	fontWeight,
	padding,
	mt,
	icon,
	title,
}) => {
	function handleLogin(link) {
		// router.push("/auth/login");
		handleClick();

		window.open(`https://app.bluecom.ai/auth/${link}`, "_blank");
	}
	const [hovered, setHovered] = React.useState(false);
	const [pressed, setPressed] = React.useState(false);
	const [focused, setFocused] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	const handleMouseDown = () => {
		setPressed(true);
	};

	const handleMouseUp = () => {
		setPressed(false);
	};

	const handleFocus = () => {
		setFocused(true);
	};

	const handleBlur = () => {
		setFocused(false);
	};

	const handleClick = () => {
		setLoading(true);
		// Perform loading action here
		setTimeout(() => {
			setLoading(false);
			setHovered(false);
			setFocused(false);
		}, 2000);
	};

	return (
		<OutlinedButton
			icon={<UserIcon color={hovered ? "#fff" : "#4F44E0"} />}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onFocus={handleFocus}
			onBlur={handleBlur}
			sx={{
				minWidth: widthInput ? widthInput : "147px",
				height: heightInput ? heightInput : "56px",
				mt: mt ? mt : "1rem",
				fontSize: fontSize ? fontSize : "18px",
				fontWeight: fontWeight ? fontWeight : "500",
				padding: padding ? padding : "28px 24px",
				fontFamily: "Manrope, sans-serif",
				border: "2px solid #4F44E0",
				backgroundColor: pressed
					? "#0A0092"
					: hovered
					? "#4F44E0"
					: focused
					? "#4F44E0"
					: loading
					? "#4F44E0"
					: "#fff",
				border: focused ? "1px solid #fff" : "2px solid #4F44E0",
				color: pressed
					? "#FFF"
					: hovered
					? "#FFF"
					: focused
					? "#fff"
					: "#4F44E0",
				borderRadius: "8px",
				"&:hover": {
					color: "#fff",
					backgroundColor: "#4F44E0",
				},
				"&:focus": {
					outline: focused ? "2px solid #7C99FF" : "none",
				},
			}}
			{...loading}
			onClick={() => handleLogin("sign-up")}
		>
			{loading ? (
				<CircularProgress
					size={20}
					color="inherit"
					sx={{ color: "#fff" }}
				/>
			) : (
				title || "Get Started"
			)}
		</OutlinedButton>
	);
};
