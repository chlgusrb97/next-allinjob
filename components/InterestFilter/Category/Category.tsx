import CategoryButton from "../Button/CategoryButton";
import UserInterestButton from "../Button/UserInterestButton";

type Props = {
  menuName: string;
  categoryList: string[];
  currentCategory: string;
};

export default function Category(props: Props) {
  return (
    <div className="col-span-2 flex flex-col gap-4 border-b border-line-normal pb-6">
      <h1 className="text-2xl font-bold">공모전</h1>
      <div className="flex items-center justify-between">
        <ul className="flex gap-4">
          {props.categoryList?.map((category) => (
            <li key={category}>
              <CategoryButton
                category={category}
                isSelectedCategory={category === props.currentCategory}
              />
            </li>
          ))}
        </ul>
        <div>
          <UserInterestButton />
        </div>
      </div>
    </div>
  );
}
