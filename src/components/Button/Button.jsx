import './Button.css'
import whiteArrow from '../../assets/white-arrow.svg'

function Button({ arrow, buttonStyle, loading, children, ...props }){
    return(
        <header>
            <button
                classname={`button ${buttonStyle}`}{...props}>
                    {children} {arrow && <img src={whiteArrow}/>}
            </button>
        </header>
    )
}

export default Button;