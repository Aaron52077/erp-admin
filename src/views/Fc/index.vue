<template>
    <div id="login" class="login-container">   
        <div class="logo">
            <a class="logo-link" href="javasrcipt:void(0)"><img src="@/assets/img/dectop-logo.png" alt=""></a>
        </div>
        <!-- form -->
        <el-form class="login-form" :model="form" :rules="rules" ref="form">
            <div class="login-form-hd">登录</div>
            <div class="login-form-bd">
                <div class="login-form-tips">输入您的帐号、密码登录</div>
                <el-form-item prop="name">
                    <el-input name="username" type="text" v-model="form.name" auto-complete='off' placeholder="手机号/用户名/邮箱" />
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input name="password" :type="pwdType" v-model="form.pwd" auto-complete='off' placeholder="输入密码" />
                        <span class="pwdEye" @click="passwordToggle"><i :class="eyeType"></i>
                    </span>
                </el-form-item> 
                <el-form-item prop="key">
                    <el-input name="command" type="text" v-model="form.key"  @keyup.enter.native="login('form')" auto-complete='off' placeholder="登录口令" />
                </el-form-item>   
                <el-button type="primary" class="login-form-btn" :loading="loading" @click.native.prevent="login('form')">登录</el-button>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="12"><div class="login-form-desc">忘记了密码？</div></el-col>
                </el-row>
            </div> 
        </el-form>
        <!-- ripple -->
        <div class="ripple left">
            <i class="r1"></i>          
            <i class="r2"></i>          
            <i class="r3"></i>          
            <i class="r4"></i>          
            <i class="r5"></i>          
        </div>
        <div class="ripple right">
            <i class="r1"></i>          
            <i class="r2"></i>          
            <i class="r3"></i>          
            <i class="r4"></i>          
            <i class="r5"></i>          
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            pwdType: 'password',
            eyeType: 'el-icon-view',
            form: {
                name: 'admin',
                pwd: '123123',
                key: 'admin'
            },
            loading: false,
            rules: {
                name: [
                    { required: true, message: '请输入手机号/用户名/邮箱', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                key: [
                    { required: true, message: '请输入登录口令', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 登录验证处理  
        login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('get_login_data', this.form)
                    .then((res) => {
                        this.loading = false
                        this.$message.success('登录成功')
                        this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')     
                    })
                    .catch(() => {
                        this.loading = false
                        this.$message.error('账号密码错误')
                    })   
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        },
        passwordToggle() {
            if (this.pwdType === 'password') {
                this.pwdType = ''
                this.eyeType = 'el-icon-view'
            } else {
                this.pwdType = 'password'
                this.eyeType = 'el-icon-setting'
            }
        }
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/css/mixins.less';
#login {
    position: fixed;
    height: 100%;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    .login-form {
        max-width: 500px;
        margin: 0 auto;
        padding: 30px 0;
        width: 100%;
        background: @white;
        box-shadow: 0 0 20px rgba(0,0,0,.08), inset 0 0 3px @white;
        padding: 20px;
        border-radius: 4px;
        &-hd {
            border-bottom: solid 1px #eaeaea;
            padding-bottom: 13px;
            position: relative;
            font-size: @fs + 8;
            color: #4d5250;
            letter-spacing: 2px;
            padding-left: 10px;
        }
        &-bd {
            margin-top: 5px;
            padding: 20px 20px 0
        }
        &-tips {
            font-size: @fs + 1;
            line-height: 180%;
            color: #c1c1c1;
            margin-bottom: 20px;
        }
        &-btn {
            width: 100%;
            margin-bottom: 15px;
        }
        &-desc {
            text-align: right;
        }
        .el-form-item {
            margin-bottom: 20px;
        }
        .pwdEye {
            position: absolute;
            right: 10px;
            top: 0;
            font-size: @fs + 2;
            user-select: none;
            cursor: pointer;
        }
    }
}
.ripple{
    position: absolute;
    & > i {
        border: 1px solid #fff;
        position: absolute;
        border-bottom: 0;
        border-radius: 50%;
        opacity: 0;
        animation: ripple 10s infinite ease-out;
    }
    &.left{
        width: 800px;
        height: 800px;
        bottom: -750px;
        left: 50px;
        & > i {
            width: 200px;
            height: 200px;
        }
    }
    &.right{
        width: 100px;
        height: 100px;
        top: 25%;
        right: -50px;
        & > i {
            width: 100px;
            height: 100px;
        }
    }
    .r2{
        animation-delay: 2s;
    }
    .r3{
        animation-delay: 4s;
    }
    .r4{
        animation-delay: 6s;
    }
    .r5{
        animation-delay: 8s;
    }
}
.login-container {
    overflow-y: auto;
    background-image: url(~@/assets/img//signup-bg.png);
    background-size: cover;
    background-position: left center;
    .logo {
        margin: 30px auto 0 auto;
        text-align: center;
        &-link {
            .inline-block();
            height: 50px;
            margin-bottom: 15px;
        }
    }
}
@keyframes ripple{
    0% {
        opacity: .4;
    }
    100% {
        opacity: 0;
        transform: scale(4,4);
    }
}
</style>
