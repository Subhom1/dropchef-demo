import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { IP, token } from "../../constant";
import { useRecoilState, useSetRecoilState } from "recoil";
import { menuState } from "../state/atoms/MenuState";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Card";
import OrderDetails from "./OrderDetails";
import Button from "../components/Button";

token;
const Menu = () => {
  const setMenu = useSetRecoilState(menuState);
  const [menus, setMenus] = useRecoilState(menuState);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedMenus, setSelctedMenus] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    axios
      .get(`${IP}/v1/menus/586555`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const alteredMenu = res?.data?.recipeKits?.map((item, index) => {
          return { ...item, selected: false, count: 0 };
        });
        setMenu(alteredMenu);
      })
      .catch((e) => console.error(e));
  }, [setMenu]);
  //   const setClick = (id) => {
  //     const newMenu = menus.map((item, index) => {
  //       if (item.data.id == id) return { ...item, selected: !item.selected };
  //       else return item;
  //     });
  //     setMenu(newMenu);
  //     setSelectedCount(newMenu.filter((item) => item.selected).length);
  //   };

  const updateItem = (id, calc, e) => {
    e.stopPropagation();
    console.log(id, calc, "item");
    const newMenu = menus.map((item, index) => {
      if (item.data.id == id)
        return {
          ...item,
          count:
            calc == "plus"
              ? item.count + 1
              : item.count > 1
              ? item.count - 1
              : 0,
          selected: calc == "plus" ? true : item.count > 1 ? true : false,
        };
      else return item;
    });
    setMenu(newMenu);
  };
  useEffect(() => {
    if (menus?.length) {
      const getSelectedProd = menus?.filter((i) => i.selected);
    setSelectedCount(menus.filter((item) => item.selected).length);

      setSelctedMenus(getSelectedProd);
    }
  }, [menus]);

  return (
    <div className="main-container mx-20 flex-1 static">
      <Header pathname={pathname} />
      <div className="card-tag-info my-10 border-b-2 border-primary_green py-3">
        <h5 className="text-2xl my-5">
          Save time without compromises with Made Fresh by Dropchef
        </h5>
        <span className="">
          Made Fresh Menu: Select your prepared meals below. Ideal for occasions
          when you are short on time. Prepared meals delivered fresh and ready
          in minutes.
        </span>
      </div>
      <div className="menu-items flex flex-row flex-wrap">
        {menus?.length ? (
          menus?.map((item, index) => {
            return (
              <Card
                key={item.data.id}
                item={item}
                updateItem={updateItem}
                // setClick={setClick}
              />
              // <div
              //   className={`${
              //     item?.selected && "border border-primary_green"
              //   } border card m-10 w-72 h-96 rounded-xl bg-slate-200 cursor-pointer`}
              //   key={item.data.id}
              //   onClick={() => setClick(item.data.id)}
              // >
              //   <div className="card-image">
              //     <img
              //       src={item.data.imageURL}
              //       alt="menu_item"
              //       className="rounded-t-xl"
              //     />
              //   </div>
              //   <div className="card-body mx-4 my-5 flex flex-col min-h-40 py-5 justify-between">
              //     <div className="card-info">
              //       <div className="card-header">{item.data.name}</div>
              //       <span className="text-xs time">{item.data.cookTime} min</span>
              //     </div>
              //     <div className="card-footer flex">
              //       <div className="price mx-1 flex flex-row items-center justify-between">
              //         <div className="big mr-1">€ 9.99</div>
              //         <span className="text-xs"> per serving</span>
              //       </div>

              //       {item?.count == 0 ? (
              //         <button
              //           className="button text-xs py-2 px-4 bg-primary_green rounded-full uppercase"
              //           onClick={(e) => updateItem(item.data.id, "plus", e)}
              //         >
              //           add to order
              //         </button>
              //       ) : (
              //         <div
              //           className="button-wrapper ml-2 flex flex-row"
              //           onClick={(e) => updateItem(item.data.id, "minus", e)}
              //         >
              //           <button className="button text-xs py-1 px-3 bg-primary_green rounded-lg uppercase">
              //             -
              //           </button>
              //           <div className="selcted-count p-2 mx-1 border border-black rounded-lg">
              //             {item.count}
              //           </div>
              //           <button
              //             className="button text-xs py-1 px-3 bg-primary_green rounded-lg uppercase"
              //             onClick={(e) => updateItem(item.data.id, "plus", e)}
              //           >
              //             +
              //           </button>
              //         </div>
              //       )}
              //     </div>
              //   </div>
              // </div>
            );
          })
        ) : (
          <div>Loading . . .</div>
        )}
      </div>
      {selectedCount > 0 && (
        <footer className="sticky bottom-0 bg-white py-10 flex">
          <div className="mx-5 footer-text border border-primary_green px-5 py-2 rounded-sm">
            {selectedCount} Made fresh Selected
          </div>
          <button
            className="button text-xs py-2 px-4 w-32 bg-primary_green rounded-full uppercase"
            onClick={() => {
              navigate("/order-details");
            }}
          >
            Next
          </button>
        </footer>
      )}
      {/* <OrderDetails /> */}
      <div className="order-details-container">
        <h3>Order Summary</h3>
        {selectedMenus?.map((item, index) => {
          if (item.selected) {
            return (
              <div key={item.data.id} className="main-wrapper">
                <div className="order-img w-32 h-32" key={item.data.id}>
                  <img
                    src={item.data.imageURL}
                    alt="menu_item"
                    className="rounded-full"
                  />
                </div>
                <div className="order-name">{item.data.name}</div>
                <div className="order-price">{item.data.price * item.count}</div>
                <Button item={item} updateItem={updateItem}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Menu;
