import React, { useState, useEffect } from "react";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const SelectVan = (props) => {
    const [sVan, setSVan] = React.useState(false);
    const [mVan, setMVan] = React.useState(true);
    const [lVan, setLVan] = React.useState(false);
    const [xVan, setXVan] = React.useState(false);
    const [iNeedHelp, setINeedHelp] = React.useState(true);
    
    const setActiveVan = (value) => {
        console.log('setActiveVan', value)
    }

    const iNeedHelpFunc = (event) => {
        setINeedHelp(!event.target.checked);
    };

    return (
        <>
            <div className="card-heading mb-31">
                <h2>Select a van size</h2>
            </div>

            <div className="mb-31 van-wrap">
                <div className={sVan? "van-box" : "van-box"} onClick={()=>setActiveVan('s-van')}>
                    <img src="/s-van.svg" alt="s-van" />
                    <p>Small</p>
                </div>
                <div className={mVan? "van-box van-box-active" : "van-box"} onClick={()=>setActiveVan('m-van')}>
                    {/* <img src="/s-van.svg" alt="s-van" /> */}
                    <svg width="75" height="36" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.5207 0.422363H29.3762C29.3027 0.422363 29.2537 0.422363 29.1802 0.422363C28.0777 0.521448 26.4852 0.74439 24.7212 1.41321C20.2867 3.09766 18.9637 5.89682 15.3132 8.99323C14.1617 9.95931 13.2062 10.4547 11.4422 11.5694C9.40867 12.8575 7.98767 13.6502 6.93417 14.1952C4.92517 15.2356 4.63117 15.1861 3.96967 15.7558C2.54867 17.0191 2.08317 18.8522 1.93617 20.2394C1.02967 23.9551 0.73567 26.8533 0.95617 28.1167C1.02967 28.4635 1.15217 29.2066 1.74017 29.7516C2.18117 30.1727 2.76917 30.4204 3.40617 30.4204H9.99667C10.7562 33.2691 13.3287 35.3747 16.3912 35.3747C19.4537 35.3747 22.0262 33.2691 22.7857 30.4204H57.7227C58.3842 33.3929 61.0302 35.6224 64.1662 35.6224C67.3022 35.6224 69.9482 33.3929 70.6097 30.4204H72.4962C73.8437 30.4204 74.9462 29.3057 74.9462 27.9433V2.89949C74.9707 1.53707 73.8682 0.422363 72.5207 0.422363ZM32.0957 11.074C32.0957 11.7676 31.5567 12.3126 30.8707 12.3126H19.9437C19.0372 12.3126 18.4492 11.3465 18.8412 10.529C19.6742 8.8446 21.2912 6.44179 24.2312 4.8812C26.8772 3.494 29.4007 3.39492 30.9442 3.51877C31.5812 3.56832 32.0712 4.11329 32.0712 4.75734V11.074H32.0957Z" fill="#23274F"/>
                    </svg>
                    <p>Medium</p>
                </div>
                <div className={lVan? "van-box" : "van-box"} onClick={()=>setActiveVan('l-van')}>
                    <img src="/s-van.svg" alt="s-van" />
                    <p>Large</p>
                </div>
                <div className={xVan? "van-box" : "van-box"} onClick={()=>setActiveVan('x-van')}>
                    <img src="/s-van.svg" alt="s-van" />
                    <p>X-Large</p>
                </div>
            </div>

            <div className={"card-slection mb-20"}>
                <Checkbox
                    checked={iNeedHelp}
                    onChange={iNeedHelpFunc}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <p><strong>I need help moving my items</strong></p>
                <p>Need help? Ask your driver to assist </p>
            </div>

            <div className={"delivery-options-wrap mb-20"}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="delivery-options">
                            <p><strong>What floor are you on? </strong></p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="delivery-options">
                            <p><strong>Is there an Elevator? </strong></p>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className={"price-wrap mb-20"}>
                <div className="delivery-options text-center">
                    <p><strong>Your fare estimate is: </strong></p>
                    <p className="text-large">£ 25</p>
                </div>
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                >
                    Back
                </Button>

                <Button
                    key={"Next"}
                    className="darkbutton"
                    sx={{ mb: "16px" }}
                >
                    Add payment option
                </Button>  
            </div>
        </>
    );
};
export default SelectVan;