import React from "react";
import BlogsListSection from "./BlogsListSection";
import { Box, Container, Divider } from "@mui/material";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import FooterSectionComponent from "sections/HomePageSections/components/FooterSectionComponent";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import { GetStarted } from "components/Common/Buttons/GetStarted";
import { ScheduleDemo } from "components/Common/Buttons/ScheduleDemo";
import EcomJourneyCard from "./component/EcomJourneyCard";
import BannerBookDemoComponent from "sections/HomePageSections/components/BannerBookDemoComponent";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import { useRouter } from "next/router";

export default function BlogsPageSections({}) {
	const [selectedCategory, setSelectedCategory] = React.useState("All"); // ["All", "General", "Inventory Management"
	const router = useRouter();
	const { category } = router.query;
	const categoryWithLabel = {
		label: category,
		value: category,
	};

	const handleSelectCategory = (e) => {
		setSelectedCategory(e.value);
		router.push(`/blogs?category=${e.value}`);
	};
	return (
		<Box>
			{/* <BannerBookDemoComponent /> */}
			<Box
				sx={{
					pt: ["0px", "32px"],
					pb: "94px",
					maxWidth: "1440px",
					margin: "auto",
				}}
			>
				<Box
					sx={{
						// maxWidth: "1200px",
						maxWidth: "1440px",
						m: "auto",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
							px: 2,
						}}
					>
						<SectionTitleText
							sx={{
								fontSize: "42px",
								fontWeight: "700",
								p: "36px 0",
								textAlign: "center",
								color: "#151515",
							}}
						>
							Blogs
						</SectionTitleText>
						<div
							style={{
								flex: 1,
							}}
						/>
						<Box
							sx={{
								minWidth: {
									xs: "200px",
									sm: "300px",
									md: "400px",
								},
								maxWidth: {
									xs: "200px",
									sm: "300px",
									md: "400px",
								},
								width: "100%",
							}}
						>
							<FormSelectInput
								// containerStyles={containerStyles}
								noPadding
								options={categoriesOptions}
								value={category ? categoryWithLabel : ""}
								placeholder="Select Category"
								onChange={handleSelectCategory}
							/>
						</Box>
					</Box>
					<Divider
						sx={{ mb: ["24px", "59px"], borderColor: "#DADADA", }}
					/>

					<BlogsListSection />
				</Box>
			</Box>
		</Box>
	);
}

const categories = [
	"All",
	"Barcode",
	"General",
	"Forecasting",
	"Reorder Quantity",
	"Inventory Management",
	"Product Management",
	"Replenishment",
	"Amazon",
	"Multi- Channel Ecommerce",
	"Drop shipping",
];
const categoriesOptions = categories.map((category) => ({
	value: category,
	label: category,
}));

const containerStyles = {
	width: "100%",
	minWidth: "200px",
};
