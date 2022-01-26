import React, { useState, useEffect } from "react";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { unstable_useIsFocusVisible } from "@mui/utils";

const MyItemsList = (props) => {
  useEffect(() => {
    var submitedArray = {
      items: [],
      "custom item": [],
    };
    let filteredArray = props.myItemsList.map((element) => {
      // return {...element, subElements: element.subitems.filter((subElement) => subElement.quantity === 1)}
      return { ...element, subitems: element.subitems.filter((subElement) => subElement.quantity > 0) };
    });
    var filteredEmpty = filteredArray.filter(function (el) {
      return el.subitems.length > 0;
    });

    // console.log('ApiRes localStorage', filteredEmpty);
    // localStorage.setItem("ApiRes == 1", JSON.stringify(filteredEmpty));

    let filteredArrayForPush = props.myItemsList.map((element, i) => {
      console.log("sssss main map", element);
      if (element.name === "Custom Items") {
        // console.log('sssss Custom Items', props.myItemsList.filter((subElement) => subElement.name === 'Custom Items'))
        props.myItemsList.filter((subElement) => {
          if (subElement.name === "Custom Items") {
            // if (submitedArray['custom item'].contains(subElement.subitems[0].name)) {

            // if(neItem == subElement.subitems[0].quantity){
            //     console.log('custom item 233 name found', neItem)
            // }
            // submitedArray['custom item'] = []

            // submitedArray['custom item'].length>0 ? submitedArray['custom item'].map((item, i) =>{
            // console.log('custom item 233 name found', item.name , subElement.subitems[0].name)
            // if(item.name !== subElement.subitems[0].name){
            submitedArray["custom item"].push({
              is_custom: true,
              quantity: subElement.subitems[0].quantity,
              name: subElement.subitems[0].name,
              description: subElement.subitems[0].instructions,
              dim_x: subElement.subitems[0].dim_x,
              dim_y: subElement.subitems[0].dim_y,
              dim_z: subElement.subitems[0].dim_z,
            });
            //     }
            // }):null
            // console.log('custom item 233', neItem)
            // }
          }
        });
      } else {
        return element.subitems.filter((ele, i) => {
          if (ele.quantity > 0) {
            submitedArray["items"].push({
              id: ele.id,
              quantity: ele.quantity,
            });
          }
        });
      }
    });

    // var ages = submitedArray['custom item'].map(function(obj) { return obj; });
    // var ages2 = ages.map(function(v,i) { return v });
    // console.log('submitedArray - Items', submitedArray['custom item'])
    // submitedArray['custom item'].filter((value, index, self) => {
    //     return self.findIndex(v => v.name === value.name) === index;
    //   }).map(ele => {
    //     console.log('submitedArray - custom item', ele)
    //     submitedArray['custom item'].push(
    //         ele
    //     )
    //   });
    const unique = [...new Map(submitedArray["custom item"].map((item) => [item["name"], item])).values()];
    console.log("submitedArray - custom item unique", unique);
    submitedArray["custom item"] = [];

    // if(unique.length>0){
    //     submitedArray['custom item'].push(unique)
    //     console.log('submitedArray - all before', unique)
    unique.map((uni) => submitedArray["custom item"].push(uni));
    // }else{
    //     // submitedArray['custom item'].push(unique)
    //     unique.map((uni)=> submitedArray['custom item'].push(uni))
    //     console.log('submitedArray - all else', unique)
    // }
    // submitedArray['custom item'].push(unique[0])
    console.log("submitedArray - all", submitedArray);
    localStorage.setItem("TripObject", JSON.stringify(submitedArray));
    // var submitedArray = {
    //     'items': [],
    //     'custom item': []
    // }
    // const submitedArrayNew = submitedArray['items'].push(
    //     {
    //         'id': qty.id,
    //         'quantity': qty.quantity
    //     }
    // )
  }, [props]);
  return (
    <div className="white date-card">
      <div className="card-content">
        <div className="card-heading mb-31">
          <h2>My Items</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="m-h-130">
          {console.log("props.myItemsList >> ", props.myItemsList)}
          {props.myItemsList &&
            props.myItemsList.map((item, i) => {
              return item.subitems.length > 0
                ? item.subitems.map((childitem, i) => {
                  return (
                    <>
                      {childitem.quantity > 0 ? (
                        <div className="child-items" key={i}>
                          {childitem.name}
                          <div className="cart-list">
                            <Button
                              key={"-"}
                              className="cart-increase"
                              onClick={() => props.decreaseQty(childitem, i, item.id)}
                            >
                              {" "}
                                -{" "}
                            </Button>
                            <TextField id="qty" value={childitem.quantity} />
                            <Button
                              key={"+"}
                              className="cart-increase"
                              onClick={() => props.increaseQty(childitem, i, item.id)}
                            >
                              {" "}
                                +{" "}
                            </Button>
                            <Button
                              key={"x"}
                              className="cart-clear"
                              onClick={() => props.clearQty(childitem, i, item.id)}
                            >
                              <img src="/clear.svg" alt="Remove" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className={childitem.quantity > 0 ? "display-none" : "position-relative"}>
                          <span> Add items to your list</span>
                        </p>
                      )}
                    </>
                  );
                })
                : null;
            })}
        </div>
      </div>
    </div>
  );
};
export default MyItemsList;
