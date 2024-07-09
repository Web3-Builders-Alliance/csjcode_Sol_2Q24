import { useMemo } from "react";

interface UseNumberFormatOptions {
  style?: "decimal" | "currency";
  currency?: string; // Needed if style is 'currency'
  locale?: string;
}

export const useNumberFormat = (
  number: number,
  options?: UseNumberFormatOptions,
) => {
  const {
    style = "currency",
    currency = "USD",
    locale = "en-US",
  } = options || {};

  const formattedNumber = useMemo(() => {
    const formatter = new Intl.NumberFormat(locale, {
      style,
      currency,
    });

    return formatter.format(number);
  }, [number, locale, style, currency]);

  return formattedNumber;
};
