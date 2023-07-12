import * as React from 'react';

const Sidepanel = () => {
    return (
        <div className="side-panel">
            <div className="side-panel-inner">
                <div className="side-panel-top-logo">
                    <img src="/static/images/logoWords.png" alt="Schematiq Logo" loading="lazy" />
                </div>
                <div className="side-panel-top-search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="side-panel-menu">
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/textbook.svg" alt="Textbook" className="side-panel-icon-img" />
                        <span className="icon-text">Textbook</span>
                    </div>
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/notes.svg" alt="Notes" className="side-panel-icon-img" />
                        <span className="icon-text">Notes</span>
                    </div>
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/tag.svg" alt="Tags" className="side-panel-icon-img" />
                        <span className="icon-text">Tags</span>
                    </div>
                </div>
                <div className="side-panel-footer">
                    <div className="side-panel-footer-user">
                        <div className="side-panel-footer-user-icon">
                            <img src="/static/icons/user.svg" alt="" className="side-panel-icon-img" />
                        </div>
                        <div className="side-panel-footer-user-details">
                            <div>Username: John Doe</div>
                            <div>Email:
                                <span className="side-panel-footer-user-details-email">
                                    john@aaa.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidepanel;