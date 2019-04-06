import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Profile extends Component {
  render() {
    return (
      <div>
       <Helmet><title>Thông thin cá nhân</title></Helmet>
      <div className="breadcrumbs ace-save-state" id="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <i className="ace-icon fa fa-home home-icon" />
            <a href="#">HỆ THỐNG</a>
          </li>
          <li className="active">HÔ SƠ CÁ NHÂN	</li>
        </ul>{/* /.breadcrumb */}
        <div className="nav-search" id="nav-search">
          <form className="form-search">
            <span className="input-icon">
              <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autoComplete="off" />
              <i className="ace-icon fa fa-search nav-search-icon" />
            </span>
          </form>
        </div>{/* /.nav-search */}
      </div>
      <div className="page-content">
        <div id="user-profile-1" className="user-profile row">
          <div className="col-xs-12 col-sm-4 center">
            <div>
              <span className="profile-picture">
                <img id="avatar" className="editable img-responsive" alt="Alex's Avatar" src="%PUBLIC_URL%/../../assets/images/avatars/profile-pic.jpg" />
              </span>
              <div className="space-4" />
              <div className="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                <div className="inline position-relative">
                  <a href="#" className="user-title-label dropdown-toggle" data-toggle="dropdown">
                    <i className="ace-icon fa fa-circle light-green" /> &nbsp;
                    <span className="white">Đinh Văn Lành</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="space-6" />
            <div className="profile-contact-info">
              <div className="profile-contact-links align-left">
                <div className="profile-user-info profile-user-info-striped center">
                  <div className="profile-info-row">
                    <div className="profile-info-value">
                      <span className="editable red	">Thời hạn dùng còn: 30 ngày (Dùng thử)</span>
                    </div>
                  </div>
                  <div className="profile-info-row">
                    <div className="profile-info-value">
                      <p>
                        <button className="btn btn-warning "><i className="ace-icon fa fa-signal icon-animated-vertical icon-only bigger-150" /> Nân cấp</button>
                        <button className="btn btn-info"><i className="ace-icon fa fa-credit-card bigger-150" />Gia hạn</button>
                      </p>
                    </div>
                  </div>
                  <div className="profile-info-row">
                    <div className="profile-info-value">
                      <span className="editable">Gói Miễn Phí (Giới hạn 05 phòng)</span>
                    </div>
                  </div>
                  <div className="profile-info-row">
                    <div className="profile-info-value">
                      <span className="editable">Thời hạn: 10/01/2019 - 09/02/2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-6" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <div className="row">
              <div className="col-xs-12">
                {/* PAGE CONTENT BEGINS */}
                <div className="tabbable">
                  <ul className="nav nav-tabs padding-18 tab-size-bigger" id="myTab">
                    <li className="active">
                      <a data-toggle="tab" href="#faq-tab-1">	<i className="fa fa-user bigger-110" /> Thông tin cá nhân	</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#faq-tab-2">	<i className="fa fa-lock bigger-110" />	Đổi mật khẩu	</a>
                    </li>
                  </ul>
                  <div className="tab-content no-border padding-24">
                    <div id="faq-tab-1" className="tab-pane fade in active">
                      <div id="faq-list-1" className="panel-group accordion-style1 accordion-style2">
                        <div className="profile-user-info profile-user-info-striped">
                          <div className="profile-info-row">
                            <div className="profile-info-name text-left"> Họ và tên</div>
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa fa-user bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name text-left"> Ngày sinh</div>
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa fa-calendar bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name text-left"> Giới tính</div>
                            <div className="profile-info-value">
                              <div className="control-group">
                                <div className="col-md-5">
                                  <div className="radio">
                                    <label>
                                      <input name="form-field-radio" type="radio" className="ace" defaultChecked />
                                      <span className="lbl"> Nam</span>
                                    </label>
                                    <label>
                                      <input name="form-field-radio" type="radio" className="ace" />
                                      <span className="lbl"> Nữ</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name text-left"> Địa chỉ</div>
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa fa-globe bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name text-left"> Số điện thoại</div>
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                <span className="input-group-addon">
                                  <i className="ace-icon fa fa-phone" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-4" />
                        <div className="col-xs-12 col-sm-12 center">
                          <button className="btn btn-success" id="update-Profiles" onclick><i className="ace-icon fa fa-refresh" />Cập nhập</button>
                        </div>
                      </div>
                    </div>
                    <div id="faq-tab-2" className="tab-pane fade">
                      <div id="faq-list-2" className="panel-group accordion-style1 accordion-style2">
                        <div className="profile-user-info profile-user-info-striped">
                          <div className="profile-info-row">
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" placeholder="Nhập mật khẩu hiên tại ... " type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa 	fa-key bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" placeholder="Nhập mật khẩu mới ... " type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa fa-lock bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-value">
                              <div className="input-group">
                                <input className="form-control date-picker" id="id-date-picker-1" placeholder="Nhập lại mật khẩu mới ... " type="text" data-date-format="dd-mm-yyyy" />
                                <span className="input-group-addon">
                                  <i className="fa fa-lock bigger-110" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-4" />
                        <div className="col-xs-12 col-sm-12 center">
                          <button className="btn btn-success" onclick="send('Success Message', 'success')"><i className="ace-icon fa fa-refresh icon-animated-bell" />Cập nhập</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* /.page-content */}
    </div>

    );
  }
}

export default Profile;