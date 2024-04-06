import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

export type CardType = {
  id: string;
  Dday: number;
  scrap: number;
  mainImage: string;
  view: number;
  title: string;
  enterprise: string;
};

const CardList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["card"],
    queryFn: async (): Promise<CardType[]> => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/crawling/main/outside`,
      );
      const data = await res.json();
      console.log(data);
      return data.data;
    },
  });

  if (isLoading) return <div>loading...</div>;

  if (data)
    return (
      <div className="col-span-12 grid grid-cols-4 gap-[15px]">
        {data.map((item, index) => (
          <Card key={item.id} index={index} data={item} />
        ))}
      </div>
    );
};

export default CardList;
