import { RandomContext } from "./RandomContext";
import HeaderBar from "../Gearais/HeaderBar";
import User from "./User";

export default function RandonUser() {
    return(
        <div className="container">
            <HeaderBar/>
            <RandomContext.Provider value={"https://randomuser.me/api/"}>
                <User/>
            </RandomContext.Provider>
        </div>
    )
}
