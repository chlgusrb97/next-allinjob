type Props = {
  index: number;
};

export default function Card(props: Props) {
  return (
    <div key={props.index} className="bg-gray-200">
      <div className="bg-gray-300 relative aspect-square w-full rounded-lg">
        <div className="absolute left-2 top-2 flex gap-2">
          <div>special</div>
          <div>d-day</div>
        </div>
        <div className="absolute bottom-2 right-2">scrap</div>
      </div>
      <div className="mt-2">
        <h1 className="text-lg">제목 오는 곳</h1>
        <p className="text-sm">주최기관</p>
        <div className="float-right flex gap-2 text-sm">
          <span className="rounded-md bg-orange-500 p-1 text-white">
            북마크
          </span>
          <span className="rounded-md bg-orange-500 p-1 text-white">
            조회수
          </span>
        </div>
      </div>
    </div>
  );
}
