import React, {Component} from 'react';

import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        return(
            
            <div id="navbar" className="navbar navbar-default ace-save-state navbar-fixed-top">
                 <div className="navbar-container ace-save-state" id="navbar-container">
                <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span className="sr-only">Toggle sidebar</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                </button>
                <div className="navbar-header pull-left">
                <a href="" className="navbar-brand"><small>
                <i className="fa fa-leaf" /></small>
                </a>
                </div>
                <div className="navbar-buttons navbar-header pull-right" role="navigation">
                <ul className="nav ace-nav">
                    <li className="purple dropdown-modal">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="ace-icon fa fa-bell icon-animated-bell" />
                        <span className="badge badge-important">8</span>
                    </a>
                    <ul className="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                        <li className="dropdown-header">
                        <i className="ace-icon fa fa-exclamation-triangle" />
                        8 Notifications
                        </li>
                        <li className="dropdown-content">
                        <ul className="dropdown-menu dropdown-navbar navbar-pink">
                            <li>
                            <a href="#">
                                <div className="clearfix">
                                <span className="pull-left">
                                    <i className="btn btn-xs no-hover btn-pink fa fa-comment" />
                                    New Comments
                                </span>
                                <span className="pull-right badge badge-info">+12</span>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="btn btn-xs btn-primary fa fa-user" />
                                Bob just signed up as an editor ...
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="clearfix">
                                <span className="pull-left">
                                    <i className="btn btn-xs no-hover btn-success fa fa-shopping-cart" />
                                    New Orders
                                </span>
                                <span className="pull-right badge badge-success">+8</span>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="clearfix">
                                <span className="pull-left">
                                    <i className="btn btn-xs no-hover btn-info fa fa-twitter" />
                                    Followers
                                </span>
                                <span className="pull-right badge badge-info">+11</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown-footer">
                        <a href="#">
                            See all notifications
                            <i className="ace-icon fa fa-arrow-right" />
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="green dropdown-modal">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="ace-icon fa fa-envelope icon-animated-vertical" />
                        <span className="badge badge-success">5</span>
                    </a>
                    <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                        <li className="dropdown-header">
                        <i className="ace-icon fa fa-envelope-o" />
                        5 Messages
                        </li>
                        <li className="dropdown-content">
                        <ul className="dropdown-menu dropdown-navbar">
                            <li>
                            <a href="#" className="clearfix">
                                <img src="%PUBLIC_URL%/../../assets/images/avatars/love.png" className="msg-photo" alt="Alex's Avatar" />
                                <span className="msg-body">
                                <span className="msg-title">
                                    <span className="blue">Alex:</span>
                                    Ciao sociis natoque penatibus et auctor ...
                                </span>
                                <span className="msg-time">
                                    <i className="ace-icon fa fa-clock-o" />
                                    <span>a moment ago</span>
                                </span>
                                </span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="clearfix">
                                <img src="%PUBLIC_URL%/../../assets/images/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
                                <span className="msg-body">
                                <span className="msg-title">
                                    <span className="blue">Susan:</span>
                                    Vestibulum id ligula porta felis euismod ...
                                </span>
                                <span className="msg-time">
                                    <i className="ace-icon fa fa-clock-o" />
                                    <span>20 minutes ago</span>
                                </span>
                                </span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="clearfix">
                                <img src="%PUBLIC_URL%/../../assets/images/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
                                <span className="msg-body">
                                <span className="msg-title">
                                    <span className="blue">Bob:</span>
                                    Nullam quis risus eget urna mollis ornare ...
                                </span>
                                <span className="msg-time">
                                    <i className="ace-icon fa fa-clock-o" />
                                    <span>3:15 pm</span>
                                </span>
                                </span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="clearfix">
                                <img src="%PUBLIC_URL%/../../assets/images/avatars/avatar2.png" className="msg-photo" alt="Kate's Avatar" />
                                <span className="msg-body">
                                <span className="msg-title">
                                    <span className="blue">Kate:</span>
                                    Ciao sociis natoque eget urna mollis ornare ...
                                </span>
                                <span className="msg-time">
                                    <i className="ace-icon fa fa-clock-o" />
                                    <span>1:33 pm</span>
                                </span>
                                </span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="clearfix">
                                <img src="%PUBLIC_URL%/../../assets/images/avatars/avatar5.png" className="msg-photo" alt="Fred's Avatar" />
                                <span className="msg-body">
                                <span className="msg-title">
                                    <span className="blue">Fred:</span>
                                    Vestibulum id penatibus et auctor  ...
                                </span>
                                <span className="msg-time">
                                    <i className="ace-icon fa fa-clock-o" />
                                    <span>10:09 am</span>
                                </span>
                                </span>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown-footer">
                        <a href="inbox.html">
                            See all messages
                            <i className="ace-icon fa fa-arrow-right" />
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="light-blue dropdown-modal">
                    <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                        <img className="nav-user-photo" src="%PUBLIC_URL%/../../assets/images/avatars/user.jpg" alt="Jason's Photo" />
                        <span className="user-info">
                                Đinh Văn Lành
                        </span>
                        <i className="ace-icon fa fa-caret-down" />
                    </a>
                    <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                        <li>
                        <Link  to="/profiles">
                            <i className="ace-icon fa fa-user" />
                            Hô sơ của bạn
                        </Link>
                        </li>
                        <li className="divider" />
                        <li>
                        <a id="id-btn-dialog2" href="/profiles">
                            <i className="ace-icon fa fa-power-off" />
                            Đăng xuất
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>{/* /.navbar-container */}
            </div>
        );
    }
}
export default  Header;