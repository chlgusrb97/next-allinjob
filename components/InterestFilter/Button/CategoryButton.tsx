import { cn } from "@/lib/utils";

type Props = {
  category: string;
  isSelectedCategory: boolean;
  onClickCategory: (category: string) => void;
};

export default function CategoryButton(props: Props) {
  return (
    <button
      className={cn(
        "rounded  px-4 py-2 font-bold",
        props.isSelectedCategory
          ? "bg-orange-500 text-white"
          : "bg-background-primary text-black-200",
      )}
      onClick={() => props.onClickCategory(props.category)}
    >
      {props.category}
    </button>
  );
}
