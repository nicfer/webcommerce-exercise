function AttribField(props) {
    return (
        <label>
            {props.label}
            <input type={props.type == null ? 'text' : props.type} value={props.attrib} onChange={(e) => props.handleChange(e.target.value)} />
        </label>
    )
}
export default AttribField