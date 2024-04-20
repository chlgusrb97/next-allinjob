import CategoryButton from "../Button/CategoryButton";
import UserInterestButton from "../Button/UserInterestButton";

export default function Category() {
  return (
    <div className="col-span-2 flex flex-col gap-4 border-b border-line-normal pb-6">
      <h1 className="text-2xl font-bold">공모전</h1>
      <div className="flex items-center justify-between">
        <ul className="flex gap-4">
          <li>
            <CategoryButton category="공모분야" />
          </li>
          <li>
            <CategoryButton category="시상규모" />
          </li>
          <li>
            <CategoryButton category="수상혜택" />
          </li>
          <li>
            <CategoryButton category="지원대상" />
          </li>
        </ul>
        <div>
          <UserInterestButton />
        </div>
      </div>
    </div>
  );
}
