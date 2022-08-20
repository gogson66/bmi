import './Button.css'

function Button(props) {
    

    return <button onClick={props.onClick}  className="button" type={props.type}>{props.children}</button>
}


export default Button