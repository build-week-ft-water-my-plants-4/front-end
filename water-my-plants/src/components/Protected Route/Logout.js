
import React, {useEffect} from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Logout = (props) => {
    useEffect(() => {
           axiosWithAuth().delete("/logout", {
            }).then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem("phone_number");
                localStorage.removeItem("usename");
                props.history.push("/login")
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return(<div></div>);
}

export default Logout;