import Image from "next/image";

const ResetButton = () => {
  return (
    <button className="flex items-center">
      <p className="text-sm font-bold text-black-200">초기화</p>
      <Image src="/reset.svg" alt="초기화" width={20} height={20} />
    </button>
  );
};

export default ResetButton;
