import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CustomItems = (props) => {
    const [quantity, setQuantity] = React.useState(1);
    const [customObject, setCustomObject] = React.useState(
        {
            'key':3,
            'title':'Custom Items',
            'subitems':[]
        }
    );
    const [itemId, setItemId] = React.useState('1');
    const [itemTitle, setItemTitle] = React.useState('');
    const [itemWidth, setItemWidth] = React.useState('');
    const [itemHeight, setItemHeight] = React.useState('');
    const [itemDepth, setItemDepth] = React.useState('');
    const [itemInstructions, setItemInstructions] = React.useState('');
    
    // useEffect(() => {
    //     props.getValueFromCustomForm(customObject)
    // }, []);

    // useEffect(() => {
    //     props.getValueFromCustomForm(customObject)
    // }, []);

    const increaseQty = () => {
        console.log('increaseQty', quantity)
        setQuantity(++quantity)
    }
    const decreaseQty =() =>{
        console.log('decreaseQty', quantity)
        if(quantity<=0){
            setQuantity(0)
        }else{
            setQuantity(--quantity)
        }
    }

    const addToList = () => {
        // setCustomObject(prevState => ({
        //     ...prevState,
        //         subitems:[
        //             ...prevState.subitems,
        //             {
        //                 'id': ++itemId,
        //                 'title':itemTitle,
        //                 'quantity':quantity,
        //                 'width':itemWidth,
        //                 'height':itemHeight,
        //                 'depth':itemDepth,
        //                 'instructions':itemInstructions,
        //             }
        //         ]
        //  }))

         const newData = {
                'id': itemId,
                'title':itemTitle,
                'quantity':quantity,
                'width':itemWidth,
                'height':itemHeight,
                'depth':itemDepth,
                'instructions':itemInstructions,
         }

         console.log('customObject', customObject)

         props.getValueFromCustomForm(newData)

         setTimeout(() => {
            (
                setItemTitle(''),
                setQuantity(0),
                setItemWidth(''),
                setItemHeight(''),
                setItemDepth(''),
                setItemInstructions('')
            )
         }, 100);

    }

    

    return (
        <>
            {console.log('customObject', customObject)}

            <div className="card-heading mb-31">
                <h2>Custom Items</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            

            <div className="mb-31 custom-title">
                <TextField 
                    id="outlined-basic" 
                    label="Item Title *"
                    className="text-input" 
                    variant="outlined" 
                    value={itemTitle} onChange={(e)=>setItemTitle(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
            </div>
            <div className="mb-31 add-items-qty">
                <p>Quantity <span className="color-text">*</span></p>
                <div className="mb-31 cart-list">
                    <Button key={"-"} className="cart-increase" onClick={()=>decreaseQty()}> - </Button>
                    <TextField id="qty" value={quantity}/>
                    <Button key={"+"} className="cart-increase" onClick={increaseQty}> + </Button>
                </div>
            </div>
            <div className="mb-31 dimension-wrap">
                <p className="dimension-text">Dimensions (cm)</p>
                <div className="dimension-box">
                    <TextField id="outlined-basic" label="Width" className="text-input" variant="outlined" 
                        value={itemWidth} placeholder="-" 
                        onChange={(e)=>setItemWidth(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    <TextField id="outlined-basic" label="Height" className="text-input" variant="outlined" 
                        value={itemHeight} placeholder="-" 
                        onChange={(e)=>setItemHeight(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    <TextField id="outlined-basic" label="Depth"  className="text-input" variant="outlined" 
                        value={itemDepth} placeholder="-" 
                        onChange={(e)=>setItemDepth(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                </div>
            </div>
            <div className="mb-31 instructions-wrap">
                <TextField id="outlined-basic" label="Additional instructions (optional)" multiline rows={2} className="text-input" 
                    value={itemInstructions} 
                    onChange={(e)=>setItemInstructions(e.target.value)} variant="outlined"  
                    placeholder="E.g: This box is only glassware - fragile"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                    onClick={props.goBackThirdMainScreen}
                >
                    Back
                </Button>

                <Button
                    key={"Next"}
                    className="darkbutton"
                    sx={{ mb: "16px" }}
                    onClick={addToList}
                    disabled={quantity>0 && itemTitle.length>0? false: true}
                >
                    Add to List
                </Button>  
            </div>
        </>
    );
};
export default CustomItems;