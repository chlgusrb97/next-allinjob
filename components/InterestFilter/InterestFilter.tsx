import { CompetitionCategory, CompetitionMenu } from "@/types/menu.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Category from "./Category/Category";
import Keyword from "./Keyword/Keyword";

type Props = {
  menuId: string;
  menu: CompetitionMenu;
};

export default function InterestFilter({ menuId, menu }: Props) {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState<CompetitionCategory>();
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    const sortedCategoryId = menu.categories.map((category) => category.id);
    if (menuId && !sortedCategoryId.includes(menuId)) {
      router.push("/");
      return;
    }

    const sortedCategoryList = menu.categories.map(
      (category) => category.category,
    );
    const initialCategory = menu.categories.find(
      (category) => category.id === menuId,
    );
    setCategoryList(sortedCategoryList);
    setCurrentCategory(initialCategory);
  }, [menuId]);

  return (
    <div className="col-span-12 mt-8 grid grid-cols-2 gap-4 rounded-xl bg-background-secondary p-8">
      <Category
        menuName={menu.menuName}
        categoryList={categoryList}
        currentCategory={currentCategory?.category as string}
      />
      <Keyword KeywordList={currentCategory?.keywords as string[]} />
    </div>
  );
}
