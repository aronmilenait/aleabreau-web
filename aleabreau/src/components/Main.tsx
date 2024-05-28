import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const imageSources = [
  { src: "/lingerie2.jpg", alt: "Lingerie Image 1" },
  { src: "/lingerie1.jpg", alt: "Lingerie Image 2" },
  { src: "/lingerie3.jpg", alt: "Lingerie Image 3" },
];

const Main = () => {
  return (
    <main className="bg-gradient-to-b from-rose-50 to-rose-100 text-rose-900 min-h-screen p-6 md:p-24">
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <h1
          className={`text-4xl md:text-8xl font-bold drop-shadow-md ${greatVibes.className}`}
        >
          Aleabreau
        </h1>
        <p className="text-xl md:text-2xl drop-shadow-sm">Lencería de lujo</p>
      </section>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imageSources.map((image, index) => (
          <div key={index} className="relative h-80">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
        <div className="flex justify-center items-center col-span-1 md:col-span-3 mt-8">
          <a
            href="#"
            className="inline-block bg-rose-900 text-rose-50 py-4 px-8 rounded-lg text-lg font-medium shadow-md hover:bg-rose-800 transition duration-300 ease-in-out"
          >
            Ver productos
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
