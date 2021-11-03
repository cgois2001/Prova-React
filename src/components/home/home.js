import React from 'react'

export default () => {
    return (
        <>
            <section>
                <div class="sidebar-menu sticky-sidebar-menu">

                    <div class="logo">
                        <h1><a href="index.html">Collective</a></h1>
                    </div>

                    <div class="logo-icon text-center">
                        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"></img>testeaaaaaaaaaaaaaaaaaaa</a>
                    </div>

                    <div class="sidebar-menu-inner">

                        <ul class="nav nav-pills nav-stacked custom-nav">
                            <li><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
                            </li>
                            <li><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                            <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                            <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                            <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
                        </ul>
                        <a class="toggle-btn" onclick="toggleMenu()">
                            <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                            <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                        </a>
                    </div>
                </div>
                <div class="header sticky-header">

                    <div class="menu-right">
                        <div class="navbar user-panel-top">
                            <div class="search-box">
                                <form action="#search-results.html" method="get">
                                    <input class="search-input" placeholder="Search Here..." type="search" id="search"/>
                                </form>
                            </div>
                            <div class="profile_details">
                                <ul>
                                    <li class="dropdown profile_details_drop">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                            aria-expanded="false">
                                            <div class="profile_img">
                                                <img src="./assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                                                <div class="user-active">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </a>
                                        <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                            <li class="user-info">
                                                <h5 class="user-name">John Deo</h5>
                                                <span class="status ml-2">Available</span>
                                            </li>
                                            <li> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </li>
                                            <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li>
                                            <li> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </li>
                                            <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li>
                                            <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content">

                <div class="container-fluid content-top-gap">

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb my-breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                    <div class="welcome-msg pt-3 pb-4">
                        <h1>Hi <span class="text-primary">John</span>, Welcome back</h1>
                        <p>Very detailed & featured admin.</p>
                    </div>

                    <div class="statistics">
                        <div class="row">
                            <div class="col-xl-6 pr-xl-2">
                                <div class="row">
                                    <div class="col-sm-6 pr-sm-2 statistics-grid">
                                        <div class="card card_border border-primary-top p-4">
                                            <i class="lnr lnr-users"> </i>
                                            <h3 class="text-primary number">29.75 M</h3>
                                            <p class="stat-text">Total Users</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 pl-sm-2 statistics-grid">
                                        <div class="card card_border border-primary-top p-4">
                                            <i class="lnr lnr-eye"> </i>
                                            <h3 class="text-secondary number">51.25 K</h3>
                                            <p class="stat-text">Daily Visitors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 pl-xl-2">
                                <div class="row">
                                    <div class="col-sm-6 pr-sm-2 statistics-grid">
                                        <div class="card card_border border-primary-top p-4">
                                            <i class="lnr lnr-cloud-download"> </i>
                                            <h3 class="text-success number">166.89 M</h3>
                                            <p class="stat-text">Downloads</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 pl-sm-2 statistics-grid">
                                        <div class="card card_border border-primary-top p-4">
                                            <i class="lnr lnr-cart"> </i>
                                            <h3 class="text-danger number">1,250k</h3>
                                            <p class="stat-text">Purchased</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="chart">
                        <div class="row">
                            <div class="col-lg-6 pr-lg-2 chart-grid">
                                <div class="card text-center card_border">
                                    <div class="card-header chart-grid__header">
                                        Bar Chart
                                    </div>
                                    <div class="card-body">
                                        <div id="container">
                                            <canvas id="barchart"></canvas>
                                        </div>
                                    </div>
                                    <div class="card-footer text-muted chart-grid__footer">
                                        Updated 2 hours ago
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 pl-lg-2 chart-grid">
                                <div class="card text-center card_border">
                                    <div class="card-header chart-grid__header">
                                        Line Chart
                                    </div>
                                    <div class="card-body">
                                        <div id="container">
                                            <canvas id="linechart"></canvas>
                                        </div>
                                    </div>
                                    <div class="card-footer text-muted chart-grid__footer">
                                        Updated just now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <footer class="dashboard">
                <p>&copy 2020 Collective.All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank"
                    class="text-primary">W3layouts.</a></p>
            </footer>
    </>
    )
}