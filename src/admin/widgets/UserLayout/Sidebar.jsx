import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu">
          <li className="treeview active">
            <a role="button">
              <i className="fa fa-clock-o"></i>
              <span>Content</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <Link to="/admin/posts">
                  <i className="fa fa-child"></i>
                  <span>Posts</span>
                </Link>
              </li>
              <li>
                <Link to="/diary/tags">
                  <i className="fa fa-tags"></i>
                  <span>Tags</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar