import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ children }) => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li className="treeview active">
                        <a role="button">
                            <i className="fa fa-clock-o"></i>
                            <span>Diary</span>
                        </a>
                        <ul className="treeview-menu">
                            <li>
                                <Link to="/diary/activities">
                                    <i className="fa fa-child"></i>
                                    <span>Activity</span>
                                </Link>
                            </li>
                            <li>
                               <Link to="/diary/tags">
                                    <i className="fa fa-tags"></i>
                                    <span>Tag</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="treeview active">
                        <a role="button">
                            <i className="fa fa-sticky-note"></i>
                            <span>Note</span>
                        </a>
                        <ul className="treeview-menu">
                            <li>
                                <a role="button"><i className="fa fa-child"></i>
                                    <span>Post</span>
                                </a>
                            </li>
                            <li>
                                <a role="button"><i className="fa fa-tags"></i>
                                    <span>Tag</span>
                                </a>
                            </li>
                            <li>
                                <a role="button"><i className="fa fa-tags"></i>
                                    <span>Category</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar