import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { useRouter } from "next/router";
import { Box, Chip, ListItemIcon, Typography } from "@mui/material";

import DrawerHeaderDropdownIcon from "components/Common/Icons/DrawerHeaderDropdownIcon";

import RightArrowIcon from "components/Common/Icons/RightArrowIcon";
import FlashFreeChip from "sections/CalculatorPageSection/components/FlashFreeChip";
import FlashIcon from "sections/CalculatorPageSection/components/Icons/FlashIcon";
import ProductManagementIcon from "components/Common/Icons/HeaderIcons/FeatureIcons/ProductManagementIcon";
import InventoryManagementIcon from "components/Common/Icons/HeaderIcons/FeatureIcons/InventoryManagementIcon";
import POIcon from "components/Common/Icons/HeaderIcons/FeatureIcons/POIcon";
import VendorManagement from "components/Common/Icons/HeaderIcons/FeatureIcons/VendorManagement";
import WarehouseManagementIcon from "components/Common/Icons/HeaderIcons/FeatureIcons/WarehouseManagementIcon";
const newDate = new Date();
const getTimeinMiliseconds = newDate.getTime();

export const menuItems = [
	// {
	// 	name: "Home",
	// 	id: "dashboard-button",
	// 	menuId: "dashboard-menu",
	// 	route: "/",
	// 	// icon: <DashboardIcon />,
	// },
	// {
	//   name: "Features",
	//   id: "features-button",
	//   menuId: "calculator-menu",
	//   route: "/features",
	//   items: [
	//     {
	//       startIcon: <ProductManagementIcon />,
	//       name: "Product Management",
	//       route: "/features/manage-product",
	//     },
	//     {
	//       startIcon: <InventoryManagementIcon />,
	//       name: "Inventory Management",
	//       route: "/features/track-inventory",
	//     },
	//     // {
	//     //   startIcon: <POIcon />,
	//     //   name: "Purchase Order",
	//     //   route: "/features/manage-product",
	//     // },
	//     {
	//       startIcon: <VendorManagement />,
	//       name: "Vendor Management",
	//       route: "/features/vendor-management",
	//     },
	//     {
	//       startIcon: <WarehouseManagementIcon />,
	//       name: "Warehouse Management",
	//       route: "/features/multi-location",
	//     },
	//   ],
	// },
	{
		name: "Pricing",
		id: "pricing-button",
		menuId: "pricing-menu",
		// icon: <ForecastIcon />,
		route: "/pricing",
	},
	{
		name: "Blogs",
		id: "blog-button",
		menuId: "blog-menu",
		// icon: <ForecastIcon />,
		route: "/blogs",
	},
	{
		name: "Tools",
		id: "calculator-button",
		menuId: "calculator-menu",
		route: "/tools",
		endIcon: (
			<FlashFreeChip label={"FREE"} padding={"0"} fontSize={"13px"} />
		),
		items: [
			{
				name: "Amazon FBA Calculator",
				route: "/tools/amazon-fba",
				id: "amazon-calculator",
			},
			{
				name: "Reorder Quantity Calculator",
				route: "/tools/reorder-quantity",
				id: "roq-calculator",
			},
		],
	},
	{
		name: "Partner With us",
		id: "partner-with-us-button",
		menuId: "partner-with-us-menu",
		route: "/partner-program",
	},
	// {
	//   name: "Product",
	//   id: "product-button",
	//   menuId: "product-menu",
	//   route: "/app/products",
	//   icon: <ProductIcon />,
	//   items: [
	//     { name: "List Products", route: "/app/products" },
	//     {
	//       name: "Create Product",
	//       route: "/app/products/create",
	//       // route: `/onboarding/products/${getTimeinMiliseconds}?step=general-info&id=0`,
	//     },
	//     { name: "Publish Products", route: "/app/products/publish" },
	//   ],
	// },

	//   {
	//     name: "Pricing",
	//     id: "pricing-button",
	//     menuId: "pricing-menu",
	//     icon: <ForecastIcon />,
	//     route: "/pricing",
	//   },
	// {
	// 	name: "Setting",
	// 	id: "setting-button",
	// 	menuId: "setting-menu",
	// 	route: "/settings",
	// },
	// {
	// 	name: "Setting",
	// 	id: "setting-button",
	// 	menuId: "setting-menu",
	// 	route: "/settings",
	// },
];

