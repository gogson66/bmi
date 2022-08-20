import './CardFace.css'

function CardFace(props) {

    const classes = `card-face ${props.className}`
    return <div className={classes}>{props.children}</div>
}

export default CardFace