import React from "react";

export default () => {
    return (
        <>
            <section>
                <div class="sidebar-menu sticky-sidebar-menu">

                    <div class="logo">
                        <h1><a href="index.html">Collective</a></h1>
                    </div>

                    <div class="logo">
                        <a href="index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
                        </a>
                    </div>

                    <div class="logo-icon text-center">
                        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon" /> </a>
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
                                    <input class="search-input" placeholder="Search Here..." type="search" id="search" />
                                    <button class="search-submit" value=""><span class="fa fa-search"></span></button>
                                </form>
                            </div>
                            <div class="profile_details">
                                <ul>
                                    <li class="dropdown profile_details_drop">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                            aria-expanded="false">
                                            <div class="profile_img">
                                                <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
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
            </section>
        </>
    )
}