function NewHeaderForDrawer() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
	const router = useRouter();

	const handleClick = (event, menuItem) => {
		if (menuItem.items) {
			setAnchorEl(event.currentTarget);
		} else {
			router.push(menuItem.route);
		}
		setSelectedMenuItem(menuItem);
	};
	const handleHover = (event, menuItem) => {
		if (menuItem.items) {
			setAnchorEl(event.currentTarget);
		} else {
			// router.push(menuItem.route);
		}
		setSelectedMenuItem(menuItem);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (route) => {
		router.push(route);
		handleClose();
	};
	// console.log({ router: router });
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
		<Box
			sx={{
				display: "flex",
				flexDirection: ["column", "column", "row"],
				// justifyContent: "center",

				paddingLeft: "30px",
				flex: 1,
			}}
			onMouseLeave={handleClose}
		>
			{menuItems.map((menuItem) => (
				<React.Fragment key={menuItem.id}>
					<Button
						title="Home"
						id={menuItem.id}
						aria-controls={anchorEl ? menuItem.menuId : undefined}
						aria-haspopup={menuItem.items ? "true" : undefined}
						aria-expanded={anchorEl ? "true" : undefined}
						disableRipple
						onClick={(event) => handleClick(event, menuItem)}
						onMouseEnter={(event) => handleHover(event, menuItem)}
						sx={{
							textTransform: "capitalize",
							borderRadius: "0px",
							transition: ".menu 5s ease-in-out ",
							textAlign: {
								sm: "left",
								md: "center",
							},
							//   overflow: "scroll",

							// backgroundColor:
							// 	// selectedMenuItem === menuItem &&
							// 	isLinkActive(menuItem.route)
							// 		? "#1570EF"
							// 		: undefined,
							// backgroundColor:
							// 	// selectedMenuItem === menuItem &&
							// 	isLinkActive(menuItem.route)
							// 		? "#1570EF"
							// 		: undefined,

							// color:
							// 	// selectedMenuItem === menuItem &&
							// 	isLinkActive(menuItem.route)
							// 		? "#fff"
							// 		: "#344054",
							borderBottom: isLinkActive(menuItem)
								? "3px solid #4F44E0"
								: " 3px solid transparent",
							px: 2,
							// pb: 3.125,
							pb: {
								xs: 1,
								sm: 1,
								md: 3.125,
								lg: 3.125,
								xl: 3.125,
							},
							// pt: 3.125,
							pt: {
								xs: 1,
								sm: 1,
								md: 3.125,
								lg: 3.125,
								xl: 3.125,
							},
							// mr: 2.5,

							// "&:hover": {
							// 	backgroundColor:
							// 		// selectedMenuItem === menuItem &&
							// 		isLinkActive(menuItem.route)
							// 			? "#1570EF"
							// 			: undefined,
							// "&:hover": {
							// 	backgroundColor:
							// 		// selectedMenuItem === menuItem &&
							// 		isLinkActive(menuItem.route)
							// 			? "#1570EF"
							// 			: undefined,

							// 	color:
							// 		// selectedMenuItem === menuItem &&
							// 		isLinkActive(menuItem.route)
							// 			? "#fff"
							// 			: "#344054",
							// },
							color:
								// selectedMenuItem === menuItem &&
								isLinkActive(menuItem) ? "#4F44E0" : "#222",

							"&:hover": {
								backgroundColor: "transparent",
								borderBottom: "3px solid #4F44E0",
							},

							"& svg path": {
								stroke: isLinkActive(menuItem) && "#4F44E0",
							},
						}}
						endIcon={
							//   menuItem.endIcon &&
							menuItem.items &&
							menuItem.items.length > 0 && (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "8px",
									}}
								>
									<DrawerHeaderDropdownIcon />
									{menuItem.endIcon && menuItem.endIcon}
								</div>
							)
						}
						// 	menuItem.items && menuItem.items.length > 0 && (
						// 		<DrawerHeaderDropdownIcon />
						// 	)
						// )}
						startIcon={menuItem.icon && menuItem.icon}
					>
						<Typography
							sx={{
								// fontSize: { xs: "12px", sm: "14px", md: "18px" },
								fontSize: {
									xs: "14px",
									sm: "14px",
									md: "18px",
									lg: "18px",
									xl: "18px",
								},
								fontWeight: "700",
							}}
						>
							{menuItem.name}
						</Typography>
					</Button>

					{menuItem.items && (
						<Menu
							className="menu"
							id={menuItem.menuId}
							MenuListProps={{
								"aria-labelledby": menuItem.id,
							}}
							anchorEl={anchorEl}
							open={Boolean(
								anchorEl && anchorEl.id === menuItem.id,
							)}
							onClose={handleClose}
							onMouseLeave={handleClose}
							TransitionComponent={Fade}
							PaperProps={{
								sx: {
									boxShadow:
										"rgba(0, 0, 0, 0.08) 0px 3px 10px !important",
								},
							}}
						>
							{menuItem.items.map((item, index) => (
								<MenuItem
									key={index}
									onClick={() =>
										handleMenuItemClick(item.route)
									}

									// sx={{
									// 	background:
									// 		isLinkActive(item.route) &&
									// 		"yellow",
									// }}
								>
									<ListItemIcon
										sx={{
											mr: item.startIcon ? 0 : -2,
											// mr: -1,
											"& svg path": {
												fill: (theme) =>
													isMenuActive(item) &&
													theme.palette.primary.main,

												stroke: (theme) =>
													isMenuActive(item) &&
													theme.palette.primary.main,
											},
										}}
									>
										{item.startIcon || <RightArrowIcon />}
										{/* <RightArrowIcon /> */}
									</ListItemIcon>
									<Typography
										sx={{
											marginY: "6px",

											fontSize: "16px",
											// fontSize: {
											//   xs: "12px",
											//   sm: "12px",
											//   md: "16px",
											//   lg: "16px",
											//   xl: "16px",
											// },
											fontWeight: "600",
											color: "#222",

											"&:hover": {
												color: "#4F44E0",
											},
											color: (theme) =>
												isMenuActive(item) &&
												theme.palette.primary.main,
										}}
									>
										{item.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					)}
				</React.Fragment>
			))}
			<div style={{ flex: 1 }} />
		</Box>
	);
}

export default NewHeaderForDrawer;
