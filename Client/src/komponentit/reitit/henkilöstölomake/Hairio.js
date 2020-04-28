import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getHairio} from "./lomakeService"

const useStyles = makeStyles(theme => ({
    formControl: {
      opacity: "65%",
      margin: theme.spacing(1),
      minWidth: 256,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function Hairio(props) {
    const classes = useStyles();

    const [häiriö, setHäiriö] = useState({hairio:[]})

    useEffect(()=>{
      importHairio();
    },[]);

    var importHairio= ()=>{
      getHairio().then(res => {
          console.log(res.data)
          setHäiriö({hairio: res.data})
          });
    }
    var häiriölista = häiriö.hairio.map( b => {
      return ( <MenuItem key={b.id} value={b.id}>{b.hairio}</MenuItem>) ;
      })
          
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="häiriö">Häiriö</InputLabel>
          <Select
            labelId="häiriö"
            id="häiriö"
            onChange={props.handleChange("lisääHäiriö")}
            defaultValue={props.values.lisääHäiriö}
          >
            {häiriölista}
          
          </Select>
        </FormControl>
        </div>
  );
}