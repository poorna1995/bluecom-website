import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { setBannerVisible } from "redux/views/viewsSlice";

export default function BannerBookDemoComponent() {
	const { isBannerVisible } = useSelector((state) => state.views);
	const dispatch = useDispatch();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	function handleClickButton() {
		// handleClick();
		// router.push("/auth/login");
		window.open(`https://demo.bluecom.ai?type=demo`, "_blank");
	}
	// const [isBannerVisible, setIsBannerVisible] = React.useState(true);
	const handleBannerClose = () => {
		dispatch(setBannerVisible(false));
	};

	// useEffect(() => {
	// 	if (isMobile) {
	// 		dispatch(setBannerVisible(false));
	// 	}
	// }, []);

	if (!isBannerVisible) return null;
	return (
		<Box
			sx={{
				display: { md: "flex", xs: "none" },
				justifyContent: "center",
				// background: "rgba(233, 112, 0, 0.1)",
				gap: "1.125rem",
				py: ".5rem",
				position: "relative",

				// opacity: "0.10000000149011612",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					width: "100%",
					height: "60px",
					opacity: "0.10000000149011612",
					background:
						"linear-gradient(270deg, #E9A800 0%, #005DE9 100%)",
				}}
			></Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					px: { md: 2, xs: 1 },
					// gap: "22px",
					// flex: 1,
				}}
			>
				<Typography
					sx={{
						color: " #121212",
						fontFamily: "Plus Jakarta Sans",
						fontSize: { md: "14px", xs: "12px" },

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
					variant="outlined"
					sx={{
						background: "white",
						textTransform: "none",
						border: `1px solid rgba(0, 0, 0, 0.20)`,
						height: { md: "36px", xs: "28px" },
						fontFamily: " Plus Jakarta Sans",
						borderRadius: "8px",
						fontSize: { md: "14px", xs: "10px" },
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "20px",
						ml: { md: 2, xs: 1 },
						color: "rgba(225, 108, 0, 1)",
						// flex: { xs: 0.35, md: 1 },

						// width: "100%",
						mr: { md: 2, xs: 0 },
						px: {
							xs: 1,
							sm: 2,
						},
						"&:hover": {
							// background: "white",
							background: "rgba(225, 108, 0, 1)",
							border: "1px solid rgba(225, 108, 0, 1)",

							// background: (theme) => theme.palette.primary.main,
							color: "white",
							"& .schedule-icon path": {
								fill: "white",
							},
							"& .arrow-icon path": {
								stroke: "white",
							},
						},
					}}
					startIcon={<ScheduleIcon />}
					endIcon={<ArrowIcon />}
					onClick={handleClickButton}
				>
					Product Tour
				</Button>
			</Box>

			{/* <StarThin /> */}
			<Box
				sx={{
					position: "absolute",
					right: { md: "2rem", xs: "1rem" },

					top: "0.8rem",
					"&:hover": {
						cursor: "pointer",
					},
					display: {
						xs: "none",
						md: "block",
					},
				}}
				onClick={handleBannerClose}
			>
				<MdClose
					style={{
						width: "24px",
						height: "24px",
						color: "#4F44E0",
					}}
				/>
			</Box>
		</Box>
	);
}

export const ScheduleIcon = ({}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			className="schedule-icon"
		>
			<path
				d="M7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13ZM6.25 9.131L9.447 7L6.25 4.869V9.131ZM6.416 3.777L10.314 6.376C10.4167 6.44449 10.5009 6.53728 10.5592 6.64614C10.6174 6.75499 10.6479 6.87654 10.6479 7C10.6479 7.12346 10.6174 7.24501 10.5592 7.35386C10.5009 7.46272 10.4167 7.55551 10.314 7.624L6.416 10.223C6.30305 10.2983 6.17179 10.3415 6.0362 10.3481C5.90062 10.3546 5.7658 10.3243 5.64612 10.2602C5.52644 10.1962 5.42638 10.1008 5.35662 9.98438C5.28686 9.86794 5.25001 9.73474 5.25 9.599V4.4C5.25001 4.26426 5.28686 4.13106 5.35662 4.01462C5.42638 3.89817 5.52644 3.80284 5.64612 3.73879C5.7658 3.67474 5.90062 3.64438 6.0362 3.65093C6.17179 3.65748 6.30305 3.70071 6.416 3.776V3.777Z"
				fill="#E16C00"
			/>
		</svg>
	);
};

export const ArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			className="arrow-icon"
		>
			<path
				d="M8.5 4L13 8.5L8.5 13M12.375 8.5L3.25 8.5"
				stroke="#E16C00"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
