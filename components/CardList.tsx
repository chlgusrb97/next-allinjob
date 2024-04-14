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
      <div className="col-span-12 grid grid-cols-4 gap-[15px]">
        {data.map((item, index) => (
          <Card key={item.id} index={index} data={item} />
        ))}
      </div>
    );

  if (isLoading) return <div>loading</div>;
}
