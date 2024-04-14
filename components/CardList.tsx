import { cardQueryFn } from "@/pages";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

export default function CardList() {
  const { data, isLoading } = useQuery({
    queryKey: ["card"],
    queryFn: cardQueryFn,
  });

  if (data)
    return (
      <div className="f col-span-12 grid gap-[15px] md:grid-cols-4">
        {data.map((item, index) => (
          <Card key={item.id} index={index} data={item} />
        ))}
      </div>
    );

  if (isLoading) return <div>loading</div>;
}
