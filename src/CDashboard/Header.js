import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import { Card, ListItemText } from "@mui/material";
import "../views/Dashbord/Dashboard.css"






export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
<Grid container spacing={${spacing}}>
`;
const items = [
  { name: "Total Product" }]
return (
  <Grid sx={{ flexGrow: 1,bgcolor:"gray",padding:"1rem"}} container spacing={1}>
    <Grid item xs={10}>
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2,3].map((item) => (
          <Grid key={item} item>
            
            <Card
              sx={{
                height: 80,
                width: 150,
                position:"relative",
                top:"2px",
              }}
              primary="Total Product"
              
            > <h1 className="Product">Total Product</h1>
            <h2 className="Money">1000frw</h2>
            </Card>
            
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
};
