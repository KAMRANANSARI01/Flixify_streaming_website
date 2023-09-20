import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contenWrapper/ContentWrapper";
const Error = () => {
    return (
        <div className="Error">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};
export default Error;
