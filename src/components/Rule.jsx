import Image_rules_bonus from "../assets/icons/Image_rules_bonus"
import Image_rules from "../assets/icons/Image_rules"

import "../styles/rule.css"
import Close from "../assets/icons/Close"
import { useState } from "react"

const Rule = () => {
    const [rule , setRule] = useState(false)
    return (
        <div className="ruleContainer">

            <button 
                onClick={()=>setRule(true)}
            >Rules</button>

            {rule && 
                <div className="modal">
                    <div className="text">
                        <p>RULES</p>
                        <p onClick={()=>setRule(false)}><Close/></p>
                    </div>
                    <Image_rules_bonus/>
                </div>
            }

        </div>
    )
}

export default Rule
