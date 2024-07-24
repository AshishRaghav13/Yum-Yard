import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className=" w-6/12 m-auto my-4  bg-slate-100 p-2 rounded-md shadow-md">
        <div className="flex justify-between">
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        <div>
          <ItemList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
