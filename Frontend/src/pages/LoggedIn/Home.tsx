import LastReportVisitedCard from "../../components/LastRportVisitedCard";
import GeneralProjectStatsCard from "../../components/GeneralProjectStatsCard";

export default function Home() {
  return (
    <>
      <div className="flex h-full w-full p-2 gap-2">
        <section className="w-1/3 h-full bg-red-800 rounded-md">
          <LastReportVisitedCard />
        </section>

        <section className="w-2/3 h-full gap-2 p-2 bg-gray-300 rounded-md">
          <GeneralProjectStatsCard />
        </section>
      </div>
    </>
  )
}