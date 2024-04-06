import Card from "./Card";

const CardList = () => {
  return (
    <div className="col-span-12 grid grid-cols-4 gap-[15px]">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card index={index} />
      ))}
    </div>
  );
};

export default CardList;
