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

  return (
    <nav
      className={cn(
        props.className,
        "relative z-20 w-full overflow-x-visible border-b-[1px] border-b-black-50",
      )}
    >
      <div
        className={cn(
          props.className,
          "relative col-span-12 w-full py-5 mobile:flex mobile:justify-between mobile:px-5 lg:justify-start",
        )}
      >
        <h1 className="col-span-2 text-2xl font-bold text-orange-500">
          ALL IN JOB
        </h1>
        <div className="items-center rounded-sm border border-black-200 p-2 hover:cursor-pointer mobile:flex lg:hidden">
          <AlignJustify />
        </div>
        <ul
          className="col-span-8 items-center justify-between mobile:hidden lg:flex"
          onMouseOver={() => setIsSubMenuOpen(true)}
        >
          {(Object.keys(menus) as menuKeysType[]).map((menu) => (
            <li key={menu} className="w-[115px] text-center">
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
