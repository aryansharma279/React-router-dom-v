import React, { useState, useEffect } from "react";
import Employees from "../employees/Employees";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import './Data.css';

const Data = () => {
  let [record, setRecord] = useState(4);
  let [empData, setEmpData] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${record}&idStarts=1001`
      );
      let resData = await res.json();
      console.log(resData);
      console.log(empData);
      setEmpData(resData);
      //   console.log(empData);
    }
    getData();
  },[record]);

  return (
    <div >
     
      <div className="data-block">
      <Grid container spacing={2}>
        {empData.map((e, i) => {
          return (
            <Grid item xs={3} key={i} >
              <Employees        
                firstName={e.firstName}
                img={e.imageUrl}
                email={e.email}
                index={i}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
      <Button variant="contained" onClick={()=> setRecord(record+4)} >Load More...</Button>
     
      
    </div>
  );
};

export default Data;
