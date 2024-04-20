const INTEREST_SWITCH = "INTEREST_SWITCH";

export default function UserInterestButton() {
  return (
    <div className="flex items-center">
      <p className="mr-[11px] font-bold text-orange-500">나의관심커리어</p>
      <label
        htmlFor={INTEREST_SWITCH}
        className="transition-[all 0.3s ease-in-out] inline-block h-8 w-[52px] cursor-pointer rounded-full border-2 border-line-normal bg-background-primary50"
      >
        <input type="checkbox" id={INTEREST_SWITCH} hidden />
        <span className="relative inline-block h-full w-full p-[6px]">
          <span className="transition-[all 0.3s ease-in-out] absolute top-1/2 inline-block h-4 w-4 -translate-y-1/2 translate-x-0 rounded-full bg-line-normal" />
        </span>
      </label>
    </div>
  );
}
