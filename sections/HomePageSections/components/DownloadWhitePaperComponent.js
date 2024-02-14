import { Box, CircularProgress } from "@mui/material";
import AppImage from "components/Common/AppImage";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import TextInput from "components/Common/Inputs/TextInput";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import Curves from "public/images/DownloadWhitePaper/curves.svg";
import BluecomLogo from "components/Common/Icons/BluecomLogo";
import BaseDialog from "components/Common/Dialog";
import { useState } from "react";
// import whitepaperPdf from "assets/pdf/Bluecom-Whitepaper.pdf";
import appFetch from "utils/appFetch";
import PageLoader from "components/Common/LoadingIndicators/PageLoader";
import { enqueueSnackbar } from "notistack";
import SentSuccessDialog from "./SentSuccessDialog";

export default function DownloadWhitePaperComponent({
	openDialog,
	handleDialogClose,
}) {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
	const handleSuccessDialogClose = () => {
		setOpenSuccessDialog(false);
	};
	const handleSuccessDialogOpen = () => {
		setOpenSuccessDialog(true);
	};
	const disableButton =
		email === "" || !email.includes("@") || !email.includes(".");
	const handleDownloadButtonClick = (e) => {
		setIsLoading(true);
		e.preventDefault();
		// const URL = `https://notification.bluecom.ai/api/sendEmail`;
		// const URL = `https://notification.bluecom.ai/api/sendWhitePaper`;
		const URL = `https://api.bluecom.ai/api/marketing/downloadWhitepaper`;
		const data = {
			emails: email,
			// subject: "Bluecom White Paper",
			// description: `<p>Thank you for your interest in Bluecom.ai. Please find the attached white paper.</p>`,
			// file: whitepaperPdf,
		};
		appFetch(URL, data)
			.then((json) => {
				setIsLoading(false);
				console.log(json);
				if (json.status === "success") {
					enqueueSnackbar("White paper Downloaded!", {
						variant: "success",
					});
					setEmail("");
					handleDialogClose();
					handleSuccessDialogOpen();
					window.open("/assets/bluecom-whitepaper.pdf", "_blank");
				}
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<>
			{/* {isLoading && <PageLoader />} */}
			<SentSuccessDialog
				open={openSuccessDialog}
				handleClose={handleSuccessDialogClose}
			/>
			<BaseDialog open={openDialog} handleClose={handleDialogClose}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "700px",
						borderRadius: "16px 16px",
						boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.1)",
					}}
				>
					<Box
						sx={{
							// backgroundImage: `url("images/DownloadWhitePaper/topbackground.svg")`,
							// backgroundRepeat: "no-repeat",
							// backgroundPosition: "center",
							// backgroundSize: "100%",
							// backgroundPosition: "50% 10%",
							backgroundColor: "#4F44E0",
							height: "219px",
							borderRadius: " 16px 16px 0px 0px",
							boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.1)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{/* <AppImage
            src={Curves}
            style={{
              height: "100%",
              width: "100%",
            }}
          /> */}
						<Box
							sx={{
								background: "#fff",
								borderRadius: "10px",
								padding: "37px",
								width: "fit-content",
								// transform: "translate(280px, -160px)",
							}}
						>
							<BluecomLogo />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							px: "100px",
							py: "36px",
							borderRadius: "0px 0px 16px 16px",
						}}
					>
						<SectionTitleText
							sx={{
								color: "#0E0B3D",
								fontSize: "24px",
								fontWeight: "700",
							}}
						>
							Download White Paper
						</SectionTitleText>
						<DescriptionText
							sx={{
								mt: "16px",
								textAlign: "center",
								color: "#0E0B3D",
								fontSize: "14px",
								fontWeight: "600",
								lineHeight: "24px",
							}}
						>
							All-inclusive platform for Product Information,
							Inventory, Purchase Order, Vendor, Warehouse
							Management
						</DescriptionText>
						<form
							onSubmit={handleDownloadButtonClick}
							style={{
								width: "100%",
							}}
						>
							<TextInput
								type="email"
								title={"Enter Email"}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email address"
								sx={{ mb: "16px" }}
								inputStyles={{ fontSize: "16px" }}
								required={true}
								labelStyles={{
									fontWeight: "600",
									fontSize: "16px",
								}}
							/>
							<PrimaryButton
								type={"submit"}
								disabled={disableButton || isLoading}
								sx={{
									width: "100%",
									"& a": {
										textDecoration: "none",
										color: "inherit",
									},
								}}
							>
								{isLoading ? (
									<CircularProgress size={24} thickness={6} />
								) : (
									"Download Now"
								)}
								{/* Download Now */}
							</PrimaryButton>
						</form>
					</Box>
				</Box>
			</BaseDialog>
		</>
	);
}
