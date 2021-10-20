
export const Checkbox = ({ title, name, onChange }) => {
    return (
        <label>
            <input type="checkbox" name={ name } onChange={ onChange }/>
            <span>{ title }</span>
        </label>
    );
};