const MySelect = ({option, defaultValue, value, onChange}) =>{
    return(
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {option.map(option => 
                <option key={option.id} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default MySelect;