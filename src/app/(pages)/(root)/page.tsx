import { fetchRepoData } from "@/utils/api";
import Hero from "./_components/hero";

export default async function Home() {
  const res =  await fetchRepoData();
  return (
    <main className="space-y-32 pt-16">
	    {/* <p>ヒーローセクション</p> */}
	    {/* <p>ギャラリー一覧</p> */}
      <Hero/>
      <p>ギャラリー一覧</p>
    </main>
  );
}