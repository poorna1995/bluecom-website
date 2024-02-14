import React from "react";

export default function UserIcon({ color }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5001 0.916664C5.20721 0.916664 0.916748 5.20712 0.916748 10.5C0.916748 15.7929 5.20721 20.0833 10.5001 20.0833C15.793 20.0833 20.0834 15.7929 20.0834 10.5C20.0834 5.20712 15.793 0.916664 10.5001 0.916664ZM7.14592 8.10416C7.14592 7.66369 7.23267 7.22753 7.40124 6.82058C7.5698 6.41363 7.81686 6.04387 8.12833 5.73241C8.43979 5.42095 8.80955 5.17388 9.2165 5.00532C9.62344 4.83676 10.0596 4.75 10.5001 4.75C10.9406 4.75 11.3767 4.83676 11.7837 5.00532C12.1906 5.17388 12.5604 5.42095 12.8718 5.73241C13.1833 6.04387 13.4304 6.41363 13.5989 6.82058C13.7675 7.22753 13.8542 7.66369 13.8542 8.10416C13.8542 8.99374 13.5009 9.84689 12.8718 10.4759C12.2428 11.1049 11.3897 11.4583 10.5001 11.4583C9.6105 11.4583 8.75736 11.1049 8.12833 10.4759C7.4993 9.84689 7.14592 8.99374 7.14592 8.10416ZM16.4973 15.2763C15.78 16.1787 14.868 16.9074 13.8295 17.4079C12.791 17.9083 11.6529 18.1677 10.5001 18.1667C9.34729 18.1677 8.20915 17.9083 7.17067 17.4079C6.13219 16.9074 5.2202 16.1787 4.50283 15.2763C6.05629 14.1618 8.17612 13.375 10.5001 13.375C12.824 13.375 14.9439 14.1618 16.4973 15.2763Z"
        fill={color}
      />
    </svg>
  );
}
