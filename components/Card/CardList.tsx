import { CardType } from "@/pages";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });

  const cards = data?.pages.map((page) => page.posts).flat();

  if (cards)
    return (
      <div className="col-span-12">
        <div className="grid w-full gap-[15px] smallMobile:grid-cols-1 mobile:grid-cols-2  tablet:grid-cols-3 desktop:grid-cols-4">
          {cards.map((post, index) => (
            <Card
              key={post.id + index}
              data={post}
              index={index}
              variant="competition"
            />
          ))}
        </div>
        {hasNextPage && (
          <div className="col-span-2 col-start-2 mb-[100px] flex justify-center p-1">
            <button
              className=" rounded-md border-2 p-3 shadow-black-200"
              onClick={() => fetchNextPage()}
            >
              더보기
            </button>
          </div>
        )}
      </div>
    );
  if (hasNextPage) return <div>loading</div>;
}
