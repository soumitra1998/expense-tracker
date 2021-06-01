import React,{useState} from 'react';
import './Add.css';
import Base from './Base';
import Type from './Type';
import Category from './Category';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import db from './Firebase';
import firebase from 'firebase';

const Add = () => {
    const [values,setValues]=useState({
        name:"",
        descirption:"",
        type:"",
        category:"",
        price:"",
        dates:"",
        success:false
    });
    const {name,descirption,type,category,price,dates,success}=values;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleChange = name => event => {
        
        setValues({ ...values, success: false, [name]: event.target.value });
      };

    const handleDateChange = (date) => {
      setSelectedDate(date);
      setValues({...values,dates:date.toString()});
   
    };
    const onSubmit=event=>{
        event.preventDefault();
        setValues({ ...values, success: true});
        console.log(values)
        db.collection("expenses").add({
            name:name,
            descirption:descirption,
            type:type,
            category:category,
            price:price,
            dates:dates,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        .then((docRef)=>{
            setValues({...values,name:"",descirption:"",type:"",category:"",price:"",dates:"",success:""})
            console.log("document written with ID:",docRef.id)
        })
        .catch((error)=>{
            console.error("error in addin document ",error);
        })
    }
    
    return (
        <div>
            <Base title="add your new income /expense">
                <div className="add-form">
                    <form>
                        {/* <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} /> */}
                        <FormControl className="add-form-control">
                            <TextField id="standard-secondary" label="Name" color="primary" value={name} onChange={handleChange("name")} /> 
                        </FormControl><br/>
                        <FormControl className="add-form-control">
                            <TextField id="standard-secondary" label="Description" color="primary" value={descirption} onChange={handleChange("descirption")}/> 
                        </FormControl><br/>
                        <FormControl className="add-form-control">
                            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={type}
                                onChange={handleChange("type")}
                            
                                >
                                
                                <MenuItem value={Type.EXPENSE}>EXPENSE</MenuItem>
                                <MenuItem value={Type.INCOME}>INCOME</MenuItem>
                                
                            </Select> 
                        </FormControl><br/>
                        <FormControl className="add-form-control">
                            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                            <Select
                                id="demo-simple-select-helper"
                                value={category}
                                onChange={handleChange("category")}
                            
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={Category.LUXURY}>LUXURY</MenuItem>
                                <MenuItem value={Category.NECESSARY}>NECESSARY</MenuItem>
                                
                            </Select> 
                        </FormControl><br/>
                        <FormControl className="add-form-control">
                            <TextField id="standard-secondary" label="price" color="primary" value={price} onChange={handleChange("price")} /> 
                        </FormControl><br/>
                        <FormControl className="add-form-control">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                            </MuiPickersUtilsProvider>
                        </FormControl><br/>
                        <Button className="add-form-control" variant="contained" color="primary" size="large" onClick={onSubmit}>
                            ADD
                        </Button>
                        <p style={{display:success? " ":"none"}}>added</p> 
                    </form>
                </div>
            </Base>
        </div>
    )
}

export default Add
