import { Link } from "react-router-dom";


export function UserInvalid(){
    return(
        <div>
            <h3>Invalid </h3>
            <Link to="/login">Try again</Link>
        </div>
    )
}