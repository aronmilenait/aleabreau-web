import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
const Main = () => {
  return (
    <main className="bg-gradient-to-b from-rose-50 to-rose-100 text-rose-900 min-h-screen p-6 md:p-24">
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <h1
          className={`text-4xl md:text-8xl font-bold tracking-tight drop-shadow-md ${dancingScript.className}`}
        >
          Aleabreau
        </h1>
        <p className="text-xl md:text-2xl tracking-wide mt-2 drop-shadow-sm">
          Lencería de lujo
        </p>
      </section>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="relative h-96">
          <Image
            src="/lingerie2.jpg"
            alt="Lingerie Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-96">
          <Image
            src="/lingerie1.jpg"
            alt="Lingerie Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-96">
          <Image
            src="/lingerie3.jpg"
            alt="Lingerie Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
