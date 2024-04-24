import { CompetitionCategory, CompetitionMenu } from "@/types/menu.types";
import { Dispatch, SetStateAction } from "react";
import CategoryButton from "../Button/CategoryButton";
import UserInterestButton from "../Button/UserInterestButton";

type Props = {
  menu: CompetitionMenu;
  categoryList: string[];
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<CompetitionCategory | undefined>>;
};

export default function Category(props: Props) {
  const handleClickCategory = (category: string) => {
    const findedCategory = props.menu.categories.find(
      (cg) => cg.category === category,
    );
    props.setCurrentCategory(findedCategory);
  };

  return (
    <div className="col-span-2 flex flex-col gap-4 border-b border-line-normal pb-6">
      <h1 className="text-2xl font-bold">{props.menu.menuName}</h1>
      <div className="flex items-center justify-between">
        <ul className="flex gap-4">
          {props.categoryList?.map((category) => (
            <li key={category}>
              <CategoryButton
                category={category}
                isSelectedCategory={category === props.currentCategory}
                onClickCategory={handleClickCategory}
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
