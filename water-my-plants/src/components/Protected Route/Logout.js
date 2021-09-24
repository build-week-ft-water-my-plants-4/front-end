
import React, {useEffect} from "react";
import { useHistory } from "react-router";

const Logout = (props) => {
    
    const { push } = useHistory();
    const { setUserLoggedIn } = props;

    useEffect(() => {
            localStorage.removeItem('token');
            setUserLoggedIn(false);
            push("/");
    })

    return(<div></div>);
}

export default Logout;