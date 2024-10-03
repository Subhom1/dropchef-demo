import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { menuState } from "../state/atoms/MenuState";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { IP, token } from "../../constant";

const OrderDetails = ({selectedMenus}) => {
  const location = useLocation();
  const { pathname } = location;
// console.log(menus.filter(i => i.selected),'menus')

  return (
    <div>
      <Header pathname={pathname} />
      <div className="order-details-container">
        <h3>Order Summary</h3>
        {selectedMenus?.map((item,index)=>{
            if (item.selected){
              return (
                <div className="order-img" key={item.data.id}>
                  <img
                    src={item.data.imageURL}
                    alt="menu_item"
                    className="rounded-t-xl"
                  />
                </div>
              )};
        })}
        
      </div>
    </div>
  );
};

export default OrderDetails;
