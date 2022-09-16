import React, {Fragment} from 'react';
import './AppFooter.css';


export default function AppFooterFunctionalComponent(props) {
    const currentYear = new Date().getFullYear();
    return (
	<Fragment>
	    <hr />
	    <p className="footer">copyright &copy; 2020 - { currentYear } Acme Ltd. {props.myProp}</p>
	</Fragment>
    );
}
