import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Props = {
  placeholder: string;
  majorList: string[];
};

export default function SelectInput(props: Props) {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative flex items-center justify-between rounded border border-black-200 p-3">
      <input
        value={inputValue}
        onChange={onChangeInput}
        type="text"
        placeholder={props.placeholder}
        className="w-full outline-none"
      />
      <Image
        src="/expand_more.svg"
        alt="더보기 아이콘"
        width={24}
        height={24}
      />
      {inputValue !== "" && (
        <ul className="absolute left-0 top-[51px] z-10 flex h-[240px] w-full flex-col overflow-scroll bg-white shadow-[0px_9px_28px_8px_rgba(0,0,0,0.12)]">
          {props.majorList.map((major) => (
            <li className="p-3 hover:bg-background-primary">{major}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
