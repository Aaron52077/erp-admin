<template>
<scroll-bar>
    <el-aside class="sidebar-container" id="menu">
        <div class="sticky-nav-bd">
             <!-- logo -->
            <router-link class="logo" to="/">
                <img src="~@/assets/img/dectop-logo.png" alt="">
            </router-link>
            <!-- 侧边导航 -->
            <!-- @tab-click="toggleSideBar" -->
            <el-tabs class="el-tabs-container" v-model="tabsVal" tab-position="left" @tab-click="hasSidebar(tabsVal)">    
                <el-tab-pane v-for="(item,index) in menuJson" :name="item.name" :key="index">
                    <span slot="label" class="icon-navbar"><i :class="item.icon"></i>{{item.name}}</span>
                    <div class="tabs-hd">
                        <h3>{{item.name}}</h3>
                    </div> 
                    <el-menu :default-active="$route.name" :default-openeds="defaultOpeneds">
                        <i-menuitem :json="outputRouter"></i-menuitem>
                    </el-menu> 
                </el-tab-pane>
            </el-tabs>
            <div class="user">
                <el-popover
                    ref="onUserselect"
                    placement="right"
                    width="230"
                    trigger="click">
                    <el-menu><!-- 添加路由 router 水平排列 mode="horizontal" -->
                        <el-menu-item v-for="(item,index) in MenuJsons" :key="index" :index="item.name">
                            <span slot="title">{{ item.name }}</span>
                        </el-menu-item>
                        <el-row class="user-menu">
                            <el-col :span="6" v-for="(item,idx) in menu" :key="idx">
                                <a class="user-menu-link" href="javascript:void(0);">
                                    <i :class="item.icon"></i>
                                    <span>{{item.name}}</span>
                                </a>
                            </el-col>
                        </el-row>
                        <el-menu-item index="a">
                            <span slot="title">工作日报</span>
                        </el-menu-item>
                        <el-menu-item index="b" @click.native="hanldeTips">
                            <span slot="title">退出登录</span>
                        </el-menu-item>
                    </el-menu>
                </el-popover>
                <!-- exit -->
                <el-dialog
                    title="提示"
                    :visible.sync="tipsVisible"
                    append-to-body
                    width="20%">
                    <span>确认登出吗？</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="tipsVisible = false" size="small">取 消</el-button>
                        <el-button type="primary" size="small" @click.stop="onUserSelected">确 定</el-button>
                    </span>
                </el-dialog>
                <div class="user-info" v-popover:onUserselect>
                    <img :src="user.headimgurl">
                </div> 
            </div>
        </div> 
    </el-aside>
