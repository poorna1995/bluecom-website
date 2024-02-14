import AppLink from "components/Common/AppLink";
import React from "react";

function RenderAppLink({ href, title }) {
  return (
    <AppLink
      sx={{
        marginLeft: "16px",
        fontWeight: "700",
        color: (theme) => theme.palette.text.primary,
      }}
      href={href}
    >
      {title}
    </AppLink>
  );
}

export default RenderAppLink;
