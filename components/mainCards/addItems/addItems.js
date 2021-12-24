import React, { useState, useEffect } from "react";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const AddItems = (props) => {
    const [fillVanChecked, setfillVanChecked] = React.useState(true);
    const [scheduleVanChecked, setscheduleVanChecked] = React.useState(false);
    const [allData, setAllData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        setAllData(itemsList)
        setFilteredData(itemsList)
    }, [fillVanChecked,scheduleVanChecked]);

    const itemsList = [
        {
            'key':1,
            'title':'Parent',
            'subitems':[
                {
                    'title':'yyyyyy',
                    'quantity':1,
                    'width':'30',
                    'height':'23',
                    'depth':'14',
                    'instructions':'instructions here',
                },
                {
                    'title':'zzzzzzz',
                    'quantity':1,
                    'width':'30',
                    'height':'23',
                    'depth':'14',
                    'instructions':'instructions here',
                },
                {
                    'title':'cccccccc',
                    'quantity':0,
                    'width':'30',
                    'height':'23',
                    'depth':'14',
                    'instructions':'instructions here',
                }
            ]
        },
        {
            'key':2,
            'title':'Parent2',
            'subitems':[
                {
                    'title':'dddddddd',
                    'quantity':0,
                    'width':'30',
                    'height':'23',
                    'depth':'14',
                    'instructions':'instructions here',
                }
            ]
        },
        {
            'key':3,
            'title':'Parent3',
            'subitems':[
                {
                    'title':'ffffffff',
                    'quantity':0,
                    'width':'30',
                    'height':'23',
                    'depth':'14',
                    'instructions':'instructions here',
                }
            ]
        }
    ]

    const filterData = (e) => {
        const filterValue = e.target.value
        const editedTaskList = itemsList.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
        setFilteredData(editedTaskList)
    }
    
    return (
        <>
            <div className="card-heading mb-31">
                <h2>Add Items</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center' }} className="mb-31 search-box">
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" variant="outlined" placeholder="Search" onChange={filterData}/>
            </Box>

            <div className="mb-31">
                {filteredData.length > 0 ? <p>Or quickly add items from a list of popular rooms:</p> : null}
                {filteredData.length <= 0 ? <p>0 Items Found</p> : null}
                <div className="items-list mb-20">
                    {filteredData && filteredData.map((list,i)=>{
                        return(
                            <Accordion expanded={expanded === list.key} onChange={handleChange(list.key)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                <Typography sx={{ color: 'text.secondary' }}>{list.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                        {list.subitems.map((item,i)=>{
                                            return(
                                                <div className="child-items">
                                                    {item.title}
                                                    <span>
                                                        <Button key={"-"} className="cart-increase"> - </Button>
                                                        <TextField id="qty" value={item.quantity}/>
                                                        <Button key={"+"} className="cart-increase"> + </Button>
                                                    </span>
                                                </div>
                                            )
                                        })}
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
                <p>Cant find what you need? Add a custom item <span className="link">here</span></p>
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                    onClick={props.goBackThirdScreen}
                >
                    Back
                </Button>

                <Button
                    key={"Next"}
                    className="darkbutton"
                    sx={{ mb: "16px" }}
                >
                    Next
                </Button>  
            </div>
        </>
    );
};
export default AddItems;