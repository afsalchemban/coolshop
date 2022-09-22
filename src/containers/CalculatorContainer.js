import { useEffect, useState } from "react";
import { AddRowButton } from "../components/AddRowButton";
import { Result } from "../components/Result";
import { Row } from "../components/Row";
import Calculate from "../library/Calculate";

export const CalculatorContainer = (props) => {

    //set rows in the state to store the array of rows
    const [rows, setRows] = useState([]);

    //set result in state to store the final result and show it 
    const [result, setResult] = useState(0);

    //set lastusedKey in state for the purpose of is for each row
    const [lastKey,setLastKey] = useState(0);

    //handle add row button click
    const handleAddRowButtonClick = (e)=>{

        e.preventDefault();

        //Initialise each row by giving default values
        const newRow = {
            isDisabled:false,
            operation:'+',
            value:0,
            id:lastKey
        }
        //Setting state
        setLastKey((prev)=>prev+1);
        setRows((prev)=>[newRow,...prev]);
    }

    //handle disabled button click
    const toggleDisableRow = (row)=>{
        setRows((prev)=>prev.map((obj)=>{
            if(row.id === obj.id){
                return {...obj, isDisabled: !obj.isDisabled};
            }
            return obj;
        }));
    }

    //handle delete button in the row
    const deleteRow = (row)=>{
        setRows((prev)=>prev.filter((item)=>item.id !== row.id));
    }

    //update rows when value changed in input box in the state
    const updateRowByValue = (row,value)=>{
        setRows((prev)=>prev.map((obj)=>{
            if(row.id === obj.id){
                return {...obj, value: value};
            }
            return obj;
        }));
    }

    //update row when operation (plus/minus) changed in the state
    const updateRowByOperation = (row,value)=>{
        setRows((prev)=>prev.map((obj)=>{
            if(row.id === obj.id){
                return {...obj, operation: value};
            }
            return obj;
        }));
    }

    //clisten to change in rows value to calcuate the result
    useEffect(()=>{
        //calculate final result using imported function Calculate() 
        const result = Calculate(rows);
        setResult(result);
    },[rows]);
    
    return (
        <div>
            <h1>React Calculator</h1>
            <AddRowButton onClick={handleAddRowButtonClick} />
            <ul className="row-list">
                {
                    rows.map((row) => (
                        <Row key={row.id} row={row} deleteRow={deleteRow} updateRowByValue={updateRowByValue} updateRowByOperation={updateRowByOperation} toggleDisableRow={toggleDisableRow} />
                    ))
                }
            </ul>
            <Result result={result}/>
        </div>
    );
}