const menus = ["공모전", "대외활동", "자격증", "어학", "인턴", "취준job담"];

type Props = {
  className: string;
};

export default function Header(props: Props) {
  return (
    <nav
      className={`${props.className} relative w-full border-b-[1px] border-b-black-50`}
    >
      <div className={`${props.className} relative col-span-12 w-full py-5`}>
        <h1 className="col-span-2 text-2xl font-bold text-orange-500">
          ALL IN JOB
        </h1>
        <ul className="col-span-6 flex items-center justify-between">
          {menus.map((menu, idx) => (
            <li key={idx} className="hover:cursor-pointer">
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
