import React from 'react';
import './NotMatch.css';
const NotMatch = () => {
    return (
        <div className="bg-dark">
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href="/">Report</a>
                    <a href="/">Homepage</a>
                </div>
            </div>
        </div>
    );
};

export default NotMatch;