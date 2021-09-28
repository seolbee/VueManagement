<template>
    <div class="background">
        <div class="image">
            <h1>모든 개발자, 디자이너, <br> 퍼블리셔들이 당신을 기다립니다.</h1>
            <img src="../assets/img/illustration5.png" alt="img" class="main_image">
        </div>
        <div class="login">
            <h1>로그인</h1>
            <form @submit.prevent="login">
                <div class="input-box">
                    <label for="email">이메일</label>
                    <input type="email" v-model="user.email" :class="{'active' : this.active == 1}" @focus="setActive(1)" @blur="setActive(0)">
                </div>
                <div class="input-box">
                    <label for="password">패스워드</label>
                    <input type="password" v-model="user.password" :class="{'active' : this.active == 2}" @focus="setActive(2)" @blur="setActive(0)">
                </div>
                <button>로그인</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user : {
                'email' : '',
                'password' : ''
            },
            active : 0
        }
    },
    methods:{
        async login() {
            let is_login = true;
            if(this.user.email.trim() === ""){
                is_login = false;
            }

            if(this.user.password.trim() === ""){
                is_login = false;
            }

            if(!is_login){
                return false;
            }

            this.$store.dispatch('login', this.user);
        },

        setActive(idx){
            this.active = idx;
        }
    }
}
</script>
<style scoped>
    .background{
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .background > div{
        display: flex;
        height: 100%;
    }

    .image{
        width: 30%;
        background-color: #231291;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .image > h1{
        color: #e0dbff;
        margin-top: 100px;
    }

    .main_image{
        margin-top: 250px;
        width: 80%;
        height: 50%;
    }

    .login{
        height: 100%;
        justify-content: center;
        flex-direction: column;
        width: 70%;
        padding-left: 500px;
    }

    .login > h1{
        width: 50%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }

    .login > form {
        width: 50%;
        text-align: left;
        margin-top: 10px;
    }

    .input-box{
        margin: 20px 0;
        width: 100%;
        height: 100px;
    }

    .input-box > label{
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
        font-size:15px;
    }

    .input-box > input{
        border: none;
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        padding: 15px;
        background-color: #f1efff;
    }

    .input-box > input.active{
        border: 1.5px solid #f1efff;
        box-shadow: 0px 0px 0px 4px #f1efff7d; 
        background-color: white;
    }

    button{
        border: none;
        background-color: #231291;
        color: #e0dbff;
        margin-top: 10px;
        padding: 10px 13px;
        font-size: 16px;
        border-radius: 5px;
        width: 40%;
        cursor:pointer;
        font-weight: bold;
    }

    button:hover{
        color: white;
    }
</style>