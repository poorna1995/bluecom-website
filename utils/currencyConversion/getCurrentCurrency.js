import currencyCodes from "currency-codes";
import allCountries from "countries-and-timezones";
import getCurrentCountry from "./getCurrentCountry";

export default function getCurrentCurrency() {
  const getCurrentCurrency = currencyCodes.country(getCurrentCountry())[0];
  return getCurrentCurrency;
}
