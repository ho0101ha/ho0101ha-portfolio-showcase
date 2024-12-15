import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="space-y-32 pt-16">
	    {/* <p>ヒーローセクション</p> */}
	    {/* <p>ギャラリー一覧</p> */}
      <Hero/>
      <p>ギャラリー一覧</p>
    </main>
  );
}