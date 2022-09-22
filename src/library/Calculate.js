export default function Calculate(rows) {
    return rows.filter((row)=>!row.isDisabled).reduce((accumulator, currentValue) => {
        if (currentValue.operation === '+') {
            return accumulator + parseInt(currentValue.value);
        }
        return accumulator - parseInt(currentValue.value);
    }, 0);
}