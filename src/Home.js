import React,{useState,useEffect} from 'react';
import "./Home.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Base from './Base';
import db from './Firebase';

const Home = () => {
    const [expenses,setExpenses]=useState([]);
    const[open,setOpen]=useState(false);
   
    const handleClose=()=>{
        setOpen(false)
    }
    const deleteExpense=(id)=>{
        console.log(id);
        db.collection("expenses").doc(id).delete().then(()=>{
            console.log("document successfully deleted");
            
        }).catch((error)=>{
            console.log("some error occured during deletion")
        });

    }
  useEffect(()=>{
    db.collection("expenses").orderBy("timestamp","asc").onSnapshot(snapShot=>{
        console.log(snapShot.docs.map(doc=>doc.data()));
        setExpenses(snapShot.docs.map(doc=>({id:doc.id,ex:doc.data()})));
    })

  },[]);

   
    return (
        <div >
            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div className="Modal-text">
                        <p>Are you sure???</p>
                        <Button variant="contained" color="primary"  >YES</Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>NO</Button>
                    </div>
            </Modal>
            <Base title="Your expenses">  
                <div className="home">
                    <TableContainer component={Paper} >
                        <Table  aria-label="simple table">
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell  >Name</TableCell>
                                    <TableCell >Description</TableCell>
                                    <TableCell >Category</TableCell>
                                    <TableCell >Price</TableCell>
                                    <TableCell >Date</TableCell>
                                    <TableCell >Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    expenses.map((expense)=>(
                                        <TableRow key={expense.ex.name}>
                                            <TableCell component="th" scope="row">{expense.ex.name}</TableCell>
                                            <TableCell >{expense.ex.descirption}</TableCell>
                                            <TableCell >{expense.ex.category}</TableCell>
                                            <TableCell  style={expense.ex.type==="expense"?{color:"Red"}:{color:"Green"}}>{expense.ex.price}</TableCell>
                                            <TableCell >{expense.ex.dates.slice(0,15)}</TableCell>
                                            <TableCell className="table-action">
                                                <Button type="button" >
                                                    <EditIcon/>
                                                </Button>
                                                <Button type="button" onClick={()=>deleteExpense(expense.id)}>
                                                    <DeleteIcon/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Base>
        </div>
    )
}

export default Home
