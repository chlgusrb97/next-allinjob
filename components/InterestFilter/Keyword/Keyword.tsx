import { useState } from "react";
import KeywordButton from "../Button/KeywordButton";
import ResetButton from "../Button/ResetButton";

type Props = {
  KeywordList: string[];
};

export default function Keyword({ KeywordList }: Props) {
  const [selectedKeywordList, setSelectedKeywordList] = useState<string[]>([]);

  const handleClickKeyword = (keyword: string) => {
    const isSeleted = selectedKeywordList.some(
      (selectedKeyword) => selectedKeyword === keyword,
    );

    if (isSeleted) {
      const updatedKeywordList = selectedKeywordList.filter(
        (selectedKeyword) => selectedKeyword !== keyword,
      );
      setSelectedKeywordList(updatedKeywordList);
    } else {
      setSelectedKeywordList((selectedKeywords) => [
        ...selectedKeywords,
        keyword,
      ]);
    }
  };

  const handleSelectedKeyword = (keyword: string) => {
    const updatedKeywordList = selectedKeywordList.filter(
      (selectedKeyword) => selectedKeyword !== keyword,
    );
    setSelectedKeywordList(updatedKeywordList);
  };

  return (
    <div className="col-span-2 flex flex-col">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-2xl font-bold">키워드</h1>
        <ResetButton />
      </div>
      <ul className="flex flex-wrap gap-x-2 gap-y-4">
        {KeywordList?.map((keyword) => (
          <li key={keyword}>
            <KeywordButton
              keyword={keyword}
              onClickKeywordButton={handleClickKeyword}
              isSelected={selectedKeywordList.some(
                (selectedKeyword) => selectedKeyword === keyword,
              )}
            />
          </li>
        ))}
      </ul>
      {selectedKeywordList.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-4 border-t border-line-normal pt-6">
          {selectedKeywordList.map((keyword) => (
            <li key={keyword}>
              <KeywordButton
                keyword={keyword}
                onClickKeywordButton={handleSelectedKeyword}
                isSelected
                isShowDelete
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
