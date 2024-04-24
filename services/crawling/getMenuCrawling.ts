import axios from "axios";

export const getMenuCrawling = async (menu: string, page: number) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/crawling/finde/${menu}`,
    {
      params: { page },
      headers: { "Content-Type": "application/json" },
    },
  );
  return res.data;
};
