export type MenuType = (keyof typeof menus)[];

export const menuKeysEnglish = [
  "competition",
  "outside",
  "qnet",
  "language",
  "intern",
] as const;

export const menusPair = {
  competition: "공모전",
  outside: "대외활동",
  qnet: "자격증",
  language: "어학",
  intern: "인턴",
} as const;

export const menus = {
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
} as const;

export const menusKey = Object.keys(menus) as MenuType;
