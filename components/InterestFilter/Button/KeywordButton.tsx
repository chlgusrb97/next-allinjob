import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  keyword: string;
  onClickKeywordButton: (keyword: any) => void;
  isSelected: boolean;
  isShowDelete?: boolean;
};

const KeywordButton = (props: Props) => {
  return (
    <button
      onClick={() => props.onClickKeywordButton(props.keyword)}
      className={cn(
        "flex items-center rounded-full border-2 bg-white px-[14px] py-[6px]",
        props.isSelected
          ? "bg border-orange-500 font-bold text-orange-500"
          : "border-background-primary font-medium text-black-300",
      )}
    >
      #{props.keyword}
      {props.isShowDelete && (
        <Image
          src="/delete.svg"
          alt="삭제 아이콘"
          width={20}
          height={20}
          className="ml-2"
        />
      )}
    </button>
  );
};

export default KeywordButton;
