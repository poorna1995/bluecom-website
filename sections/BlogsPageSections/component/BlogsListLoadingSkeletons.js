import { Grid, Skeleton } from "@mui/material";
import React from "react";

const data = [1, 2, 3, 4, 5, 6];
export default function BlogsListLoadingSkeletons() {
	return (
		<Grid container spacing={4}>
			{data.map((item, index) => {
				return (
					<Grid item md={4} xs={12} key={index}>
						<BlogSkeleton key={index} />
					</Grid>
				);
			})}
		</Grid>
	);
}

const BlogSkeleton = () => {
	return (
		<div>
			<Skeleton
				variant="rounded"
				width="100%"
				height="250px"
				sx={{
					mb: 2,
				}}
			/>
			<Skeleton variant="text" width="100%" height="50px" />
			<Skeleton variant="text" width="100%" height="50px" />
		</div>
	);
};
