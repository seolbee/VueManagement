<template>
    <div class="background">
        <div class="image">
            <h1>그래픽 디자이너, 웹 디자이너, <br> 모든 개발자 분들을 <br> 환영합니다.</h1>
            <img src="../assets/illustration4.png" alt="img" class="main_image">
        </div>
        <div class="register">
            <h1>회원가입</h1>
            <form @submit.prevent="register">
                <div class="input-box">
                    <label for="email">이메일</label>
                    <input type="email" v-model="user.email" :class="{'active' : this.active == 1}" @focus="setActive(1)" @blur="setActive(0)">
                </div>
                <div class="input-box">
                    <label for="id">아이디</label>
                    <input type="text" v-model="user.id" :class="{'active' : this.active == 2}" @focus="setActive(2)" @blur="setActive(0)">
                </div>
                <div class="input-box">
                    <label for="name">이름</label>
                    <input type="text" v-model="user.name" :class="{'active' : this.active == 3}" @focus="setActive(3)" @blur="setActive(0)">
                </div>
                <div class="input-box">
                    <label for="password">패스워드</label>
                    <input type="password" v-model="user.password" :class="{'active' : this.active == 4}" @focus="setActive(4)" @blur="setActive(0)">
                </div>
                <button>회원가입</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user : {
                'id' : '',
                'email' : '',
                'name' : '',
                'password' : ''
            },
            active : 0
        }
    },
    methods:{
        register() {
            
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
        width: 70%;
        height: 40%;
    }

    .register{
        height: 100%;
        justify-content: center;
        flex-direction: column;
        width: 70%;
        padding-left: 500px;
    }

    .register > h1{
        width: 50%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }

    .register > form {
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