import { cn } from "@/lib/utils";

type Props = {
  data: {
    Dday: number;
  };

  index: number;
};

export default function CardHeader(props: Props) {
  const isSpecial = props.index < 4 ? "block" : "hidden";

  return (
    <div className="absolute left-2 top-2 flex gap-2">
      <div
        className={cn(
          isSpecial,
          "rounded-md bg-orange-500 px-2 py-1 text-white",
        )}
      >
        special
      </div>
      <div className="rounded-md border-2 border-orange-500 bg-orange-50 px-2 py-1 text-orange-500">
        {props.data.Dday}
      </div>
    </div>
  );
}
