type Props = {
  keyword: string;
};

const KeywordButton = ({ keyword }: Props) => {
  return (
    <button className="rounded-full border-2 border-background-primary bg-white px-[14px] py-[6px] font-medium text-black-300">
      {keyword}
    </button>
  );
};

export default KeywordButton;
