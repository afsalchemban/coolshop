//Calculate final result
export const  Calculate = (rows) => {

    //exclude all disabled and empty string when calculating final result
    return rows.filter((row)=>!row.isDisabled&&row.value!=='').reduce((accumulator, currentValue) => {
        if (currentValue.operation === '+') {
            return accumulator + parseInt(currentValue.value);
        }
        return accumulator - parseInt(currentValue.value);
    }, 0);
}

//Validate all rows by checking if it have value
export const ValidateAllRows = (rows) => {
    return rows.filter((row)=>row.value==='').length===0;
}

//Validate single row
export const ValidateRow = (row) => {
    return row.value !== '';
}