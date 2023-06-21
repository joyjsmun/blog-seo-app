import { faBrain, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Logo = () => {
    return(
        <div className=" text-3xl text-center py-4 font-heading text-white">
            Blog Oven
            <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-slate-300 pl-2"/>
        </div>
    )
}