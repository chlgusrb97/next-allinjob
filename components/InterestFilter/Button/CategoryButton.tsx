type Props = {
  category: string;
};

export default function CategoryButton(props: Props) {
  return (
    <button className="rounded bg-background-primary px-4 py-2 font-bold text-black-200">
      {props.category}
    </button>
  );
}
