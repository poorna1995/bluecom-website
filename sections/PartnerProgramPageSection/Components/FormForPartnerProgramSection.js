import { Box, Typography } from "@mui/material";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import TextInput from "components/Common/Inputs/TextInput";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import ThankYouPageSection from "sections/ContactUsPageSections/ThankYouPageSection";
import appFetch from "utils/appFetch";
import validator from "validator";
export default function FormForPartnerProgramSection({
  pagetitle,
  desc,
  info,
  button,
}) {
  const { enqueueSnackbar } = useSnackbar();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const containerStyle = {
    maxWidth: "100%",
    color: "#0000000",
    fontSize: "16px",
    fontWeight: "600",
    maxHeight: "100px",
  };

  const handleSubmit = (e) => {
    const URL = "https://api.bluecom.ai/api/enquiry/contactUs";
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_code: countryCode,
      company_name: companyName,
      job_title: jobTitle,
      message: "Partner Program Enquiry",
    };
    setIsLoading(true);
    appFetch(URL, data)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.status === "success") {
          enqueueSnackbar("Enquiry Submitted Successfully", {
            variant: "success",
          });
          setSuccess(true);
          resetForm();
        }
      })

      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      });
  };

  // valid phone number
  const validatePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (value && !validator.isMobilePhone(value)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  };

  // validate email
  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validator.isEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const disableButton =
    !firstName || !lastName || !email || !companyName || !jobTitle;

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountryCode("");
    setCompanyName("");
    setJobTitle("");
    setMessage("");
  };

  return (
    <>
      {!success && (
        <BaseCard
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: "1px solid #E5E5E5",
            // borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: ["16px", "20px"],
              paddingRight: ["16px", "20px"],
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: ["column", "row"],
                gap: ["8px", "20px"],
              }}
            >
              <TextInput
                title="First Name"
                required={true}
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                title="Last Name"
                required={true}
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <TextInput
              title="Work Email"
              required={true}
              placeholder="Enter Work Email"
              value={email}
              error={emailError}
              helperText={emailError}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              containerStyles={{ maxWidth: "100%" }}
            />

            <TextInput
              title="Company Name"
              required={true}
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              containerStyles={{ maxWidth: "100%" }}
            />
            <TextInput
              title="Job Title"
              required={true}
              placeholder="Enter Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              containerStyles={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "left",
              padding: "20px",
            }}
          >
            <PrimaryButton
              sx={{
                // width: "150px",

                // fontSize: ["13px", "16px"],
                fontWeight: "600",
                // border: "1px solid #4F44E0",

                height: { md: "52px" },
                fontSize: { md: "16px !important" },
                px: "20px !important",
              }}
              onClick={() => {
                handleSubmit();
              }}
              loading={isLoading}
              disabled={disableButton || isLoading}
            >
              {button ?? `Submit`}
            </PrimaryButton>
          </Box>
        </BaseCard>
      )}
      {success && <ThankYouPageSection />}
    </>
  );
}
