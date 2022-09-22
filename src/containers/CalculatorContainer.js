import { useEffect, useState } from "react";
import { AddRowButton } from "../components/AddRowButton";
import { Result } from "../components/Result";
import { Row } from "../components/Row";
import { Calculate, ValidateAllRows, ValidateRow } from "../library/Utilities";
import { ToastMessage } from "../components/Toast";

export const CalculatorContainer = (props) => {

    //Set rows in the state to store the array of rows
    const [rows, setRows] = useState([]);

    //Set result in state to store the final result and show it 
    const [result, setResult] = useState(0);

    //Set message in state to store the error message  
    const [message, setMessage] = useState('');

    //Set message in state to store to show toast
    const [showToast, setShowToast] = useState(false);

    //Set lastusedKey in state for the purpose of is for each row
    const [lastKey, setLastKey] = useState(0);

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
            handleShowToast('Please enter the value.');
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
            handleShowToast('Please enter the value to continue.');
        } 
    }

    //Delete button in the row
    const deleteRow = (row) => {
        setRows((prev) => prev.filter((item) => item.id !== row.id));
    }

    //Update rows when value changed in input box in the state
    const updateRowByValue = (row, value) => {
        setRows((prev) => prev.map((obj) => {
            if (row.id === obj.id) {
                return { ...obj, value: value };
            }
            return obj;
        }));
    }

    //Update row when operation (plus/minus) changed in the state
    const updateRowByOperation = (row, value) => {
        setRows((prev) => prev.map((obj) => {
            if (row.id === obj.id) {
                return { ...obj, operation: value };
            }
            return obj;
        }));
    }

    //Listen to change in rows value to calcuate the result
    useEffect(() => {
        //Calculate final result using imported function Calculate() 
        const result = Calculate(rows);
        setResult(result);

        //Close toast if there any 
        closeToast();
    }, [rows]);

    //Handle errors when typing by user
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
            <div style={{ top: '50px', right: '50px', position: 'fixed' }}>
                <ToastMessage message={message} showToast={showToast} onCloseToast={closeToast} />
            </div>
        </div>
    );
}