</scroll-bar>
</template>
<script>
import { mapState } from 'vuex'
import { routes } from '@/router'
import Hamburger from '@/components/Hamburger'
import ScrollBar from '@/components/ScrollBar'
export default {
    name: 'i-menu',
    data() {
        return {
            filterRoutes: [],       // 过滤后的路由
            defaultOpeneds: [],     // 默认打开的二级菜单
            tipsVisible: false,     // 用户相关操作信息
            tabsVal: '营销',        // 默认第一个选项卡的 name
            outputRouter: [],
            menuJson: [
                {
                    "name": "营销",
                    "icon": "i-icon-formdata"
                },
                {
                    "name": "客户",
                    "icon": "i-icon-peoples"
                },
                {
                    "name": "设计",
                    "icon": "i-icon-edit"
                },
                {
                    "name": "合同",
                    "icon": "i-icon-contract"
                },
                {
                    "name": "工程",
                    "icon": "i-icon-team"
                },
                {
                    "name": "材料",
                    "icon": "i-icon-info"
                },
                {
                    "name": "成控",
                    "icon": "i-icon-xiadan"
                },
                {
                    "name": "报表",
                    "icon": "i-icon-echart"
                },
                {
                    "name": "设置",
                    "icon": "i-icon-edits"
                }
            ],
            MenuJsons: [
                {
                    "name": "个人资料"
                },
                {
                    "name": "修改密码"
                },
                {
                    "name": "清除缓存"
                },
                {
                    "name": "发送日报"
                },
                
            ],
            menu: [
                {
                    "name": "帮助",
                    "icon": "el-icon-service"
                },
                {
                    "name": "社区",
                    "icon": "el-icon-message"
                },
                {
                    "name": "博客",
                    "icon": "el-icon-edit"
                },
                {
                    "name": "案例",
                    "icon": "el-icon-document"
                }
            ]
        }
    },
    computed: {
        ...mapState([
            'user'
        ])
    },
    methods: {
        // 判断权限
        hasPermission(roles, route) {
            if (route.meta && route.meta.roles) {
                return roles.some(role => route.meta.roles.indexOf(role) >= 0)
            } else {
                return true
            }
        },
        // 过滤路由
        handleRoutes(Arr, roles) {
            const Routes = Arr.filter(route => {
                if (this.hasPermission(roles, route)) {
                    if (route.open) {
                        this.defaultOpeneds.push(route.meta)
                    }
                    if (route.children && route.children.length) {
                        route.children = this.handleRoutes(route.children, roles)
                    }
                    return true
                } else {
                    return false
                }
            })
            return Routes
        },
        // 过滤出index路由
        handleIndexRoutes() {
            let filterRoutes = this.handleRoutes(routes)
            let indexRoutes = filterRoutes.filter(route => route.name === "首页")[0]
            if (indexRoutes.children) {
                this.filterRoutes = indexRoutes.children
            }
        },
        hanldeTips() { 
            this.tipsVisible = true     
        },
        // 退出登录 exit
        onUserSelected() {
            this.tipsVisible = false
            this.$store.commit('login_out')
            this.$router.push('/login')  
        },
        hasSidebar(type) {
            this.$store.state.sidebar.opened = true
            let outputRoute = this.filterRoutes
            if (outputRoute) {
                this.outputRouter = outputRoute.filter(route => route.name === type)
            }  
        }
    },
    created() {
        this.handleIndexRoutes()
        this.hasSidebar("营销")
    },
    components: { ScrollBar }
}
</script>
<style lang='less'>
@import '~@/assets/css/mixins.less';
@appColor: #22d7bb;
.sticky-nav {
    position: relative;
    .transition(position 1s ease);
    border-right: 1px solid #ddd;
    &-bd {
        .display-flex();
        flex-direction: column;
        height: 100%;
        background: @appColor;  
    }
    .el-menu {
        border-right: none;
    }
}
.sidebar-container {
    height: 100%;
    .transition(width .3s);
    .sticky-menu {
        position: absolute;
        top: 22px;
        right: 10px;
        i {
            font-size: @fs * 2;
        }
    }
    .logo {
        position: absolute;
        left: 0;
        right: 0;
        height: 80px;
        width: 70px;
        text-align: center;
        padding: 15px 0;
        z-index: 1;
    }
    .el-tabs__nav-wrap::after {
        background-color: @appColor; 
    }
    .el-tabs-container {
        .box-flex(1);
        .el-tabs__nav {
            width: 70px;
            margin-top: 70px;
        }
        .el-tabs__item {
            padding: 0;
            height: 60px;
            line-height: 60px;
            color: #fff;
            text-align: center;     
            overflow: hidden;
            &.is-active {
                background: #18bfa4;
            }
        }
        .icon-navbar {
            position: absolute;
            left: 50%;
            top: -18%;
            transform: translateX(-50%);
            i {
                display: block;
                height: 24px;
                font-size: @fs * 2;
                margin-right: 0;
            }
        }
        .el-tabs__content {
            height: 100%;
            min-height: 1000px;
            background: @white;
        }
    }
    .tabs-hd {
        padding: 10px 15px;
        h3 {
            font-weight: normal;
        }
    }
}

.user{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 70px;
    padding-left: 15px;
    background-color: #22d7bb;
    &-info{
        img{
            width: 40px;
            height: 40px;
            border-radius: 100%;
            vertical-align: middle;
        }
        .el-dropdown-link{
            margin-top: 8px;
            color: #fff;
        }
    }
    &-menu {
        @active: #22d7bb;
        margin: 0 10px;
        padding: 10px 0;
        border-top: solid 1px #eee;
        border-bottom: solid 1px #eee;
        .transition(background .2s);
        i {
            .inline-block();
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            .border-radius(50%);
            border: 1px solid #eee;
            color: #888;
            margin-bottom: 5px;
        }
        &-link {
            display: block;
            color: #888;
            text-align: center;
            &:hover {
                color: @active;
                i {
                    color: @white;
                    background: @active;
                }
            }
        }
    }
}
</style>
