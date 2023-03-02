
function App() {
  return (
    <div className="App">
        {/* <!doctype html>
<html className="no-js" lang="en"> */}

{/* <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Dashboard V.1 | Nalika - Material Admin Template</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- favicon
		============================================ -->
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
    <!-- Google Fonts
		============================================ -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" rel="stylesheet">
    <!-- Bootstrap CSS
		============================================ -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Bootstrap CSS
		============================================ -->
    <link rel="stylesheet" href="css/font-awesome.min.css">
	<!-- nalika Icon CSS
		============================================ -->
    <link rel="stylesheet" href="css/nalika-icon.css">
    <!-- owl.carousel CSS
		============================================ -->
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/owl.theme.css">
    <link rel="stylesheet" href="css/owl.transitions.css">
    <!-- animate CSS
		============================================ -->
    <link rel="stylesheet" href="css/animate.css">
    <!-- normalize CSS
		============================================ -->
    <link rel="stylesheet" href="css/normalize.css">
    <!-- meanmenu icon CSS
		============================================ -->
    <link rel="stylesheet" href="css/meanmenu.min.css">
    <!-- main CSS
		============================================ -->
    <link rel="stylesheet" href="css/main.css">
    <!-- morrisjs CSS
		============================================ -->
    <link rel="stylesheet" href="css/morrisjs/morris.css">
    <!-- mCustomScrollbar CSS
		============================================ -->
    <link rel="stylesheet" href="css/scrollbar/jquery.mCustomScrollbar.min.css">
    <!-- metisMenu CSS
		============================================ -->
    <link rel="stylesheet" href="css/metisMenu/metisMenu.min.css">
    <link rel="stylesheet" href="css/metisMenu/metisMenu-vertical.css">
    <!-- calendar CSS
		============================================ -->
    <link rel="stylesheet" href="css/calendar/fullcalendar.min.css">
    <link rel="stylesheet" href="css/calendar/fullcalendar.print.min.css">
    <!-- style CSS
		============================================ -->
    <link rel="stylesheet" href="style.css">
    <!-- responsive CSS
		============================================ -->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- modernizr JS
		============================================ -->
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
</head> */}

{/* <body> */}
    {/* <!--[if lt IE 8]> */}
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        {/* <![endif]--> */}

    <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
            <div className="sidebar-header">
                <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
                <strong><img src="img/logo/logosn.png" alt="" /></strong>
            </div>
			<div className="nalika-profile">
				<div className="profile-dtl">
					<a href="#"><img src="img/notification/4.jpg" alt="" /></a>
					<h2>Lakian <span className="min-dtn">Das</span></h2>
				</div>
				<div className="profile-social-dtl">
					<ul className="dtl-social">
						<li><a href="#"><i className="icon nalika-facebook"></i></a></li>
						<li><a href="#"><i className="icon nalika-twitter"></i></a></li>
						<li><a href="#"><i className="icon nalika-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
            <div className="left-custom-menu-adp-wrap comment-scrollbar">
                <nav className="sidebar-nav left-sidebar-menu-pro">
                    <ul className="metismenu" id="menu1">
                        <li className="active">
                            <a className="has-arrow" href="index.html">
								   <i className="icon nalika-home icon-wrap"></i>
								   <span className="mini-click-non">Ecommerce</span>
								</a>
                            <ul className="submenu-angle" aria-expanded="true">
                                <li><a title="Dashboard v.1" href="index.html"><span className="mini-sub-pro">Dashboard v.1</span></a></li>
                                <li><a title="Dashboard v.2" href="index-1.html"><span className="mini-sub-pro">Dashboard v.2</span></a></li>
                                <li><a title="Dashboard v.3" href="index-2.html"> <span className="mini-sub-pro">Dashboard v.3</span></a></li>
                                <li><a title="Product List" href="product-list.html"><span className="mini-sub-pro">Product List</span></a></li>
                                <li><a title="Product Edit" href="product-edit.html"><span className="mini-sub-pro">Product Edit</span></a></li>
                                <li><a title="Product Detail" href="product-detail.html"><span className="mini-sub-pro">Product Detail</span></a></li>
                                <li><a title="Product Cart" href="product-cart.html"><span className="mini-sub-pro">Product Cart</span></a></li>
                                <li><a title="Product Payment" href="product-payment.html"><span className="mini-sub-pro">Product Payment</span></a></li>
                                <li><a title="Analytics" href="analytics.html"><span className="mini-sub-pro">Analytics</span></a></li>
                                <li><a title="Widgets" href="widgets.html"><span className="mini-sub-pro">Widgets</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Mailbox</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Inbox" href="mailbox.html"><span className="mini-sub-pro">Inbox</span></a></li>
                                <li><a title="View Mail" href="mailbox-view.html"><span className="mini-sub-pro">View Mail</span></a></li>
                                <li><a title="Compose Mail" href="mailbox-compose.html"><span className="mini-sub-pro">Compose Mail</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-diamond icon-wrap"></i> <span className="mini-click-non">Interface</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Google Map" href="google-map.html"><span className="mini-sub-pro">Google Map</span></a></li>
                                <li><a title="Data Maps" href="data-maps.html"><span className="mini-sub-pro">Data Maps</span></a></li>
                                <li><a title="Pdf Viewer" href="pdf-viewer.html"><span className="mini-sub-pro">Pdf Viewer</span></a></li>
                                <li><a title="X-Editable" href="x-editable.html"><span className="mini-sub-pro">X-Editable</span></a></li>
                                <li><a title="Code Editor" href="code-editor.html"><span className="mini-sub-pro">Code Editor</span></a></li>
                                <li><a title="Tree View" href="tree-view.html"><span className="mini-sub-pro">Tree View</span></a></li>
                                <li><a title="Preloader" href="preloader.html"><span className="mini-sub-pro">Preloader</span></a></li>
                                <li><a title="Images Cropper" href="images-cropper.html"><span className="mini-sub-pro">Images Cropper</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-pie-chart icon-wrap"></i> <span className="mini-click-non">Miscellaneous</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="File Manager" href="file-manager.html"><span className="mini-sub-pro">File Manager</span></a></li>
                                <li><a title="Blog" href="blog.html"><span className="mini-sub-pro">Blog</span></a></li>
                                <li><a title="Blog Details" href="blog-details.html"><span className="mini-sub-pro">Blog Details</span></a></li>
                                <li><a title="404 Page" href="404.html"><span className="mini-sub-pro">404 Page</span></a></li>
                                <li><a title="500 Page" href="500.html"><span className="mini-sub-pro">500 Page</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-bar-chart icon-wrap"></i> <span className="mini-click-non">Charts</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Bar Charts" href="bar-charts.html"><span className="mini-sub-pro">Bar Charts</span></a></li>
                                <li><a title="Line Charts" href="line-charts.html"><span className="mini-sub-pro">Line Charts</span></a></li>
                                <li><a title="Area Charts" href="area-charts.html"><span className="mini-sub-pro">Area Charts</span></a></li>
                                <li><a title="Rounded Charts" href="rounded-chart.html"><span className="mini-sub-pro">Rounded Charts</span></a></li>
                                <li><a title="C3 Charts" href="c3.html"><span className="mini-sub-pro">C3 Charts</span></a></li>
                                <li><a title="Sparkline Charts" href="sparkline.html"><span className="mini-sub-pro">Sparkline Charts</span></a></li>
                                <li><a title="Peity Charts" href="peity.html"><span className="mini-sub-pro">Peity Charts</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-table icon-wrap"></i> <span className="mini-click-non">Data Tables</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Peity Charts" href="static-table.html"><span className="mini-sub-pro">Static Table</span></a></li>
                                <li><a title="Data Table" href="data-table.html"><span className="mini-sub-pro">Data Table</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-htmlForms icon-wrap"></i> <span className="mini-click-non">htmlForms Elements</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Basic htmlForm Elements" href="basic-htmlForm-element.html"><span className="mini-sub-pro">Bc htmlForm Elements</span></a></li>
                                <li><a title="Advance htmlForm Elements" href="advance-htmlForm-element.html"><span className="mini-sub-pro">Ad htmlForm Elements</span></a></li>
                                <li><a title="Password Meter" href="password-meter.html"><span className="mini-sub-pro">Password Meter</span></a></li>
                                <li><a title="Multi Upload" href="multi-upload.html"><span className="mini-sub-pro">Multi Upload</span></a></li>
                                <li><a title="Text Editor" href="tinymc.html"><span className="mini-sub-pro">Text Editor</span></a></li>
                                <li><a title="Dual List Box" href="dual-list-box.html"><span className="mini-sub-pro">Dual List Box</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-smartphone-call icon-wrap"></i> <span className="mini-click-non">App views</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Notifications" href="notifications.html"><span className="mini-sub-pro">Notifications</span></a></li>
                                <li><a title="Alerts" href="alerts.html"><span className="mini-sub-pro">Alerts</span></a></li>
                                <li><a title="Modals" href="modals.html"><span className="mini-sub-pro">Modals</span></a></li>
                                <li><a title="Buttons" href="buttons.html"><span className="mini-sub-pro">Buttons</span></a></li>
                                <li><a title="Tabs" href="tabs.html"><span className="mini-sub-pro">Tabs</span></a></li>
                                <li><a title="Accordion" href="accordion.html"><span className="mini-sub-pro">Accordion</span></a></li>
                            </ul>
                        </li>
                        <li id="removable">
                            <a className="has-arrow" href="#" aria-expanded="false"><i className="icon nalika-new-file icon-wrap"></i> <span className="mini-click-non">Pages</span></a>
                            <ul className="submenu-angle" aria-expanded="false">
                                <li><a title="Login" href="login.html"><span className="mini-sub-pro">Login</span></a></li>
                                <li><a title="Register" href="register.html"><span className="mini-sub-pro">Register</span></a></li>
                                <li><a title="Lock" href="lock.html"><span className="mini-sub-pro">Lock</span></a></li>
                                <li><a title="Password Recovery" href="password-recovery.html"><span className="mini-sub-pro">Password Recovery</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
    {/* <!-- Start Welcome area --> */}
    <div className="all-content-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="logo-pro">
                        <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-advance-area">
            <div className="header-top-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="header-top-wraper">
                                <div className="row">
                                    <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                        <div className="menu-switcher-pro">
                                            <button type="button" id="sidebarCollapse" className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
													<i className="icon nalika-menu-task"></i>
  </button>
                  </div>
              </div>
              <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                  <div className="header-top-menu tabl-d-n hd-search-rp">
                      <div className="breadcome-heading">
  <form role="search" className="">
    <input type="text" placeholder="Search..." className="htmlForm-control"/>
    <a href=""><i className="fa fa-search"></i></a>
  </form>
</div>
                  </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div className="header-right-info">
                      <ul className="nav navbar-nav mai-top-nav header-right-menu">
                          <li className="nav-item dropdown">
                              <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="icon nalika-mail" aria-hidden="true"></i><span className="indicator-ms"></span></a>
                              <div role="menu" className="author-message-top dropdown-menu animated zoomIn">
                                  <div className="message-single-top">
                                      <h1>Message</h1>
                                  </div>
                                  <ul className="message-menu">
                                      <li>
                                          <a href="#">
                                              <div className="message-img">
                                                  <img src="img/contact/1.jpg" alt=""/>
                                              </div>
                                              <div className="message-content">
                                                  <span className="message-date">16 Sept</span>
                                                  <h2>Advanda Cro</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="message-img">
                                                  <img src="img/contact/4.jpg" alt=""/>
                                              </div>
                                              <div className="message-content">
                                                  <span className="message-date">16 Sept</span>
                                                  <h2>Sulaiman din</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="message-img">
                                                  <img src="img/contact/3.jpg" alt=""/>
                                              </div>
                                              <div className="message-content">
                                                  <span className="message-date">16 Sept</span>
                                                  <h2>Victor Jara</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="message-img">
                                                  <img src="img/contact/2.jpg" alt=""/>
                                              </div>
                                              <div className="message-content">
                                                  <span className="message-date">16 Sept</span>
                                                  <h2>Victor Jara</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                                  <div className="message-view">
                                      <a href="#">View All Messages</a>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="icon nalika-alarm" aria-hidden="true"></i><span className="indicator-nt"></span></a>
                              <div role="menu" className="notification-author dropdown-menu animated zoomIn">
                                  <div className="notification-single-top">
                                      <h1>Notifications</h1>
                                  </div>
                                  <ul className="notification-menu">
                                      <li>
                                          <a href="#">
                                              <div className="notification-icon">
                                                  <i className="icon nalika-tick" aria-hidden="true"></i>
                                              </div>
                                              <div className="notification-content">
                                                  <span className="notification-date">16 Sept</span>
                                                  <h2>Advanda Cro</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="notification-icon">
                                                  <i className="icon nalika-cloud" aria-hidden="true"></i>
                                              </div>
                                              <div className="notification-content">
                                                  <span className="notification-date">16 Sept</span>
                                                  <h2>Sulaiman din</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="notification-icon">
                                                  <i className="icon nalika-folder" aria-hidden="true"></i>
                                              </div>
                                              <div className="notification-content">
                                                  <span className="notification-date">16 Sept</span>
                                                  <h2>Victor Jara</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <div className="notification-icon">
                                                  <i className="icon nalika-bar-chart" aria-hidden="true"></i>
                                              </div>
                                              <div className="notification-content">
                                                  <span className="notification-date">16 Sept</span>
                                                  <h2>Victor Jara</h2>
                                                  <p>Please done this project as soon possible.</p>
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                                  <div className="notification-view">
                                      <a href="#">View All Notification</a>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item">
                              <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle">
        <i className="icon nalika-user"></i>
        <span className="admin-name">Advanda Cro</span>
        <i className="icon nalika-down-arrow nalika-angle-dw"></i>
      </a>
                              <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                  <li><a href="register.html"><span className="icon nalika-home author-log-ic"></span> Register</a>
                                  </li>
                                  <li><a href="#"><span className="icon nalika-user author-log-ic"></span> My Profile</a>
                                  </li>
                                  <li><a href="lock.html"><span className="icon nalika-diamond author-log-ic"></span> Lock</a>
                                  </li>
                                  <li><a href="#"><span className="icon nalika-settings author-log-ic"></span> Settings</a>
                                  </li>
                                  <li><a href="login.html"><span className="icon nalika-unlocked author-log-ic"></span> Log Out</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item nav-setting-open"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="icon nalika-menu-task"></i></a>

                              <div role="menu" className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn">
                                  <ul className="nav nav-tabs custon-set-tab">
                                      <li className="active"><a data-toggle="tab" href="#Notes">News</a>
                                      </li>
                                      <li><a data-toggle="tab" href="#Projects">Activity</a>
                                      </li>
                                      <li><a data-toggle="tab" href="#Settings">Settings</a>
                                      </li>
                                  </ul>

                                  <div className="tab-content custom-bdr-nt">
                                      <div id="Notes" className="tab-pane fade in active">
                                          <div className="notes-area-wrap">
                                              <div className="note-heading-indicate">
                                                  <h2><i className="icon nalika-chat"></i> Latest News</h2>
                                                  <p>You have 10 New News.</p>
                                              </div>
                                              <div className="notes-list-area notes-menu-scrollbar">
                                                  <ul className="notes-menu-list">
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/4.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/1.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/2.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/3.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/4.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/1.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/2.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/1.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/2.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="notes-list-flow">
                                                                  <div className="notes-img">
                                                                      <img src="img/contact/3.jpg" alt="" />
                                                                  </div>
                                                                  <div className="notes-content">
                                                                      <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                      <span>Yesterday 2:45 pm</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div id="Projects" className="tab-pane fade">
                                          <div className="projects-settings-wrap">
                                              <div className="note-heading-indicate">
                                                  <h2><i className="icon nalika-happiness"></i> Recent Activity</h2>
                                                  <p> You have 20 Recent Activity.</p>
                                              </div>
                                              <div className="project-st-list-area project-st-menu-scrollbar">
                                                  <ul className="projects-st-menu-list">
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New User Registered</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">1 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New Order Received</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">2 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New Order Received</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">3 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New Order Received</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">4 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New User Registered</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">5 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New Order</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">6 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New User</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">7 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                      <li>
                                                          <a href="#">
                                                              <div className="project-list-flow">
                                                                  <div className="projects-st-heading">
                                                                      <h2>New Order</h2>
                                                                      <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                      <span className="project-st-time">9 hours ago</span>
                                                                  </div>
                                                              </div>
                                                          </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div id="Settings" className="tab-pane fade">
                                          <div className="setting-panel-area">
                                              <div className="note-heading-indicate">
                                                  <h2><i className="icon nalika-gear"></i> Settings Panel</h2>
                                                  <p> You have 20 Settings. 5 not completed.</p>
                                              </div>
                                              <ul className="setting-panel-list">
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Show notifications</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example"/>
                                                                      <label className="onoffswitch-label" htmlFor="example">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Disable Chat</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example3"/>
                                                                      <label className="onoffswitch-label" htmlFor="example3">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Enable history</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example4"/>
                                                                      <label className="onoffswitch-label" htmlFor="example4">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Show charts</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example7"/>
                                                                      <label className="onoffswitch-label" htmlFor="example7">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Update everyday</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example2"/>
                                                                      <label className="onoffswitch-label" htmlFor="example2">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Global search</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu"  className="onoffswitch-checkbox" id="example6"/>
                                                                      <label className="onoffswitch-label" htmlFor="example6">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div className="checkbox-setting-pro">
                                                          <div className="checkbox-title-pro">
                                                              <h2>Offline users</h2>
                                                              <div className="ts-custom-check">
                                                                  <div className="onoffswitch">
                                                                      <input type="checkbox" name="collapsemenu"  className="onoffswitch-checkbox" id="example5"/>
                                                                      <label className="onoffswitch-label" htmlFor="example5">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                              </ul>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
            {/* <!-- Mobile Menu start --> */}
            <div className="mobile-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="mobile-menu">
                                <nav id="dropdown">
                                    <ul className="mobile-menu-nav">
                                        <li><a data-toggle="collapse" data-target="#Charts" href="#">Home <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul className="collapse dropdown-header-top">
                                                <li><a href="index.html">Dashboard v.1</a></li>
                                                <li><a href="index-1.html">Dashboard v.2</a></li>
                                                <li><a href="index-3.html">Dashboard v.3</a></li>
                                                <li><a href="product-list.html">Product List</a></li>
                                                <li><a href="product-edit.html">Product Edit</a></li>
                                                <li><a href="product-detail.html">Product Detail</a></li>
                                                <li><a href="product-cart.html">Product Cart</a></li>
                                                <li><a href="product-payment.html">Product Payment</a></li>
                                                <li><a href="analytics.html">Analytics</a></li>
                                                <li><a href="widgets.html">Widgets</a></li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#demo" href="#">Mailbox <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="demo" className="collapse dropdown-header-top">
                                                <li><a href="mailbox.html">Inbox</a>
                                                </li>
                                                <li><a href="mailbox-view.html">View Mail</a>
                                                </li>
                                                <li><a href="mailbox-compose.html">Compose Mail</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#others" href="#">Miscellaneous <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="others" className="collapse dropdown-header-top">
                                                <li><a href="file-manager.html">File Manager</a></li>
                                                <li><a href="contacts.html">Contacts Client</a></li>
                                                <li><a href="projects.html">Project</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                                <li><a href="500.html">500 Page</a></li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Miscellaneousmob" href="#">Interface <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="Miscellaneousmob" className="collapse dropdown-header-top">
                                                <li><a href="google-map.html">Google Map</a>
                                                </li>
                                                <li><a href="data-maps.html">Data Maps</a>
                                                </li>
                                                <li><a href="pdf-viewer.html">Pdf Viewer</a>
                                                </li>
                                                <li><a href="x-editable.html">X-Editable</a>
                                                </li>
                                                <li><a href="code-editor.html">Code Editor</a>
                                                </li>
                                                <li><a href="tree-view.html">Tree View</a>
                                                </li>
                                                <li><a href="preloader.html">Preloader</a>
                                                </li>
                                                <li><a href="images-cropper.html">Images Cropper</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Chartsmob" href="#">Charts <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="Chartsmob" className="collapse dropdown-header-top">
                                                <li><a href="bar-charts.html">Bar Charts</a>
                                                </li>
                                                <li><a href="line-charts.html">Line Charts</a>
                                                </li>
                                                <li><a href="area-charts.html">Area Charts</a>
                                                </li>
                                                <li><a href="rounded-chart.html">Rounded Charts</a>
                                                </li>
                                                <li><a href="c3.html">C3 Charts</a>
                                                </li>
                                                <li><a href="sparkline.html">Sparkline Charts</a>
                                                </li>
                                                <li><a href="peity.html">Peity Charts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Tablesmob" href="#">Tables <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="Tablesmob" className="collapse dropdown-header-top">
                                                <li><a href="static-table.html">Static Table</a>
                                                </li>
                                                <li><a href="data-table.html">Data Table</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#htmlFormsmob" href="#">htmlForms <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="htmlFormsmob" className="collapse dropdown-header-top">
                                                <li><a href="basic-htmlForm-element.html">Basic htmlForm Elements</a>
                                                </li>
                                                <li><a href="advance-htmlForm-element.html">Advanced htmlForm Elements</a>
                                                </li>
                                                <li><a href="password-meter.html">Password Meter</a>
                                                </li>
                                                <li><a href="multi-upload.html">Multi Upload</a>
                                                </li>
                                                <li><a href="tinymc.html">Text Editor</a>
                                                </li>
                                                <li><a href="dual-list-box.html">Dual List Box</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Appviewsmob" href="#">App views <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="Appviewsmob" className="collapse dropdown-header-top">
                                                <li><a href="basic-htmlForm-element.html">Basic htmlForm Elements</a>
                                                </li>
                                                <li><a href="advance-htmlForm-element.html">Advanced htmlForm Elements</a>
                                                </li>
                                                <li><a href="password-meter.html">Password Meter</a>
                                                </li>
                                                <li><a href="multi-upload.html">Multi Upload</a>
                                                </li>
                                                <li><a href="tinymc.html">Text Editor</a>
                                                </li>
                                                <li><a href="dual-list-box.html">Dual List Box</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Pagemob" href="#">Pages <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                            <ul id="Pagemob" className="collapse dropdown-header-top">
                                                <li><a href="login.html">Login</a>
                                                </li>
                                                <li><a href="register.html">Register</a>
                                                </li>
                                                <li><a href="lock.html">Lock</a>
                                                </li>
                                                <li><a href="password-recovery.html">Password Recovery</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile Menu end --> */}
            <div className="breadcome-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcome-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="breadcomb-wp">
											<div className="breadcomb-icon">
												<i className="icon nalika-home"></i>
											</div>
											<div className="breadcomb-ctn">
												<h2>Dashboard One</h2>
												<p>Welcome to Nalika <span className="bread-ntd">Admin Template</span></p>
											</div>
										</div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="breadcomb-report">
											<button data-toggle="tooltip" data-placement="left" title="Download Report" className="btn"><i className="icon nalika-download"></i></button>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-admin container-fluid">
            <div className="row admin text-center">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-15">
                                <h4 className="text-left text-uppercase"><b>Orders</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="col-xs-3 mar-bot-15 text-left">
                                        <label className="label bg-green">30% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">10,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width: '78%'}} className="progress-bar bg-green"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{marginBottom:'1px',}}>
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Tax Deduction</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-red">15% <i className="fa fa-level-down" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">5,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width: "38%"}}className="progress-bar progress-bar-danger bg-red"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Revenue</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-blue">50% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">$70,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width: "60%"}} className="progress-bar bg-blue"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Yearly Sales</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-purple">80% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">$100,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width: "60%"}} className="progress-bar bg-purple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="product-sales-chart">
                            <div className="portlet-title">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="caption pro-sl-hd">
                                            <span className="caption-subject text-uppercase"><b>Product Sales</b></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="actions graph-rp">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-grey active">
													<input type="radio" name="options" className="toggle" id="option1" />Today</label>
                                                <label className="btn btn-grey">
													<input type="radio" name="options" className="toggle" id="option2"/>Week</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="curved-line-chart" className="flot-chart-sts flot-chart curved-chart-statistic"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="white-box analytics-info-cs mg-b-30 res-mg-t-30">
                            <h3 className="box-title">Total Visit</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash"></div>
                                </li>
                                <li className="text-right sp-cn-r"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">8659</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs mg-b-30">
                            <h3 className="box-title">Total Page Views</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">7469</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs mg-b-30">
                            <h3 className="box-title">Unique Visitor</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">6011</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs">
                            <h3 className="box-title">Bounce Rate</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash4"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-down" aria-hidden="true"></i> <span className="sales-sts-ctn">18%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="traffic-analysis-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-success last-month-sc cl-one"><i className="fa fa-sort-asc"></i> 18% last month</small> Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline8"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner res-mg-t-30">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-danger last-month-sc cl-two"><i className="fa fa-sort-desc"></i> 18% last month</small>Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline9"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner res-mg-t-30">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-success last-month-sc cl-three"><i className="fa fa-sort-asc"></i> 18% last month</small>Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-new-list-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt=""/></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="pro-tlt" href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt=""/></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt=""/></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt=""/></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="product-sales-chart">
                            <div className="portlet-title">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="caption pro-sl-hd">
                                            <span className="caption-subject text-uppercase"><b>Order Statistic</b></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="actions graph-rp">
                                            <a href="#" className="btn btn-dark-blue btn-circle active tip-top" data-toggle="tooltip" title="Upload">
													<i className="fa fa-cloud-download" aria-hidden="true"></i>
												</a>
                                            <a href="#" className="btn btn-dark btn-circle active tip-top" data-toggle="tooltip" title="Refresh">
													<i className="fa fa-reply" aria-hidden="true"></i>
												</a>
                                            <a href="#" className="btn btn-blue-grey btn-circle active tip-top" data-toggle="tooltip" title="Delete">
													<i className="fa fa-trash-o" aria-hidden="true"></i>
												</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="line-chart" className="flot-chart flot-chart-sts line-chart-statistic"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="analytics-rounded mg-b-30 res-mg-t-30">
                            <div className="analytics-rounded-content">
                                <h5>Percentage distribution</h5>
                                <h2><span className="counter">60</span>/20</h2>
                                <div className="text-center">
                                    <div id="sparkline51"></div>
                                </div>
                            </div>
                        </div>
                        <div className="analytics-rounded">
                            <div className="analytics-rounded-content">
                                <h5>Percentage division</h5>
                                <h2><span className="counter">150</span>/<span className="counter">54</span></h2>
                                <div className="text-center">
                                    <div id="sparkline52"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="author-area-pro">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="personal-info-wrap">
                            <div className="widget-head-info-box">
                                <div className="persoanl-widget-hd">
                                    <h2>Jon Royita</h2>
                                    <p>Founder of Uttara It Park</p>
                                </div>
                                <img src="img/notification/5.jpg" className="img-circle circle-border m-b-md" alt="profile"/>
                                <div className="social-widget-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Jhon Royita</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="author-widgets-single res-mg-t-30">
                            <div className="author-wiget-inner">
                                <div className="perso-img">
                                    <img src="img/notification/6.jpg" className="img-circle circle-border m-b-md" alt="profile"/>
                                </div>
                                <div className="persoanl-widget-hd persoanl1-widget-hd">
                                    <h2>Fire Foxy</h2>
                                    <p>Founder of Uttara It House</p>
                                </div>
                                <div className="social-widget-result social-widget1-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Fire Foxy</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="personal-info-wrap personal-info-ano res-mg-t-30">
                            <div className="widget-head-info-box">
                                <div className="persoanl-widget-hd">
                                    <h2>Jon Royita</h2>
                                    <p>Founder of Uttara It Park</p>
                                </div>
                                <img src="img/contact/2.jpg" className="img-circle circle-border m-b-md" alt="profile"/>
                                <div className="social-widget-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Jhon Royita</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="calender-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="calender-inner">
                            <div id='calendar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-copy-right">
                            <p>Copyright © 2018 <a href="https://colorlib.com/wp/templates/">Colorlib</a> All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- jquery
		============================================ -->
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <!-- bootstrap JS
		============================================ -->
    <script src="js/bootstrap.min.js"></script>
    <!-- wow JS
		============================================ -->
    <script src="js/wow.min.js"></script>
    <!-- price-slider JS
		============================================ -->
    <script src="js/jquery-price-slider.js"></script>
    <!-- meanmenu JS
		============================================ -->
    <script src="js/jquery.meanmenu.js"></script>
    <!-- owl.carousel JS
		============================================ -->
    <script src="js/owl.carousel.min.js"></script>
    <!-- sticky JS
		============================================ -->
    <script src="js/jquery.sticky.js"></script>
    <!-- scrollUp JS
		============================================ -->
    <script src="js/jquery.scrollUp.min.js"></script>
    <!-- mCustomScrollbar JS
		============================================ -->
    <script src="js/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/scrollbar/mCustomScrollbar-active.js"></script>
    <!-- metisMenu JS
		============================================ -->
    <script src="js/metisMenu/metisMenu.min.js"></script>
    <script src="js/metisMenu/metisMenu-active.js"></script>
    <!-- sparkline JS
		============================================ -->
    <script src="js/sparkline/jquery.sparkline.min.js"></script>
    <script src="js/sparkline/jquery.charts-sparkline.js"></script>
    <!-- calendar JS
		============================================ -->
    <script src="js/calendar/moment.min.js"></script>
    <script src="js/calendar/fullcalendar.min.js"></script>
    <script src="js/calendar/fullcalendar-active.js"></script>
	<!-- float JS
		============================================ -->
    <script src="js/flot/jquery.flot.js"></script>
    <script src="js/flot/jquery.flot.resize.js"></script>
    <script src="js/flot/curvedLines.js"></script>
    <script src="js/flot/flot-active.js"></script>
    <!-- plugins JS
		============================================ -->
    <script src="js/plugins.js"></script>
    <!-- main JS
		============================================ -->
    <script src="js/main.js"></script>
</body>

</html> */}
    </div>
  );
}

export default App;
