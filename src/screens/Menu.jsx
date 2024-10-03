import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { IP, token } from "../../constant";
import { useRecoilState, useSetRecoilState } from "recoil";
import { menuState } from "../state/atoms/MenuState";
token;
const Menu = () => {
  const setMenu = useSetRecoilState(menuState);
  const [menus, setMenus] = useRecoilState(menuState);
  useEffect(() => {
    axios
      .get(`${IP}/v1/menus/586555`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMenu(res?.data?.recipeKits))
      .catch((e) => console.error(e));
  }, [setMenu]);

  return (
    <div className="main-container mx-20 flex-1">
      <div className="header">
        <div className="logo flex justify-center items-center py-3 mt-3 border-b-2 border-primary_green ">
          <img src="src/assets/logo.png" alt="logo" className="w-32" />
        </div>
        <div className="details bg-base_green w-full my-3 py-3">
          <div className="info flex justify-center flex-col items-center">
            <span className="text-deep_green font-semibold">
              Scheduled - Order #662684
            </span>
            <h3 className="text-3xl my-2">Monday - 08 May</h3>
            <h4 className="text-gray-500">
              Edit by 11:59 pm on Thursday - 04th of May
            </h4>
          </div>
        </div>
      </div>
      <div className="step flex justify-center items-center">
        <div className="wraper flex flex-col justify-center items-center">
          <div className="stage my-2 bg-primary_green rounded-full w-10 h-10 flex justify-center items-center text-white">
            1
          </div>
          <span className="text-black">Select Meals</span>
        </div>
      </div>
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
        {menus?.map((item, index) => {
          console.log(item.data);
          return (
            <div
              className="card m-10 w-72 h-96 rounded-xl bg-slate-200 cursor-pointer"
              key={item.data.id}
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
                  <div className="price mx-3 flex flex-row items-center justify-between">
                    <div className="big">€ 9.99</div>
                    <span className="text-xs"> per serving</span>
                  </div>
                  <button className="button text-xs py-2 px-4 bg-primary_green rounded-full uppercase">add to order</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <footer className=""></footer>
    </div>
  );
};

export default Menu;
