import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import StatusChip from "components/Common/Chip/StatusChip";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import ProductLifeCycleManagemntIcon from "public/images/03EcommerceOperationStackSection/01ProductLifeCycleManagement.svg";
import InventoryManagementIcon from "public/images/03EcommerceOperationStackSection/02InventoryManagement.svg";
import PurchaseOrderManagementIcon from "public/images/03EcommerceOperationStackSection/03PurchaseOrderManagement.svg";
import WarehouseManagementIcon from "public/images/03EcommerceOperationStackSection/04WarehouseManagement.svg";
import FullfillManagementIcon from "public/images/03EcommerceOperationStackSection/05FullfillManagement.svg";
import VendorManagementIcon from "public/images/03EcommerceOperationStackSection/06VendorManagement.svg";
import React from "react";

export default function UnlockEfficiencyAndGrowthComponent() {
	const Operations = [
		{
			icon: ProductLifeCycleManagemntIcon,
			title: "Product Information Management",
			description:
				"Accelerate operations using Single Source of Truth, Product Publishing, Cataloging, Product Hierarchy, Bundling, and Sync.",
		},
		{
			icon: InventoryManagementIcon,
			title: "Inventory Management",
			description:
				"Manage variant level inventory across multiple channels, Real-time Inventory Syncing, Stay Ahead with Low Stock Alerts, and achieve seamless Replenishment.",
		},
		{
			icon: PurchaseOrderManagementIcon,
			title: "Purchase Order Management",
			description:
				"Create, Track, and manage complete Life-cycle of PO.  Manage Products, Variants and Bundle Components.    Inform the quantities based on inventory, on PO, and demand signals.  ",
		},
		{
			icon: ProductLifeCycleManagemntIcon,
			title: "Bundles and Kits Management",
			description:
				"Create and manage Bundles/Kits from components (or) products.   Automated Bundle Cost and Inventory Calculations.  Publishing Bundles across multi-channels. ",
		},
		{
			icon: WarehouseManagementIcon,
			title: "Locations  Management",
			description:
				"Source of Truth for  location Management, Effortlessly Add, Modify, and Manage locations for Streamlined Operations.  Visualize inventory across locations.",
		},
		{
			icon: VendorManagementIcon,
			title: "Vendor Management",
			description:
				"Centralize Vendor Contact, Billing, and Location Information. Gain Visibility into Supplied Products and Track Real-time POs requests",
		},
	];
	const OperationsCard = Operations.map((operation, index) => {
		return (
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				key={index}
				sx={
					{
						// mt: "47px"
					}
				}
			>
				<Box
					sx={{
						maxWidth: "100%",
					}}
				>
					<AppImage src={operation.icon} alt={operation.title} />
					<SectionTitleText
						sx={{
							mt: { xs: "0px", md: "34px" },
							// fontSize: ["18px", "24px"],
							fontSize: {
								xs: "18px",
								sm: "18px",
								md: "22px",
								lg: "24px",
								xl: "24px",
							},
							fontWeight: "800",
							fontFamily: "Manrope, sans-serif",
							color: "#151515",
						}}
					>
						{operation.title}
					</SectionTitleText>
					<DescriptionText
						sx={{
							mt: ["12px", "14px"],
							// fontSize: ["16px", "18px"],
							fontSize: {
								xs: "16px",
								sm: "16px",
								md: "16px",
								lg: "18px",
								xl: "18px",
							},
							fontWeight: "600",
							lineHeight: "29px",
							fontFamily: "Manrope, sans-serif",
							color: "#313131",
						}}
					>
						{operation.description}
					</DescriptionText>
				</Box>
			</Grid>
		);
	});

	return (
		<Box
			// maxWidth="100%"
			// overflow={"hidden"}
			// container
			// spacing={6.5}
			sx={{
				padding: "0 0px 64px 0",
				mt: "93px",
				backgroundColor: "#F9FAFF",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: { xs: "1rem", md: "1rem" },
					fontFamily: "Manrope, sans-serif",
					pt: 5,
				}}
			>
				{/* <StatusChip
					label={"Features"}
				/> */}
				{/* <Typography
					sx={{
						color: "#4F44E0",
						// background: "#4F44E01A",
						fontWeight: "700",
						fontSize: ["14px", "16px"],
						p: { xs: "20px", md: "1px" },
						lineHeight: "20px",
					}}
				>
					Features
				</Typography> */}
				<SectionTitleText
					sx={{
						fontFamily: "Manrope, sans-serif",
						// fontSize: ["24px", "37px"],
						fontSize: {
							xs: "24px",
							sm: "24px",
							md: "30px",
							lg: "37px",
							xl: "37px",
						},
						fontWeight: "800",
						color: "#4F44E0",
						lineHeight: "46px",
						textAlign: "center",
						m: { xs: "auto", sm: "auto", md: "0px" },
						pl: { xs: "16px", sm: "16px", md: "0px" },
						pr: { xs: "16px", sm: "16px", md: "0px" },
					}}
				>
					Unlocking Efficiency and Growth
				</SectionTitleText>
				<DescriptionText
					sx={{
						fontSize: ["16px", "18px"],
						fontWeight: "600",
						color: "#000000",
						lineHeight: "29px",
						textAlign: "center",
						fontFamily: "Manrope, sans-serif",
						pl: { xs: "16px", md: "0px" },
						pr: { xs: "16px", md: "0px" },
						m: { xs: "auto", md: "0px" },
					}}
				>
					Streamline and accelerate Your Ecommerce Operations with
					bluecom.
				</DescriptionText>
			</Box>

			<Box
				sx={{
					maxWidth: "1440px",
					margin: "auto",
					p: "16px",
				}}
			>
				<Grid
					// columnGap={5}
					// rowGap={3}
					spacing={4}
					rowSpacing={5}
					container
					sx={{
						// width: "1440px",
						// pl: "5rem",
						// mx: "auto",
						mt: [0, 5],
					}}
				>
					{OperationsCard}
				</Grid>
			</Box>

			<GetStartedAndScheduleDemo
				style={{
					// border: "1px solid",
					width: "100%",
					pt: "3rem",
					justifyContent: "center",
					// pl: "16px",
					// pr: "8px",
				}}
			/>
		</Box>
	);
}
