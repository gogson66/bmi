import './Input.css'

function Input(props) {
    const classes = `input ${props.className}`
    return <input className={classes} type="number" min="1" max={props.max} step="1" onChange={props.onChange} value={props.value} placeholder={props.placeholder}></input>
}

export default Input