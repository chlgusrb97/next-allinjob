import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { ClassNameValue } from "tailwind-merge";
import SubMenu, { menuKeysType } from "./SubMenu";
import { menus } from "./menus";

type Props = {
  className: ClassNameValue;
};

export default function Header(props: Props) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  console.log(props.className);

  return (
    <nav
      className={cn(
        props.className,
        "relative z-20 w-full overflow-x-visible border-b-[1px] border-b-black-50",
      )}
    >
      <div className={cn("relative col-span-12 grid grid-cols-12 px-5 py-5")}>
        <h1
          className={cn(
            "col-span-11 text-2xl font-bold text-orange-500",
            "tablet:col-span-2",
          )}
        >
          ALL IN JOB
        </h1>
        <div
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className="tablet:hidden flex aspect-square h-[32px] items-center rounded-sm border border-black-200 p-2 hover:cursor-pointer"
        >
          <AlignJustify />
        </div>
        <ul
          className="tablet:flex col-span-10 hidden gap-5 lg:justify-between"
          onMouseOver={() => setIsSubMenuOpen(true)}
        >
          {(Object.keys(menus) as menuKeysType[]).map((menu) => (
            <li
              key={menu}
              className="flex w-[115px] items-center justify-center"
            >
              <span className="cursor-pointer">{menu}</span>
            </li>
          ))}
        </ul>
      </div>
      {isSubMenuOpen ? (
        <SubMenu
          className={props.className}
          setIsSubMenuOpen={setIsSubMenuOpen}
        />
      ) : null}
    </nav>
  );
}
