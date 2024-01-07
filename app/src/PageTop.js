import React from 'react';
import "./style.css";

import MainLogo from "./assets/main-logo.jpg";

const PageTop = () => {
    return (
        <div className='page-top' >
            <div className='top-logo' >
                <div className='main-logo' >
                    <img src={MainLogo} alt="main-logo" />
                </div>
                <div className='main-text' >
                    S.H.I.E.L.D.
                </div>

            </div>
            {/* <div className='top-socials' >
                <span>
                    LinkedIn
                </span>
            </div> */}
        </div>
    )
}

export default PageTop