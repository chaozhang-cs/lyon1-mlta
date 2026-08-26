import { redirect } from "next/navigation";

const availableYears = [2026, 2027];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const defaultYear =
    availableYears.find((year) => year === currentYear) ??
    [...availableYears].reverse().find((year) => year < currentYear) ??
    availableYears[0];

  redirect(`/${defaultYear}`);
}
