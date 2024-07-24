const ItemList = ({ items }) => {
  // console.log(items)
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b-2 border-b-gray-300 m-4 p-4 text-left">
          {
            <div>
              <span className="font-semibold pr-1">{item.card.info.name} </span>
              <span>{item.card.info.itemAttribute.vegClassifier === "VEG" ?"🟩":"🟥"}</span>
              <br />
              <span className="font-semibold text-sm">₹{item.card.info.price / 100}</span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default ItemList;
