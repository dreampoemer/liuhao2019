<template>
  <div class="login-container">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login-form">
        <div class="login-title">
            <h3>Login Form</h3>
        </div>
        <el-form-item label="用户名" prop="username">
            <el-input type="input" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="submitForm('ruleForm')">登 录</el-button>
    </el-form>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
        var validateUser = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                console.log(this.ruleForm.username)
                if (this.ruleForm.username !== '') {
                    this.$refs.ruleForm.validateField('username');
                }
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.pass !== '') {
                this.$refs.ruleForm.validateField('pass');
            }
                callback();
            }
        };
        return {
            ruleForm: {
                username:'',
                pass: ''
            },
            rules: {
                username: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container{
    min-height: 100%;
    height: 100vh;
    background-color: $bg;
    overflow: hidden;

    .login-form{
        width: 520px;
        margin: 0 auto;
        padding: 160px 35px 0;
        .login-title{
            text-align: center;
            color:#fff;
        }
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
        .el-form-item__label{
            line-height: 47px;
        }
        .btn-login{
            width: 100%;
        }
    }
}
</style>