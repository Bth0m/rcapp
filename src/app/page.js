"use client";
import Indicators from "./components/indicators";
import Mapa from "./components/map";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Indicators />
      <Mapa />
    </main>
  );
}
