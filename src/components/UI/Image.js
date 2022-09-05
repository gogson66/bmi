import styles from './Image.module.css'


function Image(props) {
    const classes = props.className.split(' ').map(klasa => styles[klasa]).join(' ')
    
    return <img className={classes} src={props.src} alt={props.alt}></img>
}

export default Image