import { ExpandMore } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import {
	Box,
	Button,
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { GetStarted } from "components/Common/Buttons/GetStarted";
import { ScheduleDemo } from "components/Common/Buttons/ScheduleDemo";
import BottomDrawer from "components/Common/Drawer/BottomDrawer";
import React from "react";
import { menuItems } from "./NewHeaderForDrawer";
import { useRouter } from "next/router";
import { MdChevronRight } from "react-icons/md";

const styles = {
	primaryTextStyles: {
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans, sans-serif",
		color: "#151515",
		fontSize: "16px",
	},
};
export default function MobileMenuNavigation({
	openDrawer,
	handleDrawerClose,
	handleDownloadWhitePaper,
	isBannerVisible,
}) {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);

	const handleClickOpenSubMenu = () => {
		setOpen(!open);
	};
	const handleNavigation = (route) => {
		router.push(route);
		handleDrawerClose();
	};
	const isLinkActive = (menuItem = "") => {
		const route = menuItem.route;
		const basePath = route.split("?")[0];
		// console.log({ basePath, menuItem });
		const isHome = menuItem.name === "Home";

		if (Array.isArray(menuItem.items) && menuItem.items.length > 0) {
			const isActive =
				basePath !== "" && router.asPath.startsWith(menuItem.route);
			return isActive;
		}
		const isActive = basePath !== "" && router.asPath === basePath;
		// router.asPath.startsWith(basePath)
		return isActive;
		// return router.asPath === route;
	};
	const isMenuActive = (item) => {
		const route = item.route;
		const basePath = route.split("?")[0];
		// console.log({ basePath, item });
		const isActive =
			// basePath
			//  !== "" && router.asPath.startsWith(basePath);

			basePath === router.asPath ||
			basePath === router.asPath.split("?")[0];
		return isActive;
		// return router.asPath === route;
	};

	return (
		<div>
			{" "}
			<BottomDrawer
				anchor="top"
				openDrawer={openDrawer}
				handleClose={handleDrawerClose}
				PaperProps={{
					sx: {
						// alignItems: "center",
						// textAlign: "center",
						// margin: "auto",
						// minHeight: "600px",
						// maxHeight: "600px",
						height: "100%",
						width: "100%",
						// top: "80px",
						border: "none",

						// borderRadius: "0px 0px 20px 20px",
						overflow: "scroll",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minWidth: "300px",
						width: "100%",
						mt: {
							md: isBannerVisible ? "132px" : "80px",
							xs: "64px",
						},
						// px: "8px",
						"& .show-on-tablet": {
							display: {
								xs: "block",
								sm: "block",
								md: "block",
								lg: "none",
							},
							// mt: {
							// 	md: 2,
							// },
						},
						"& .show-on-mobile": {
							display: {
								xs: "block",
								sm: "block",
								md: "none !important",
								lg: "none !important",
							},
						},
					}}
				>
					<List className="show-on-tablet">
						{menuItems.map((item, index) => {
							const { items } = item;
							if (Array.isArray(items) && items.length > 0) {
								return (
									<React.Fragment key={index}>
										<ListItemButton
											key={index}
											onClick={handleClickOpenSubMenu}
											sx={{
												background: isLinkActive(item)
													? "rgba(79, 68, 224, 0.10)"
													: "",
												borderRadius: "8px",
												ml: 1,
											}}
										>
											<ListItemText
												primary={item.name}
												primaryTypographyProps={{
													...styles.primaryTextStyles,
													color: isLinkActive(item)
														? "#4F44E0"
														: "#222",
												}}
											/>
											{open ? (
												<ExpandLess />
											) : (
												<ExpandMore />
											)}
										</ListItemButton>
										<Collapse
											in={open}
											timeout="auto"
											unmountOnExit
										>
											<List
												component="div"
												disablePadding
											>
												{items.map((subItem, id) => (
													<ListItemButton
														key={id}
														onClick={() =>
															handleNavigation(
																subItem.route,
															)
														}
														sx={{
															pl: 4,
															background:
																isMenuActive(
																	subItem,
																)
																	? "rgba(79, 68, 224, 0.10)"
																	: "",

															borderRadius: "8px",
															ml: 1,
														}}
													>
														<ListItemIcon>
															<MdChevronRight
																fontSize={
																	"18px"
																}
																color={
																	"#151515"
																}
																fontWeight={600}
															/>
														</ListItemIcon>
														<ListItemText
															primary={
																subItem.name
															}
															primaryTypographyProps={{
																...styles.primaryTextStyles,
																color: isMenuActive(
																	subItem,
																)
																	? "#4F44E0"
																	: "#222",
															}}
														/>
													</ListItemButton>
												))}
											</List>
										</Collapse>
									</React.Fragment>
								);
							}
							return (
								<ListItemButton
									key={index}
									onClick={() => handleNavigation(item.route)}
									sx={{
										background: isLinkActive(item)
											? "rgba(79, 68, 224, 0.10)"
											: "",
										borderRadius: "8px",
										ml: 1,
									}}
								>
									<ListItemText
										primary={item.name}
										primaryTypographyProps={{
											...styles.primaryTextStyles,
											color: isLinkActive(item)
												? "#4F44E0"
												: "#222",
										}}
									/>
								</ListItemButton>
							);
						})}
					</List>
					<Box
						sx={{
							px: "16px",
							display: "flex",
							flexDirection: "column",
							// gap: 1,
							maxWidth: "212px",
							ml: 1,
						}}
						className="show-on-tablet"
					>
						<Button
							// href="/assets/bluecom-whitepaper.pdf"
							// download
							sx={{
								fontWeight: "700",
								color: "#4F44E0",
								fontSize: "16px",
								// mr: "28px",
								textTransform: "capitalize",
								"&:hover": {
									background: "transparent",
								},
								px: 0,
								maxWidth: "100%",
							}}
							// disableRipple
							// target="_blank"
							onClick={() => handleDownloadWhitePaper()}
						>
							Download White Paper
						</Button>
					</Box>
					<Box
						sx={{
							px: "16px",
							display: "flex !important",
							// flexDirection: "column",
							gap: 1,

							justifyContent: "center",
							flexDirection: {
								// xs: "column",
							},
							width: "100%",
							position: "fixed",
							bottom: 0,
							left: 0,
							right: 0,
							borderTop: "1px solid rgba(17, 17, 17, 0.10)",
							py: 2,
							// maxWidth: "212px",
						}}
						className="show-on-mobile"
					>
						<ScheduleDemo
							widthInput={{ xs: "144px", md: "152px" }}
							heightInput={"48px"}
							padding={{ xs: "6px 12px", md: "6px 20px" }}
							fontWeight={"600"}
							// minWidth={"100%"}
							fontSize={{ xs: "14px", md: "16px" }}
							mr={{ xs: 0, md: 2 }}
						/>
						<GetStarted
							// widthInput={"152px"}
							heightInput={"48px"}
							fontSize={{ xs: "14px", md: "16px" }}
							fontWeight={"700"}
							padding={"6px 12px"}
							mt={"0px"}
							title={`Login/Sign Up`}
							mr={{ xs: -2, md: 0 }}
						/>
					</Box>
				</Box>
			</BottomDrawer>
		</div>
	);
}
