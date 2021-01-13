import React from "react";
import "./Body.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";

function Body({ data }) {
  return (
    <div className="body">
      <Grid container>
        {data.map((d) => (
          <Grid item xs={12} sm={4}>
            <Card data={d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Body;
