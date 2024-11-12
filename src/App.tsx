import Result from "./components/Result";
import Summary from "./components/Summary";

export default function App() {
  return (
    <main className="font-Hanken_Grotesk min-h-screen flex justify-center bg-paleBlue lg:py-10 lg:items-center">
      <section className="max-w-2xl mx-auto bg-white flex flex-col lg:flex-row lg:rounded-3xl lg:shadow-md">
      <Result/>
      <Summary/>
      </section>
    </main>
  )
}