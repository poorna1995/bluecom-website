import {
	AppBar,
	Avatar,
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
// import TextField from "@mui/material/TextField";
import AppLink from "components/Common/AppLink";
// import linksData from "constant_data/navigation/linksData";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AppImage from "components/Common/AppImage";
import logo from "public/images/01header/bluecom-logo-blue.svg";
import NewHeaderForDrawer from "./NewHeaderForDrawer";
import NotificationIcon from "components/Common/Icons/HeaderIcons/NotificationIcon";
import SettingIcon from "components/Common/Icons/HeaderIcons/SettingIcon";
import OutlinedButton from "components/Common/Buttons/OutlinedButton";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import DownloadWhitePaperComponent from "sections/HomePageSections/components/DownloadWhitePaperComponent";
import { GetStarted } from "components/Common/Buttons/GetStarted";
import { Login } from "components/Common/Buttons/Login";
import { useTheme } from "@emotion/react";
import MenuIcon from "components/Common/Icons/HeaderIcons/MenuIcon";
import Link from "next/link";
import BaseCard from "components/Common/Cards/BaseCard";
import BaseDialog from "components/Common/Dialog";
import RightDrawer from "components/Common/Drawer/RightDrawer";
import BottomDrawer from "components/Common/Drawer/BottomDrawer";
import { MdClose } from "react-icons/md";
import { ScheduleDemo } from "components/Common/Buttons/ScheduleDemo";
import BannerBookDemoComponent from "sections/HomePageSections/components/BannerBookDemoComponent";
import UserIcon from "components/Common/Icons/UserIcon";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import MobileMenuNavigation from "./MobileMenuNavigation";

const AppHeader = ({ appHeaderBg, showLogo, isBannerVisible, ...props }) => {
	// console.log({ popupState, isOpen: popupState.isOpen });
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const pathname = router.asPath;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	function handleLogin(link) {
		// router.push("/auth/login");
		window.open(`https://dev.bluecom.ai/auth/${link}`, "_blank");
	}

	// const handleFetchProductPublishStatus = () => {
	// 	const URL = PRODUCT.FETCH_PUBLISH_PRODUCT_STATUS;
	// 	const data = {
	// 		task_id: taskID,
	// 	};
	// 	dispatch(fetchPublishableProductsStatusStart({ URL, data }));
	// };
	// useEffect(() => {
	// 	if (taskID) {
	// 		handleFetchProductPublishStatus();
	// 	}
	// }, [taskID]);
	const toolbarStyle = {
		maxHeight: "80px",
		minHeight: "80px ",
	};

	const handleClickOfSetting = () => {
		router.push("/settings");
	};

	const handleNotificationIconClick = () => {
		console.log("notification icon clicked");
	};

	const [openDialog, setOpenDialog] = React.useState(false);
	const handleDialogOpen = () => {
		setOpenDialog(true);
	};
	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	const handleDownloadWhitePaper = () => {
		handleDialogOpen();
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isSmallLaptop = useMediaQuery(theme.breakpoints.down("lg"));
	// const isMobile = useMediaQuery(theme.breakpoints.down("xl"));
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleDrawerOpen = () => {
		setOpenDrawer(true);
	};

	const handleDrawerClose = () => {
		setOpenDrawer(false);
	};

	return (
		<>
			<AppBar
				elevation={0}
				color="default"
				sx={{
					borderBottom: "1px solid  #0000001A",
					// height: "81px",
					zIndex: 2000,
				}}
			>
				<BannerBookDemoComponent />

				<Toolbar
					sx={{
						height: { md: "80px", sm: "64px", xs: "64px" },
						backgroundColor: "white",
						"& .hide-on-mobile": {
							display: { xs: "none", sm: "none", md: "flex" },
						},
						"& .hide-on-tablet": {
							display: {
								xs: "none",
								sm: "none",
								md: "none",
								lg: "flex",
							},
						},
						"* .mobile-menu": {
							display: {
								xs: "block",
								sm: "block",
								md: "block",
								lg: "none",
							},
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "space-between",
							height: { md: "80px", sm: "64px", xs: "64px" },
							maxWidth: "1440px",
							margin: "auto",
						}}
					>
						{/* {showLogo && ( */}
						<AppImage
							src={logo}
							// src={newLogo2}

							width={"fit-content"}
							height={22}
							sx={{
								// width: "160px",
								// height: "28px",
								cursor: "pointer",
								ml: { xs: "0px" },
							}}
							onClick={() => router.push("/")}
						/>
						{/* )} */}

						<Box sx={{ flex: "1" }} className="hide-on-tablet">
							<NewHeaderForDrawer />
						</Box>

						{/* <div style={{ flex: 1 }} /> */}
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								// flex: 1,
							}}
							className="hide-on-mobile"
						>
							<Button
								// href="/assets/bluecom-whitepaper.pdf"
								// download
								sx={{
									fontWeight: "700",
									color: "#4F44E0",
									fontSize: "16px",
									// fontSize: {
									//   xs: "12px",
									//   sm: "12px",
									//   md: "12px",
									//   lg: "16px",
									//   xl: "16px",
									// },
									height: "56px",
									textTransform: "capitalize",
									padding: "6px 24px",
									borderRadius: "8px",

									"&:hover": {
										background: "#EDECFC",
										// textDecoration: "underline",
									},
								}}
								className="hide-on-tablet"
								startIcon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
									>
										<path
											d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25M5.25 7.5L9 11.25M9 11.25L12.75 7.5M9 11.25V2.25"
											stroke="#4F44E0"
											strokeWidth="1.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								}
								// disableRipple
								// target="_blank"
								onClick={() => handleDownloadWhitePaper()}
							>
								Download White Paper
							</Button>
							<ScheduleDemo
								ml={"1rem"}
								widthInput={"159.2px"}
								heightInput={"52px"}
							/>

							<GetStarted
								widthInput={"152px"}
								heightInput={"52px"}
								fontSize={"16px"}
								fontWeight={"700"}
								padding={"6px 24px"}
								mt={"0px"}
								title={`Login/Sign Up`}
							/>
						</Box>

						<div className="mobile-menu">
							{openDrawer ? (
								<IconButton onClick={handleDrawerClose}>
									<MdClose />
								</IconButton>
							) : (
								<IconButton onClick={handleDrawerOpen}>
									{<MenuIcon />}
								</IconButton>
							)}
						</div>
					</Box>
				</Toolbar>
			</AppBar>

			<DownloadWhitePaperComponent
				openDialog={openDialog}
				handleDialogClose={handleDialogClose}
			/>

			<MobileMenuNavigation
				openDrawer={openDrawer}
				handleDrawerClose={handleDrawerClose}
				handleDownloadWhitePaper={handleDownloadWhitePaper}
				isBannerVisible={isBannerVisible}
			/>
		</>
	);
};

export default AppHeader;
