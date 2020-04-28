import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getLinjat} from "./tilastoService"

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

  export default function SimpleSelect(props) {    
    const classes = useStyles();
    const [linja, setLinja] = useState({nimi:[]})

    useEffect(()=>{
      importLinja();
    },[]);

    var importLinja= ()=>{
      getLinjat().then(res => {
          console.log(res.data)
          setLinja({nimi: res.data})
          });
    }
       
    var linjalista = linja.nimi.map( b => {
      return ( <MenuItem key={b.id} value={b.id}>{b.nimi}</MenuItem>) ;
      })
    
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="linja">Linja*</InputLabel>
          <Select
            labelId="linja"
            id="linja"
            onChange={props.handleChange}
          >
            {linjalista}
          </Select>
        </FormControl><br></br>
        </div>
  );
}