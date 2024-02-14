// import Cookies from "universal-cookie";
// import getCurrentCurrency from "./getCurrentCurrency";

// const cookies = new Cookies();
// const merchant_currency = cookies.get("merchant_currency");
// console.log({ merchant_currency });

function getCurrencyValue(currencyValue: number, currency: string | undefined) {
  // if (currency === undefined) return "";
  const currentCurrency =  "USD" || undefined;
  console.log({ currentCurrency });
  const formattedValue = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency ||  currentCurrency || "USD",
    maximumFractionDigits: 2,
  }).format(currencyValue);
  console.log({ formattedValue });

  return formattedValue;
}
export default getCurrencyValue;
