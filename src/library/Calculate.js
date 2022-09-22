//function to calculate final result
export default function Calculate(rows) {

    //exclude all disabled and empty string when calculating final result
    return rows.filter((row)=>!row.isDisabled&&row.value!=='').reduce((accumulator, currentValue) => {
        if (currentValue.operation === '+') {
            return accumulator + parseInt(currentValue.value);
        }
        return accumulator - parseInt(currentValue.value);
    }, 0);
}