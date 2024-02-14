import { Box, Typography } from "@mui/material";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import TextInput from "components/Common/Inputs/TextInput";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import appFetch from "utils/appFetch";
import validator from "validator";
import ThankYouPageSection from "./ThankYouPageSection";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";

export default function FormSection({ pagetitle, desc, info, button }) {
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
      message: message,
    };
    appFetch(URL, data)
      .then((res) => {
        console.log(res);
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
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !countryCode ||
    !companyName ||
    !jobTitle;

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
            border: "1px solid #E5E5E5",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F9FAFF",
              padding: "20px",
              borderBottom: "1px solid #E5E5E5",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#222222",
              }}
            >
              {pagetitle ?? `Contact Us`}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#313131",
              }}
            >
              {desc}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#313131",
              }}
            >
              {info}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              paddingRight: "20px",
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
              onChange={validateEmail}
              containerStyles={{ maxWidth: "100%" }}
            />

            <SectionTitleText
              sx={{
                marginTop: "24px",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "-24px",
                color: "#222222",
              }}
            >
              Phone Number *
            </SectionTitleText>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "21px",
                alignItems: "center",
              }}
            >
              <FormSelectInput
                containerStyles={{
                  ...containerStyle,
                  width: "200px",
                }}
                required
                //   title="Phone Number"
                placeholder="Select"
                options={[
                  { value: "+91", label: "+91 India" },
                  { value: "+1", label: "+1 USA" },
                  { value: "+44", label: "+44 UK" },
                  { value: "+62", label: "+62 Indonesia" },
                  { value: "+39", label: "+39 Italy" },
                  { value: "+81", label: "+81 Japan" },
                  { value: "+60", label: "+60 Malaysia" },
                  { value: "+52", label: "+52 Mexico" },
                ]}
                value={countryCode}
                setValue={setCountryCode}
                onChange={(e) => setCountryCode(e)}
              />

              <TextInput
                placeholder="Enter phone number"
                //   title="Phone Number"
                error={phoneError}
                helperText={phoneError}
                value={phone}
                onChange={validatePhone}
              />
            </Box>

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
            <TextInput
              title="Message"
              multiline
              maxRows={4}
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              containerStyles={{ maxWidth: "100%" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#313131",
              paddingLeft: "20px",
              paddingTop: "10px",
            }}
          >
            By making the payment you agree to bluecom.ai{" "}
            <span
              style={{
                color: "#4F44E0",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                router.push("/legal/terms-and-conditions");
              }}
            >
              Terms & Conditions
            </span>{" "}
            and
            <br />
            <span
              style={{
                color: "#4F44E0",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                router.push("/legal/privacy-policy");
              }}
            >
              Privacy Policy.
            </span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              padding: "20px",
            }}
          >
            <PrimaryButton
              sx={{
                width: "150px",
              }}
              onClick={() => {
                handleSubmit();
              }}
              disabled={disableButton}
            >
              {button ?? `Contact Us`}
            </PrimaryButton>
          </Box>
        </BaseCard>
      )}
      {success && <ThankYouPageSection />}
    </>
  );
}
