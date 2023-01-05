const Button = (props) => {

    return (
        <button className="clockButton" onClick={props.onClick}>{props.title}</button>
    )

}

export default Button;