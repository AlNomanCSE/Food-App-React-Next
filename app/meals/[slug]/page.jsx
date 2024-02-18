import { getMeal } from "@/lib/meals";
import style from "./page.module.css";
import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
const SomeSlug = async ({ params }) => {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header>
        <Image src={meal.image} alt="image" width={300} height={300} />
      </header>
      <main>
        <h1>{meal.title}TITLE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum
          voluptas porro maxime iure, delectus provident deleniti eaque laborum
          minima non illum eligendi quod nesciunt ducimus placeat? Expedita,
          tempore ea? BY <a href={`mailto:${meal.email}`}>MAIL</a>
        </p>
        <p dangerouslySetInnerHTML={{ __html: "......." }}></p>
      </main>
    </>
  );
};

export default SomeSlug;
