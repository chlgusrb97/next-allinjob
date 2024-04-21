type CompetitionMenu = {
  id: string;
  category: string;
  keywords: string[];
};

export const competitionMenus: CompetitionMenu[] = [
  {
    id: "competition_field",
    category: "공모분야",
    keywords: [
      "기획/아이디어",
      "광고/마케팅",
      "사진/영상/UCC",
      "디자인/순수예술/공예",
      "네이밍/슬로건",
      "캐릭터/만화/게임",
      "건축/건설/인테리어",
      "과학/공학",
      "예체능/패션",
      "전시/패션",
      "문학/시나리오",
      "해외",
      "학술",
      "창업",
      "기타",
    ],
  },
  {
    id: "award_scale",
    category: "시상규모",
    keywords: [
      "1천만원 미만",
      "1천만원~3천만원",
      "3천만원~5천만원",
      "5천만원 이상",
    ],
  },
  {
    id: "award_benefits",
    category: "수상혜택",
    keywords: [
      "입사 가산점",
      "인턴/정규직채용",
      "해외연수/전시기회",
      "실제 상용화",
      "상장 수여",
      "기타",
    ],
  },
  {
    id: "support_target",
    category: "지원대상",
    keywords: ["청소년", "대상 제한 없음", "대학생", "직장인/일반인"],
  },
];
