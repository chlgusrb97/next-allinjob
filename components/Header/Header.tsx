import Link from "next/link";
import { useState } from "react";
import { menus } from "./menus";
import { cn } from "@/lib/utils";

type menuKeysType = keyof typeof menus;

type Props = {
  className: string;
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
          "relative col-span-12 w-full overflow-x-visible py-5",
        )}
      >
        <h1 className="col-span-2 text-2xl font-bold text-orange-500">
          ALL IN JOB
        </h1>
        <ul
          className="col-span-8 flex items-center justify-between"
          onMouseOver={() => setIsSubMenuOpen(true)}
        >
          {(Object.keys(menus) as menuKeysType[]).map((menu) => (
            <li key={menu} className="w-[115px]">
              <span className="cursor-pointer">{menu}</span>
            </li>
          ))}
        </ul>
      </div>
      {isSubMenuOpen ? (
        <div
          className={cn(
            props.className,
            "absolute right-0 top-full mt-[1px] w-full justify-center bg-white",
          )}
          onMouseOver={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <div className="col-span-8 col-start-3 flex w-full justify-between pt-5">
            {(Object.keys(menus) as menuKeysType[]).map((menu) => (
              <ul key={menu} className="w-[115px]">
                {menus[menu].map((subMenu) => (
                  <li key={subMenu.name} className="mb-2">
                    <Link href={subMenu.href}>
                      <span>{subMenu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
