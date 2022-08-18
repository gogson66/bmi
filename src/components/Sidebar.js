import './Sidebar.css'


function Sidebar(props) {
    return <div className="sidebar"><p>{props.children}</p></div>
}

export default Sidebar