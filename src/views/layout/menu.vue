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
                <el-tab-pane label="营销" name="营销">
                    <span slot="label" class="icon-navbar"><i class="i-icon-formdata"></i> 营销</span>
                    <div class="tabs-hd">
                        <h3>营销</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>    
                    </div> 
                    <el-menu :default-active="$route.name" :default-openeds="defaultOpeneds">
                        <i-menuitem :json="outputRouter"></i-menuitem>
                    </el-menu> 
                </el-tab-pane>
                <el-tab-pane label="客户" name="客户">
                    <span slot="label" class="icon-navbar"><i class="i-icon-peoples"></i> 客户</span>
                    <div class="tabs-hd">
                        <h3>客户</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                    <el-menu :default-active="$route.name" :default-openeds="defaultOpeneds">
                        <i-menuitem :json="outputRouter"></i-menuitem>
                    </el-menu> 
                </el-tab-pane>
                <el-tab-pane label="设计" name="设计">
                    <span slot="label" class="icon-navbar"><i class="i-icon-edit"></i> 设计</span>
                    <div class="tabs-hd">
                        <h3>设计</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="合同" name="合同">
                    <span slot="label" class="icon-navbar"><i class="i-icon-contract"></i> 合同</span>
                    <div class="tabs-hd">
                        <h3>合同</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="工程" name="工程">
                    <span slot="label" class="icon-navbar"><i class="i-icon-team"></i> 工程</span>
                    <div class="tabs-hd">
                        <h3>工程</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="材料" name="材料">
                    <span slot="label" class="icon-navbar"><i class="i-icon-info"></i> 材料</span>
                    <div class="tabs-hd">
                        <h3>材料</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="成控" name="成控">
                    <span slot="label" class="icon-navbar"><i class="i-icon-xiadan"></i> 成控</span>
                    <div class="tabs-hd">
                        <h3>成控</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="报表" name="报表">
                    <span slot="label" class="icon-navbar"><i class="i-icon-echart"></i> 报表</span>
                    <div class="tabs-hd">
                        <h3>报表</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
                <el-tab-pane label="设置" name="设置">
                    <span slot="label" class="icon-navbar"><i class="i-icon-edits"></i> 设置</span>
                    <div class="tabs-hd">
                        <h3>设置</h3>
                        <el-input
                            size="small"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>  
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="user">
                <el-popover
                    ref="onUserselect"
                    placement="right"
                    width="230"
                    trigger="click">
                    <el-menu><!-- 添加路由 router 水平排列 mode="horizontal" -->
                        <el-menu-item index="1">
                            <span slot="title">个人资料</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span slot="title">修改密码</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">清除缓存</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">发送日报</span>
                        </el-menu-item>
                        <el-row class="user-menu">
                            <el-col :span="6">
                                <a class="user-menu-link" href="javascript:void(0);">
                                    <i class="el-icon-service"></i>
                                    <span>帮助</span>
                                </a>
                            </el-col>
                            <el-col :span="6">
                                <a class="user-menu-link" href="javascript:void(0);">
                                    <i class="el-icon-message"></i>
                                    <span>社区</span>
                                </a>
                            </el-col>
                            <el-col :span="6">
                                <a class="user-menu-link" href="javascript:void(0);">
                                    <i class="el-icon-edit"></i>
                                    <span>博客</span>
                                </a>
                            </el-col>
                            <el-col :span="6">
                                <a class="user-menu-link" href="javascript:void(0);">
                                    <i class="el-icon-document"></i>
                                    <span>案例</span>
                                </a>
                            </el-col>
                        </el-row>
                        <el-menu-item index="5">
                            <span slot="title">工作日报</span>
                        </el-menu-item>
                        <el-menu-item index="6" @click.native="hanldeTips">
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
            input21: '',
            tabsVal: '营销',        // 默认第一个选项卡的 name
            outputRouter: []
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
            this.$store.commit('loginOut')
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
