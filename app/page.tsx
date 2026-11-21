import { stays } from "../lib/stays";
import StayCard from "../components/StayCard";
import SearchBar from "../components/SearchBar";

// TODO (Task 1 — Server vs Client Components): this ENTIRE page is a Client Component
// ("use client" at the top) only because of the search box's useState. That ships the
// whole grid as client JS.
//
// Refactor so that:
//   - this page becomes a SERVER Component (remove "use client"),
//   - only the interactive search moves into its own Client Component
//     (e.g. components/SearchBar.tsx with "use client"),
//   - the server page renders the heading + grid.
//
// Decide where the filtering lives and what stays on the server vs the client.
export default  async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{q?: string}>
}) {
  const { q ="" }=await searchParams;
  const visible=stays.filter((s)=>(s.name +" "+s.location).toLowerCase().includes(q.toLowerCase()));

  return (
    <section>
      <h1>Find a place to stay</h1>
      <SearchBar/>
      <div className="grid">
        {visible.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </section>
  );
}
