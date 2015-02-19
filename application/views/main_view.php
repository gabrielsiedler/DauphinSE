<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Dauphin Shopping Engine</title>

        <!-- Favorite Icon !-->
        <link rel="icon" type="image/ico" href="<?php echo base_url('public/images/favicon.png'); ?>"/>

        <!-- CSS import !-->
        <link rel="stylesheet/css" type="text/css" href="<?php echo base_url('public/css/reset.css'); ?>" />
        <link rel="stylesheet/less" type="text/css" href="<?php echo base_url('public/css/dse.less'); ?>" />

        <!-- JavaScript import !-->
        <script src="<?php echo base_url('public/js/less.js'); ?>"></script>
        <script src="<?php echo base_url('public/js/jquery.js'); ?>"></script>
        <script src="<?php echo base_url('public/js/jquery_easing.js'); ?>"></script>
        <script src="<?php echo base_url('public/js/animate.js'); ?>"></script>
        <script src="<?php echo base_url('public/js/the_happy_dolphin.js'); ?>"></script>
        <script src="<?php echo base_url('public/js/navigation.js'); ?>"></script>

    </head>
    <header>
        <div class="headerLeft">
            <div id="backToStart">
                <img src="<?php echo base_url('public/images/dauphin-logo.png'); ?>" class="dauphinMinorLogo" />
                <p>Dauphin Shopping Engine</p>
            </div>
        </div>
        <div class="headerRight">
            <div class="miniSearchBox">
                <p class="miniSearchTitle">Keyword:</p>
                <input type="text" class="miniForm" name="search">
                <div class="goButton">
                    <div class="spriteGoButton"></div>
                    <p>Go</p>
                </div>
            </div>
        </div>
    </header>
    <body>
        <div id="marginTop"></div>

        <div id="speechBaloon">
            <div><p></p></div>
        </div>
        <div class="animatedBackground gradientBackground">
            <img src="<?php echo base_url('public/images/theSwimmingDolphin.gif'); ?>" id="TSD" class="" />
            <div id="dolphinAura"></div>
            <div class="mainContent">
                <div class="dauphinLogo"></div>
                <div class="searchArea">
                    <div class="title">Dauphin Shopping Engine</div>
                    <div class="searchBox">
                        <p class="searchTitle">Search for procucts using keywords:</p>
                        <input type="text" class="bigForm" name="search">
                        <div class="goButton">
                            <div class="spriteGoButton"></div>
                            <p>Go</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="navigation">
            <div class="outline">
                <section></section>
            </div>
            <div class="ajaxLoading">            
                <img src="<?php echo base_url('public/images/loading.gif'); ?>"/>
                <p>Please wait...</p>
            </div>
        </div>
    </body>
    <footer>
        <div class="footerLeft">
            <div class="buttonFooter" id="register" title="Create an account with no password to explore better our website">
                <div class="footerRegister"></div>
                <p>Register</p>
            </div>
            <div class="buttonFooter" id="login" title="Already has an account? Log in!">
                <div class="footerLogin"></div>
                <p>Login</p>
            </div>
        </div>
        <div class="footerMiddle">
            <a href="http://dauphin.cc" target="_blank" title="Know a bit more about Dauphin">Dauphin Creative Company</a><br/>
            <p class="specialLink" title="Check out which technologies were used in this website">Which are the website features?</p>
        </div>
        <div class="footerRight">
            <div class="buttonFooter" id="cart" title="What's about your shopping cart?">
                <div class="footerCart"></div>
                <p>My Shopping Cart</p>
                <div class="cartNumber"><div class="cn">0</div></div>
            </div>
        </div>
    </footer>
</html>  