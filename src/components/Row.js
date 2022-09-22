import { DeleteButton } from "./DeleteButton";
import { DisableButton } from "./DisableButton";
import { InputField } from "./InputField";
import { OperationDropdown } from "./OperationDropdown";

export const Row = (props) => {

    const { row } = props;
    const handleDeleteClick = () => {
        props.deleteRow(row);
    };
    const handleDisableClick = () => {
        props.toggleDisableRow(row);
    };
    const handleOnChangeNumber = (value) => {
        props.updateRowByNumber(row,value);
    };
    const handleOnChangeOperation = (value) => {
        props.updateRowByOperation(row,value);
    };
    return (
        <li >
            <OperationDropdown onChange={handleOnChangeOperation}/>
            <InputField onChange={handleOnChangeNumber} isDisabled={row.isDisabled}/>
            <DisableButton onClick={handleDisableClick}/>
            <DeleteButton onClick={handleDeleteClick}/>
        </li>
    );
}