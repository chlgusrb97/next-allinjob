import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { ClassNameValue } from "tailwind-merge";
import { menus } from "./menus";

export type menuKeysType = keyof typeof menus;

type Props = {
  className: ClassNameValue;
  setIsSubMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SubMenu(props: Props) {
  return (
    <div
      className={cn(
        props.className,
        "absolute right-0 top-full mt-[1px] w-full justify-center bg-white",
      )}
      onMouseOver={() => props.setIsSubMenuOpen(true)}
      onMouseLeave={() => props.setIsSubMenuOpen(false)}
    >
      <div className="col-span-8 col-start-3 w-full justify-between pt-5 mobile:grid md:flex">
        {(Object.keys(menus) as menuKeysType[]).map((menu) => (
          <>
            <h3 className="text-xl font-bold mobile:block md:hidden">{menu}</h3>
            <ul key={menu} className="w-[115px]">
              {menus[menu].map((subMenu) => (
                <li key={subMenu.name} className="mb-2">
                  <Link href={subMenu.href}>
                    <span>{subMenu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
