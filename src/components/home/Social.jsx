import React from 'react';

const Social = () => {

    const copyPhoneToClipboard = () => {
        navigator.clipboard.writeText('+1 (312)-479-6193');
        alert('Phone number copied to clipboard!');
    };

    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/prakritisharma31/" className="home_social-icon" target="__blank" style={{ color: 'black' }}>
                <i className="uil uil-linkedin" style={{ color: 'black' }}></i>
            </a>

            {/* Phone icon: copy to clipboard */}
            <div className="home_social-icon" onClick={copyPhoneToClipboard} style={{ cursor: 'pointer', color: 'black' }}>
                <i className="uil uil-phone" style={{ color: 'black' }}></i>
            </div>

            {/* Email: opens default mail client */}
            <a href="mailto:psharma23@hawk.iit.edu" className="home_social-icon" target="__blank" style={{ color: 'black' }}>
                <i className="uil uil-envelope" style={{ color: 'black' }}></i>
            </a>

            <a href="https://github.com/prakriti31" className="home_social-icon" target="__blank" style={{ color: 'black' }}>
                <i className="uil uil-github-alt" style={{ color: 'black' }}></i>
            </a>
        </div>
    );
};

export default Social;
