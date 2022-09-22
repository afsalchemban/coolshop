import { useEffect, useState } from "react";
import { AddRowButton } from "../components/AddRowButton";
import { Result } from "../components/Result";
import { Row } from "../components/Row";
import Calculate from "../library/Calculate";

export const CalculatorContainer = (props) => {

    //set rows in the state
    const [rows, setRows] = useState([]);
    //set result in state
    const [result, setResult] = useState(0);
    //set lastusedKey in state
    const [lastKey,setLastKey] = useState(0);

    //handle add row button click
    const handleAddRowButtonClick = (e)=>{
        e.preventDefault();
        const newRow = {
            isDisabled:false,
            operation:'+',
            value:0,
            id:lastKey
        }
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

    //update rows in the state
    const updateRowByNumber = (row,value)=>{
        setRows((prev)=>prev.map((obj)=>{
            if(row.id === obj.id){
                return {...obj, value: value};
            }
            return obj;
        }));
    }

    const updateRowByOperation = (row,value)=>{
        setRows((prev)=>prev.map((obj)=>{
            if(row.id === obj.id){
                return {...obj, operation: value};
            }
            return obj;
        }));
    }

    //calculate result when rows update using custom Calculate() function by import
    useEffect(()=>{
        const result = Calculate(rows);
        setResult(result);
    },[rows]);
    
    return (
        <div>
            <h1>React Calculator</h1>
            <AddRowButton onClick={handleAddRowButtonClick} />
            <ul>
                {
                    rows.map((row) => (
                        <Row key={row.id} row={row} deleteRow={deleteRow} updateRowByNumber={updateRowByNumber} updateRowByOperation={updateRowByOperation} toggleDisableRow={toggleDisableRow} />
                    ))
                }
            </ul>
            <Result result={result}/>
        </div>
    );
}