//Main Cotainer Component

import { useEffect, useState } from "react";
import { AddRowButton } from "../components/row/AddRowButton";
import { Result } from "../components/result/Result";
import { Row } from "../components/row/Row";
import { Calculate, ValidateAllRows, ValidateRow } from "../utilities/Utilities";
import { ToastMessage } from "../components/toast/Toast";

export const CalculatorContainer = (props) => {

    //Use rows to store rows of values and actions
    const [rows, setRows] = useState([]);

    //Use result to store final result and display it
    const [result, setResult] = useState(0);

    //Listen to change in rows value to calcuate the result
    useEffect(() => {
        //Calculate final result using imported function Calculate() 
        const result = Calculate(rows);
        setResult(result);

        //Close error message if there is any 
        closeToast();
    }, [rows]);

    //Use message to store error message
    const [message, setMessage] = useState('');

    //Use showToast for showing error messages
    const [showToast, setShowToast] = useState(false);

    //Use rowId for Unique key for list of rows
    const [rowId, setRowId] = useState(0);

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
                id: rowId
            }
            //Add new row to state
            setRows((prev) => [newRow, ...prev]);
            //Increement row id by one
            setRowId((prev) => prev + 1);
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