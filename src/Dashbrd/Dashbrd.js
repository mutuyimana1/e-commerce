import React from "react";
import DashLayout from "../CDashboard/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const items = [
  { name: "Dashboard", icon: <InboxIcon /> },
  { name: "Product", icon: <InboxIcon /> },
  { name: "Order", icon: <InboxIcon /> },
  { name: "Checkout", icon: <InboxIcon /> },
  { name: "Customer", icon: <InboxIcon /> },
  { name:"setting", icon:<InboxIcon/>}
  
];
const View = () => {
  return (
    <DashLayout siderItems={items}>
      <h1>Client Dash</h1>
    </DashLayout>
  );
};

export default View;
