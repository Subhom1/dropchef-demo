import React from "react";

export default function Button({updateItem, item}) {
  return (
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
  );
}
