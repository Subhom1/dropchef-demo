

const Card = (props) => {
const { item, updateItem, setClick } = props;
  return (
    <div
      className={`${
        item?.count && "border border-primary_green"
      } border card m-10 w-72 h-96 rounded-xl bg-slate-200 cursor-pointer`}

    >
      <div className="card-image">
        <img
          src={item.data.imageURL}
          alt="menu_item"
          className="rounded-t-xl"
        />
      </div>
      <div className="card-body mx-4 my-5 flex flex-col min-h-40 py-5 justify-between">
        <div className="card-info">
          <div className="card-header">{item.data.name}</div>
          <span className="text-xs time">{item.data.cookTime} min</span>
        </div>
        <div className="card-footer flex">
          <div className="price mx-1 flex flex-row items-center justify-between">
            <div className="big mr-1">€ {item.data.price}</div>
            <span className="text-xs"> per serving</span>
          </div>

          {item?.count == 0 ? (
            <button
              className="button text-xs py-2 px-4 bg-primary_green rounded-full uppercase"
              onClick={(e) => updateItem(item.data.id, "plus", e)}
            >
              add to order
            </button>
          ) : (
            <div
              className="button-wrapper ml-2 flex flex-row"
              onClick={(e) => updateItem(item.data.id, "minus", e)}
            >
              <button className="button text-xs py-1 px-3 bg-primary_green rounded-lg uppercase">
                -
              </button>
              <div className="selcted-count p-2 mx-1 border border-black rounded-lg">
                {item.count}
              </div>
              <button
                className="button text-xs py-1 px-3 bg-primary_green rounded-lg uppercase"
                onClick={(e) => updateItem(item.data.id, "plus", e)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card