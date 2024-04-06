import Image from "next/image";
import SelectInput from "./Input/SelectInput";
import { interests } from "./interests";

export default function InterestForm() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-orange-400">
      <div className="w-[492px] rounded-3xl bg-white p-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">전공학과를 입력해주세요!</h1>
          <SelectInput
            placeholder="전공학과를 선택해주세요."
            majorList={[""]}
          />
          <SelectInput
            placeholder="세부전공을 선택해주세요."
            majorList={[""]}
          />
        </div>
        <div className="relative my-6 h-[228px] w-[389px]">
          <Image src="/interest_default.svg" alt="관심사 기본이미지" fill />
        </div>
        <div>
          <h1 className="text-xl">관심분야를 선택해주세요!</h1>
          <ul className="mt-3 flex justify-between">
            {interests.map((interest) => (
              <li className="cursor-pointer rounded-full border px-4 py-2 text-black-200">
                {interest.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6">
          <h1 className="text-xl">
            #공모전 분야의 관심 키워드를 선택해주세요!
          </h1>
          <p className="pb-3 pt-2 text-sm text-black-200">
            키워드는 1개~3개 선택 가능합니다.
          </p>
          <ul className="flex flex-wrap gap-3">
            {interests[0].keywords.map((keyword) => (
              <li className="flex cursor-pointer items-center rounded-lg border border-background-primary px-3 py-2 text-sm text-black-200">
                <Image
                  src="/keyword_check_circle.svg"
                  alt="키워드 선택아이콘"
                  width={26}
                  height={26}
                />
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full rounded-[14px] bg-background-primary py-4 text-white">
          확인
        </button>
      </div>
    </div>
  );
}
