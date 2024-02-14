import { Skeleton } from "@mui/material";
import React from "react";

export default function BlogDetailsLoadingSkeletons() {
	return (
		<div>
			<Skeleton variant="text" width="100%" height="60px" />
			<Skeleton variant="text" width="100%" height="60px" />
			<div
				style={{
					marginBottom: "16px",
					marginTop: "16px",
					display: "flex",
					maxWidth: "220px",
					justifyContent: "space-between",
				}}
			>
				<Skeleton variant="circular" width="50px" height="50px" />
				<Skeleton variant="circular" width="50px" height="50px" />
				<Skeleton variant="circular" width="50px" height="50px" />
				<Skeleton variant="circular" width="50px" height="50px" />
			</div>
			<Skeleton
				variant="rounded"
				width="100%"
				height="400px"
				sx={{ mb: 2 }}
			/>

			{[...Array(10)].map((item, index) => {
				return (
					<Skeleton
						key={index}
						variant="text"
						width="100%"
						height="50px"
					/>
				);
			})}
		</div>
	);
}
