import "../styles/choose.css"
const ChooseComp = ( {children , className , winner }) => {
    return (
        <div className={`icon_choose ${className}  ${winner ? "shadow" : ""}`}>
             <div className="iconContainer">
               {children}    
            </div>
        </div>
    )
}

export default ChooseComp
