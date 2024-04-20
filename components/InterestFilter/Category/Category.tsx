export default function Category() {
  return (
    <div className="col-span-2 flex flex-col gap-4 border-b pb-6">
      <h1 className="text-2xl font-bold">공모전</h1>
      <div className="flex justify-between">
        <div>카테고리버튼</div>
        <div>나의관심사버튼</div>
      </div>
    </div>
  );
}
