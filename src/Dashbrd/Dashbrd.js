import React from "react";
import DashLayout from "../CDashboard/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import "../views/Dashbord/Dashboard.css"

  
 // Sample data
const data = [
  { argument: '100vh', value: 30 },
  { argument: '70vh', value: 20 },
  { argument: '50vh', value: 10 },
  { argument: '40vh', value: 50 },
  { argument: '30vh', value: 60 },
];
// Sample data
const datas = [
  { argument:'30vh', value:10 },
  { argument:'30vh', value:40 },
  { argument:'30vh', value:10 },
  { argument:'30vh', value:20 },
  { argument:'30vh', value:20 },
];
  
const items = [
  { name: "Dashboard", icon: <PeopleAltIcon sx={{color:"pink"}} /> },
  { name: "Product", icon: <ProductionQuantityLimitsIcon /> },
  { name: "Order", icon: <FilterFramesIcon /> },
  { name: "Checkout", icon: < BusinessCenterIcon /> },
  { name: "Customer", icon: <PeopleAltIcon /> },
  { name:"setting", icon:<SettingsIcon/>}
  
];
const View = () => {
  return (
    <DashLayout siderItems={items} >
       <Chart
      data={datas}
     sx={{width:"150px",position:"relative",bottom:"40rem",left:"80rem"}}>
      <PieSeries valueField="value" argumentField="argument" />
      <h1 className="categories">Sales Categories</h1>
    </Chart>
      
    <Chart
      data={data}
      sx={{width:"67rem",height:"5rem",position:"relative",bottom:"70rem",left:"30px"}}>
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>

    </DashLayout>
  );
};

export default View;
