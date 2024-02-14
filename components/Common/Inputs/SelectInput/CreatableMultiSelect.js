import { InputLabel, useTheme } from "@mui/material";

import React from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function CreatableMultiSelect({
  title,
  options,
  required,
  inputRef,
  labelStyles,
  containerStyles,
  styles,
  ...props
}) {
  const ref = React.createRef();
  const theme = useTheme();

  const customStyles = {
    multiValueRemove: (styles) => ({
      ...styles,
      ":hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    }),
    control: (styles) => ({
      ...styles,
      paddingTop: "5px",
      paddingBottom: "5px",
      borderRadius: "8px",
      ":hover": {
        borderColor: theme.palette.grey[800],
      },
      ":focus-within": {
        borderColor: theme.palette.primary.main,
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
  };
  return (
    <div
      style={{
        paddingTop: props.noMargin ? "" : "24px",
        width: "100%",
        ...containerStyles,
      }}
      ref={inputRef}
    >
      <InputLabel
        style={
          labelStyles
            ? labelStyles
            : {
                color: "#222222",
                // margin: theme.spacing(1),
                marginLeft: 0,
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "-3%",
              }
        }
      >
        {title}
        {required && "*"}
      </InputLabel>
      <CreatableSelect
        styles={{ ...customStyles, ...styles }}
        isMulti
        ref={ref}
        components={animatedComponents}
        options={options}
        // promptTextCreator={(label) => `Add "${label}"`}
        formatCreateLabel={(label) => `Add "${label}"`}
        theme={(th) => ({
          ...th,
          // borderRadius: 0,
          colors: {
            ...th.colors,
            primary: theme.palette.primary.main,
          },
          borderColor: th.primary,
        })}
        {...props}
      />
    </div>
  );
}
