import { Fragment } from "react";
import { ReactComponent as BasketballLogo } from "../../assets/basketball.svg";
import { NavigationContainer, LogoContainer } from "./navigation.styles";


const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <BasketballLogo className='logo' />
                    <h3>BasketballCenter</h3>
                </LogoContainer>
            </NavigationContainer>
        </Fragment>
    );
};

export default Navigation;