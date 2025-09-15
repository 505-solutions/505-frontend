import TeamPage from "./index";

// import teamData2 from "../../data/global-data.json";

export const metadata = {
  title: "505Labs Home",
  description:
    "The Worlds Most Powerful AI Training Network Powering the Future of AI",
};
export default async function TeamLayout() {
  // const res = await fetch(
  //   "https://gist.githubusercontent.com/Snojj25/c71c8123bc2564878ba3ca437a4eb6f7/raw"
  // );
  // const teamData = (await res.json()).teamData;

  let teamData = [];
  try {
    const res = await fetch(
      "https://drive.google.com/uc?export=download&id=1GYSTP9MfYNuRw_i8E85vpy22phmzlgcm",
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const jsonData = await res.json();
    teamData = jsonData.teamData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error by returning fallback data or informing the user.
  }

  return <TeamPage teamData={teamData} />;
}
