import BackToTop from "./backToTop";
import HomePage from "./home/page";
import { Analytics } from '@vercel/analytics/react';
import globalData from "../data/global-data.json";

export const metadata = {
  title: "505 Labs - Tailoring Your Digital Future",
  description:
    "Custom software solutions and cutting-edge technology services for startups and enterprises",
};

export default async function Home() {
  const homeData = globalData.homeData;

  return (
    <main>
      <Analytics />
      <HomePage homeData={homeData} />

      <BackToTop />
    </main>
  );
}
