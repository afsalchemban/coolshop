//Main Cotainer Component

import { useEffect, useState } from "react";
import { AddRowButton } from "../components/row/AddRowButton";
import { Result } from "../components/result/Result";
import { Row } from "../components/row/Row";
import { Calculate, ValidateAllRows, ValidateRow } from "../utilities/Utilities";
import { ToastMessage } from "../components/toast/Toast";

export const CalculatorContainer = (props) => {

    //Set rows in the state to store the array of rows
    const [rows, setRows] = useState([]);

    //Set result in state to store the final result and show it 
    const [result, setResult] = useState(0);

    //Listen to change in rows value to calcuate the result
    useEffect(() => {
        //Calculate final result using imported function Calculate() 
        const result = Calculate(rows);
        setResult(result);

        //Close toast if there any 
        closeToast();
    }, [rows]);

    //Set message in state to store the error message  
    const [message, setMessage] = useState('');

    //Set message in state to store to show toast
    const [showToast, setShowToast] = useState(false);

    //Set lastusedKey in state for the purpose of is for each row
    const [lastKey, setLastKey] = useState(0);

    //Style for Toast
    const toastStyle = { top: '50px', right: '50px', position: 'fixed' };

    //Add row button click
    const handleAddRowButtonClick = (e) => {

        e.preventDefault();

        //Validate existing data before add 
        if (ValidateAllRows(rows)) {

            //Initialise each row by giving default values
            const newRow = {
                isDisabled: false,
                operation: '+',
                value: '',
                id: lastKey
            }
            //Setting state
            setLastKey((prev) => prev + 1);
            setRows((prev) => [newRow, ...prev]);
        }
        else{
            handleShowToast('Cannot Add New Row Without Data in Existing Fields.');
        }
    }

    //Disabled button click
    const toggleDisableRow = (row) => {

        //Validate row before disable
        if(ValidateRow(row)){
            setRows((prev) => prev.map((obj) => {
                if (row.id === obj.id) {
                    return { ...obj, isDisabled: !obj.isDisabled };
                }
                return obj;
            }));
        }
        else{
            handleShowToast('Cannot Disable Row Without Data.');
        } 
    }

    //Delete button in the row
    const deleteRow = (row) => {
        setRows((prev) => prev.filter((item) => item.id !== row.id));
    }

    //Update rows when value changed in input box 
    const updateRowByValue = (row, value) => {
        setRows((prev) => prev.map((obj) => {
            if (row.id === obj.id) {
                return { ...obj, value: value };
            }
            return obj;
        }));
    }

    //Update row when operation (plus/minus) changed 
    const updateRowByOperation = (row, value) => {
        setRows((prev) => prev.map((obj) => {
            if (row.id === obj.id) {
                return { ...obj, operation: value };
            }
            return obj;
        }));
    }

    //Show errors in Toast
    const handleShowToast = (message) => {
        setMessage(message);
        setShowToast(true);
    }

    //Close the toast 
    const closeToast = () => {
        setMessage('');
        setShowToast(false);
    }

    return (
        <div>
            <h1>React Calculator</h1>
            <AddRowButton onClick={handleAddRowButtonClick} />
            <ul className="row-list">
                {
                    rows.map((row) => (
                        <Row key={row.id} 
                            row={row} 
                            deleteRow={deleteRow} 
                            updateRowByValue={updateRowByValue} 
                            updateRowByOperation={updateRowByOperation} 
                            toggleDisableRow={toggleDisableRow} 
                            onValidationError={handleShowToast}
                        />
                    ))
                }
            </ul>
            <Result result={result} />
            <div style={toastStyle}>
                <ToastMessage message={message} showToast={showToast} onCloseToast={closeToast} />
            </div>
        </div>
    );
}