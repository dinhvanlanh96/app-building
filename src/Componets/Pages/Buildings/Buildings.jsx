import React, { Component } from 'react';
class Buildings extends Component {
  render() {
    return (
      <div>
      <div className="breadcrumbs ace-save-state" id="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <i className="ace-icon fa fa-home home-icon" />
            <a href="#">KHU TRỌ</a>
          </li>
          <li className="active">QUẢN LÝ NHÀ TRỌ</li>
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
        <div className="page-header text-right">
          <button type="button" className="btn btn-success btn-xs" name="button"> <i className="ace-icon fa fa-plus bigger-120" /> Thêm</button>
          <button type="button" className="btn btn-danger btn-xs" name="button"> <i className="ace-icon fa fa-trash-o bigger-120" /> Xóa Nhiều</button>
          <button type="button" className="btn btn-warning btn-xs" name="button"> <i className="ace-icon fa fa-refresh bigger-120" /> Làm Mới</button>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <table id="Buildings-table" className="table  table-bordered table-hover">
              <thead>
                <tr>
                  <th className="center">
                    <label className="pos-rel">
                      <input type="checkbox" className="ace" />
                      <span className="lbl" />
                    </label>
                  </th>
                  <th>Tên Tòa Nhà</th>
                  <th>Địa Chỉ</th>
                  <th>Mô Tả</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center">
                    <label className="pos-rel">
                      <input type="checkbox" className="ace" />
                      <span className="lbl" />
                    </label>
                  </td>
                  <td>Tòa Nhà Sô 1</td>
                  <td>41 Đường Nguyễn Công Trứ</td>
                  <td>Tòa Nhà Víp</td>
                  <td className="center">
                    <div className="hidden-sm hidden-xs btn-group">
                      <button className="btn btn-xs btn-success" title="Sao chép">
                        <i className="ace-icon fa fa-check bigger-120" />
                      </button>
                      <button className="btn btn-xs btn-info" title="Chỉnh sửa">
                        <i className="ace-icon fa fa-pencil bigger-120" />
                      </button>
                      <button className="btn btn-xs btn-danger" title="Xóa">
                        <i className="ace-icon fa fa-trash-o bigger-120" />
                      </button>
                    </div>
                    <div className="hidden-md hidden-lg">
                      <div className="inline pos-rel">
                        <button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">
                          <i className="ace-icon fa fa-cog icon-only bigger-110" />
                        </button>
                        <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                          <li>
                            <a href="#" className="tooltip-info" data-rel="tooltip" title="Sao Chép">
                              <span className="blue">
                                <i className="ace-icon fa fa-search-plus bigger-120" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="tooltip-success" data-rel="tooltip" title="Chỉnh Sửa">
                              <span className="green">
                                <i className="ace-icon fa fa-pencil-square-o bigger-120" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="tooltip-error" data-rel="tooltip" title="Xóa">
                              <span className="red">
                                <i className="ace-icon fa fa-trash-o bigger-120" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>{/* /.span */}
        </div>{/* /.row */}
      </div>{/* /.page-content */}
    </div>
    
    );
  }
}

export default Buildings;