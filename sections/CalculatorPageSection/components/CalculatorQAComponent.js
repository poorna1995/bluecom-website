import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Collapse,
	Typography,
} from "@mui/material";
import React from "react";

import { useState } from "react";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { set } from "date-fns";
export default function CalculatorQAComponent() {
	const [itemToOpen, setItemToOpen] = useState(null);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (index) => {
		setItemToOpen(index);
		itemToOpen === index ? setItemToOpen(null) : setItemToOpen(index);
	};
	const handleClose = () => {
		setItemToOpen(null);
	};

	const handleHover = (event, index) => {
		setItemToOpen(index);
		itemToOpen === index ? setItemToOpen(null) : setItemToOpen(index);
	};

	const card = cards.map((card, index) => {
		const clickedItem = itemToOpen === index;
		return (
			<Card
				onClick={() => handleClick(index)}
				key={index}
				sx={{
					maxWidth: 740,
					// border: "1px solid rgba(211,211,211,0.1)",
					mx: "auto",
					// backgroundColor: clickedItem ? "#4f44e01a" : "#fff",
					mb: "1rem",
					borderRadius: "10px",
					border: clickedItem
						? "none"
						: "1px solid rgba(0, 0, 0, 0.10)",
					boxShadow: "none",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: clickedItem
							? "rgba(79, 68, 224, 0.10)"
							: "rgba(255, 255, 255, 0.05)",
						px: 3,
						py: 2,
					}}
				>
					<Typography
						sx={{
							color: "#151515",
							// font-feature-settings: 'clig' off, 'liga' off;
							fontFamily: "Plus Jakarta Sans",
							fontSize: "24px",
							fontStyle: "normal",
							fontWeight: "700",
							lineHeight: " normal",
						}}
					>
						{card.title}
					</Typography>
					<IconButton
						onClick={() => handleClick(index)}
						// onMouseEnter={(event) => handleHover(event, index)}
						// onMouseLeave={handleClose}
						aria-label="expand"
						size="medium"
						color="primary"
					>
						{clickedItem ? <CloseIcon /> : <AddIcon />}
					</IconButton>
				</Box>
				{/* <CardHeader
					title={card.title}
					action={
					}
				/> */}
				<div
					style={{
						backgroundColor: clickedItem
							? "rgba(79, 68, 224, 0.10)"
							: "rgba(255, 255, 255, 0.05)",
					}}
				>
					<Collapse in={clickedItem} timeout="auto" unmountOnExit>
						<Typography
							sx={{
								color: "#151515",
								fontFamily: "Plus Jakarta Sans",
								fontSize: "18px",
								fontWeight: 500,
								lineHeight: " 32px" /* 177.778% */,
								px: 3,
								pb: 2,
							}}
						>
							{card.content}
						</Typography>
					</Collapse>
				</div>
			</Card>
		);
	});

	return <>{card}</>;
}

const cards = [
	{
		title: "What is Reorder Quantity ?",
		content: `Reorder quantity (also known as reorder point or reorder level) is the minimum quantity to place a new order with suppliers (or) replenish inventory. It is an essential aspect of inventory management for e-commerce businesses to ensure a consistent supply of products without running out of stock. Determining the appropriate reorder quantity requires careful analysis of demand patterns, lead time, and safety stock.`,
	},
	{
		title: "What is Lead Time ?",
		content: `Lead time of a supplier refers to the time it takes for a supplier to fulfill an order from the moment it is placed until the products are delivered or made available for pickup. It is an important consideration in supply chain management anc inventory planning for e-commerce businesses. Understanding and effectively managing supplier lead time is crucial to ensure timely order fulfillment, maintain customer satisfaction, and optimize inventory levels.
  `,
	},
	{
		title: "What is On Hand QTY ?",
		content: `On-hand quantity, also known as inventory quantity or stock level, refers to the total number of units of a product that a business currently has available in its inventory at a given time. It represents the physical count of products on hand that are ready to be sold or used for order fulfillment.
  `,
	},
	{
		title: "What is PO QTY ?",
		content: `It is referred to the prospective inventory that will be received at warehouse/fulfillment center. On PO has promise dates from supplier, understanding the arrival dates of the placed inventory provides greater insights into calculating the total inventory during the period of interest
  `,
	},
	{ title: "What is Demand Profile ?", content: "" },
];
