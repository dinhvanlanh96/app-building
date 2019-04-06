import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <div id="sidebar" className="sidebar responsive ace-save-state sidebar-fixed">
            <div className="sidebar-shortcuts" id="sidebar-shortcuts">
              <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                <button className="btn btn-success">
                  <i className="ace-icon fa fa-signal" />
                </button>
                <button className="btn btn-info">
                  <i className="ace-icon fa fa-pencil" />
                </button>
                <button className="btn btn-warning">
                  <i className="ace-icon fa fa-users" />
                </button>
                <button className="btn btn-danger">
                  <i className="ace-icon fa fa-cogs" />
                </button>
              </div>
              <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                <span className="btn btn-success" />
                <span className="btn btn-info" />
                <span className="btn btn-warning" />
                <span className="btn btn-danger" />
              </div>
            </div>{/* /.sidebar-shortcuts */}
            <ul className="nav nav-list">
              <li className="Dashboard">
               <Link to="/">
                  <i className="menu-icon fa fa-tachometer" />
                  <span className="menu-text"> Tổng quan </span>
               </Link>
                <b className="arrow" />
              </li>
              <li className="">
                <a href="#"  className="dropdown-toggle">
                  <i className="menu-icon fa fa-home" />
                  <span className="menu-text">
                    Khu trọ
                  </span>
                  <b className="arrow fa fa-angle-down" />
               </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="Buildings">
                   <Link to="/buildings">
                      <i className="menu-icon fa fa-caret-right" />
                      Nhà trọ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className="Rooms">
                    <Link to="/rooms">
                      <i className="menu-icon fa fa-caret-right" />
                      Phòng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className="">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Dịch vụ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className="Devices">
                   <Link to="#"> 
                      <i className="menu-icon fa fa-caret-right" />
                      Thiết bị
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-handshake-o" aria-hidden="true" />
                  <span className="menu-text">
                    Hợp đồng
                  </span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="">
                   <Link to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Hợp đồng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Đặt cọc phòng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Khách thuê
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Lịch sử khách thuê
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-credit-card-alt" aria-hidden="true" />
                  <span className="menu-text">
                    Hóa đơn
                  </span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className= "">
                   <Link to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Điện dước
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Xuất hóa đơn
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Trả phòng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Hàng tháng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                   <Link to="#" >
                      <i className="menu-icon fa fa-caret-right" />
                      Tiền trả trước
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Tiền đặt cọc
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Tiền đặt cọc phòng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Phiếu chi
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link   to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-bar-chart-o" />
                  <span className="menu-text"> Thống kê báo cáo</span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Chung
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Thu chi
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Kỳ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Danh thu
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Dịch vụ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Dư/Nợ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Dự báo
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Phòng trống
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Hợp đồng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Khách thuê
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa fa-cog" />
                  <span className="menu-text"> Hệ thống </span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className= "">
                    <Link  to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Hô sơ cá nhân
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   id="profile" to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Cấu hình chung
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link  to="form-elements.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Danh sách dịch vụ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Công thức
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Đơn vị
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Kỳ báo cáo
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-bullhorn" />
                  <span className="menu-text"> Tiện ích </span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className= "">
                    <Link   id="profile" to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      SMS
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   id="profile" to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Phản hồi dịch vụ
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link to="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-fire" />
                  <span className="menu-text"> Mở rộng </span>
                  <b className="arrow fa fa-angle-down" />
               </Link>
                <b className="arrow" />
                <ul className="submenu">
                  <li className= "">
                    <Link   id="profile" to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Tin khuyến mãi
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   id="profile" to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      FAQ
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#l">
                      <i className="menu-icon fa fa-caret-right" />
                      Hướng dẫn sử dụng
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Videos
                   </Link>
                    <b className="arrow" />
                  </li>
                  <li className= "">
                    <Link   to="#">
                      <i className="menu-icon fa fa-caret-right" />
                      Liên hệ
                   </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className= "">
                <Link  to="gallery.html" className="dropdown-toggle">
                  <i className="menu-icon fa fa-power-off" />
                  <span className="menu-text"> Đăng xuất </span>
               </Link>
                <b className="arrow" />
              </li>
            </ul>{/* /.nav-list */}
            <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
              <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right" />
            </div>
          </div>
          
        );
    }
}
export default Header;