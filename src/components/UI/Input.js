import './Input.css'

function Input(props) {
    

    const classes = `input ${props.className}`

    return <input className={classes} type="number" min="1" step="1" max={props.max} onChange={props.onChange} value={props.value} placeholder={props.placeholder} required></input>
}

export default Input