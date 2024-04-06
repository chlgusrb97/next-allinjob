import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

type menuKeysType = keyof typeof menus;

const menus = {
  공모전: [
    {
      name: "공모분야",
      href: "/subMenu/공모전/공모분야",
    },
    {
      name: "시상규모",
      href: "/subMenu/공모전/시상규모",
    },
    {
      name: "수상혜택",
      href: "/subMenu/공모전/수상혜택",
    },
    {
      name: "지원대상",
      href: "/subMenu/공모전/지원대상",
    },
  ],
  대외활동: [
    {
      name: "활동분야",
      href: "/subMenu/대외활동/활동분야",
    },
    {
      name: "관심분야",
      href: "/subMenu/대외활동/관심분야",
    },
    {
      name: "활동혜택",
      href: "/subMenu/대외활동/활동혜택",
    },
    {
      name: "활동기간",
      href: "/subMenu/대외활동/활동기간",
    },
    {
      name: "지역",
      href: "/subMenu/대외활동/지역",
    },
  ],
  자격증: [
    {
      name: "국가기술자격증",
      href: "/subMenu/자격증/국가기술자격증",
    },
    {
      name: "국가전문자격증",
      href: "/subMenu/자격증/국가전문자격증",
    },
  ],
  어학: [
    {
      name: "영어",
      href: "/subMenu/어학/영어",
    },
    {
      name: "중국어",
      href: "/subMenu/어학/중국어",
    },
    {
      name: "스페인어",
      href: "/subMenu/어학/스페인어",
    },
    {
      name: "기타",
      href: "/subMenu/어학/기타",
    },
  ],
  인턴: [
    {
      name: "대기업",
      href: "/subMenu/인턴/대기업",
    },
    {
      name: "중소기업",
      href: "/subMenu/인턴/중소기업",
    },
    {
      name: "스타트업",
      href: "/subMenu/인턴/스타트업",
    },
  ],
  취준job담: [
    {
      name: "취업선배 Q&A",
      href: "/subMenu/취준job담/취업선배Q&A",
    },
    {
      name: "공모전/대외활동",
      href: "/subMenu/취준job담/공모전/대외활동",
    },
    {
      name: "자격증/어학",
      href: "/subMenu/취준job담/자격증/어학",
    },
    {
      name: "인턴",
      href: "/subMenu/취준job담/인턴",
    },
    {
      name: "스터디",
      href: "/subMenu/취준job담/스터디",
    },
    {
      name: "자유게시판",
      href: "/subMenu/취준job담/자유게시판",
    },
  ],
};

type Props = {
  className: string;
};

export default function Header(props: Props) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        `${props.className} relative z-20 w-full overflow-x-visible border-b-[1px] border-b-black-50`,
      )}
    >
      <div
        className={`${props.className} relative col-span-12 w-full gap-[50px] overflow-x-visible py-5`}
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
          className={`grid-layout absolute right-0 top-full mt-[1px] w-full justify-center bg-white`}
          onMouseOver={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <div
            className={cn(
              "col-span-8 col-start-3 flex w-full justify-between pt-5",
            )}
          >
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
