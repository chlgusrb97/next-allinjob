import { CardType } from "@/pages";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from ".";

export const getPosts = async <T extends number | string>(
  page: T,
): Promise<{
  posts: CardType[];
  nextPage: number | null;
}> => {
  const res = await fetch(
    `https://mmta.kr/crawling/finde/outside?page=${page}`,
  );
  const { data } = await res.json();

  return {
    posts: data,
    nextPage: data.length === 12 ? Number(page) + 1 : null,
  };
};

export default function CardList() {
  const [ref, inView] = useInView();

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const cards = data?.pages.map((page) => page.posts).flat();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (cards)
    return (
      <div className="col-span-12 grid grid-cols-2 gap-[15px] md:grid-cols-4">
        {cards.map((post, index) => (
          <Card key={post.id + index} data={post} index={index} />
        ))}
        <div ref={ref}></div>
      </div>
    );
  if (hasNextPage) return <div>loading</div>;
}
