import React, { useMemo } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = useMemo(() => localStorage.getItem("auth"), []);
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component {...props} isAuth={isAuth} onLogin={handleLogin} onLogOut={handleLogOut}/>
        </CardWrapper>
    );
};

export default withFunctions;