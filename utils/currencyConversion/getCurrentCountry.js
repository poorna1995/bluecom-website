import currencyCodes from "currency-codes";
import allCountries from "countries-and-timezones";

export default function getCurrentCountry() {
  let currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (currentTimezone === "Asia/Calcutta") currentTimezone = "Asia/Kolkata";
  const currentCountry = allCountries.getCountryForTimezone(currentTimezone);
  // ||"India"
  const currentCountryName = currentCountry.name;
  return currentCountryName;
}
