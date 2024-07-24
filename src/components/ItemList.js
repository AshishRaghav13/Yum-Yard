import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-b-2 border-b-gray-300 m-4 p-4 text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span className="font-semibold pr-1">{item.card.info.name} </span>
              <span>
                {item.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟩"
                  : "🟥"}
              </span>
              <br />
              <span className="font-semibold text-sm">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <div>
                <p className="text-sm">{item.card.info.description}</p>
              </div>
              <button className="py-1 px-6 rounded-md mt-2 shadow-xl font-semibold bg-slate-300 hover:border border-gray-500">Add +</button>
              </div>
              <div>
                <img
                  className="w-24  rounded-xl"
                  src={CDN_URL + item.card.info.imageId}
                  alt="img"
                />
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
