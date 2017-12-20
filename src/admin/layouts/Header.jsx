import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as common from '../../common/actions'

const Header = ({ children, username, logout }) => {
	return (
		<header className="main-header">
			<a role="button" className="logo">
				<span className="logo-mini"><b>NB</b></span>
				<span className="logo-lg">Note<b>Book</b></span>
			</a>
			<nav className="navbar navbar-static-top">
				<a className="sidebar-toggle" data-toggle="push-menu" role="button">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</a>

				<div className="navbar-custom-menu">
					<ul className="nav navbar-nav">
						<li className="dropdown user">
							<a role="button" className="dropdown-toggle" data-toggle="dropdown">
								<span><i className="fa fa-user"></i>&nbsp;&nbsp;
								{ username }</span>
							</a>
							<ul className="dropdown-menu">
								<li><Link to="/profile">Profile</Link></li>
								<li><a role="button" onClick={logout}>Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

const mapStateToProps = state => {
	return {
		username: state.common.identity.username
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(common.clearIdentity())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)