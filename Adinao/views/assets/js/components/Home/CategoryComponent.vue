<template>
    <div id="category-list">
        <div class="category-list">
            <category-item-component class="item" v-for="i in 4" :key="i">

            </category-item-component>
        </div>
        <!-- <div id="login-page">
            <div class="login-page">
                <div class="login-bg-layout is-active" id="login-bg-layout"></div>
                <div class="login-card">
                    <div class="login-container">
                        <div class="left-content">
                            <div class="tabs">
                                <div class="tab" :class="{'active-tab': active_tab == 0}" @click="active_tab = 0">
                                    <span>Đăng nhập</span>
                                </div>
                                <div class="tab" :class="{'active-tab': active_tab == 1}" @click="active_tab = 1">
                                    <span>Tài khoản mới</span>
                                </div>
                            </div>
                            <div class="logo">Adinao</div>
                        </div>
                        <div class="right-content">
                            <div class="login-form">
                                <div>
                                    <input type="text" placeholder="Email/tên đăng nhập" class="login-input"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Mật khẩu" class="login-input input-not-first"/>
                                </div>
                            </div>
                            <div class="social-group">
                                <img src="/img/login-gg-plus-icon.png"/>
                                <img src="/img/login-fb-icon.png"/>
                                <img src="/img/login-phone-icon.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import CategoryItemComponent from './CategoryItemComponent.vue'
export default {
    components:{
        CategoryItemComponent
    },
    data() {
        return {
            active_tab: 0
        }
    },
    mounted() {
        let elem = document.getElementById('login-bg-layout');
        if(elem) {
            if(elem.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            }
        }
    }
}
</script>

<style>
#category-list .category-list{
    display: flex;
    flex-wrap: wrap;
    width: 62vw;
    margin: auto;
}
#category-list .category-list .item {
    padding: 0.26vw 0.3125vw;
    width: 25%;
}

#login-page .login-page .login-bg-layout {
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 z-index: 4;
	 background: rgba(0, 0, 0, 0.7);
}
 #login-page .login-page .login-card {
	 position: absolute;
	 top: 50%;
	 left: 50%;
	 transform: translate(-50%, -50%);
     width: 809px;
	 height: 610px;
	 z-index: 5;
	 background: #fff;
	 border-radius: 6px;
	 overflow: hidden;
}
 #login-page .login-page .login-card .login-container {
	 width: 100%;
	 height: 100%;
}
 #login-page .login-page .login-card .login-container .left-content {
	 /* width: calc(100% * 2 / 5); */
     width: 345px;
	 height: 100%;
	 background-image: linear-gradient(to bottom, #ff8748, #ef5d33, #e6452b, #dd2525);
	 position: relative;
}
 #login-page .login-page .login-card .login-container .left-content .tabs {
	 position: absolute;
	 top: 116px;
	 right: -1px;
}
 #login-page .login-page .login-card .login-container .left-content .tabs .tab {
	 width: 179px;
     height: 60px;
	 /* padding: 10px 0 8px; */
	 /* text-align: center; */
     display: flex;
     align-items: center;
     justify-content: center;
	 border-top-left-radius: 6px;
	 border-bottom-left-radius: 6px;
	 color: #fff;
	 font-size: 20px;
	 cursor: pointer;
	 transition: 0.2s ease;
     user-select: none;
}
 #login-page .login-page .login-card .login-container .left-content .tabs .tab.active-tab {
	 background: #fff;
	 color: #ff8748;
}
 #login-page .login-page .login-card .login-container .left-content .logo {
	 position: absolute;
	 left: 50%;
	 bottom: 46px;
     transform: translateX(-50%);
	 font-size: 72px;
	 color: #fff;
     font-weight: 800;
}
 #login-page .login-page .login-card .login-container .right-content {
	 position: absolute;
	 top: 0;
	 right: 0;
	 /* width: calc(100% * 3 / 5); */
     width: 464px;
	 height: 100%;
     /* padding: 3rem; */
     padding: 0 37px;
}

#login-page .login-page .login-card .login-container .right-content .login-form {
    margin-top: 149px;
}

#login-page .login-page .login-card .login-container .right-content .login-input {
    border: none;
    border-bottom: 1px solid #a1a0a0;
    width: 100%;
    height: 25.5px;
    padding: 0 14.5px 7.5px;
    font-size: 18px;
}


#login-page .login-page .login-card .login-container .right-content ::placeholder {
    color: #a1a0a0;
}

#login-page .login-page .login-card .login-container .right-content .input-not-first {
    margin-top: 36.5px;
}
 
</style>