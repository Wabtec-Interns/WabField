export default function Home() {
  return (
    <>
      <div className="flex h-full w-full p-2 gap-2">
        <section className="w-1/3 h-full bg-red-800 rounded-md">
          <h1>Last project visited</h1>
        </section>

        <section className="w-2/3 h-full bg-blue-800 rounded-md">
          <h1>General Project Stats</h1>
        </section>
      </div>
    </>
  )
}