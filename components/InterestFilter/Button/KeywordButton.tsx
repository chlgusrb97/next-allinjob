import Image from "next/image";

type Props = {
  keyword: string;
  isShowDelete?: boolean;
};

const KeywordButton = ({ keyword, isShowDelete }: Props) => {
  return (
    <button className="flex items-center rounded-full border-2 border-background-primary bg-white px-[14px] py-[6px] font-medium text-black-300">
      #{keyword}
      {isShowDelete && (
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
