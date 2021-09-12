<template>
    <div class="background">
        <div class="image">
            <img src="../assets/illustration4.png" alt="img" class="main_image">
        </div>
        <div class="register">
            회원가입
            <form @submit.prevent="register">
                <div class="input_box">
                    <input type="email" v-model="user.email">
                </div>
                <div class="input_box">
                    <input type="text" v-model="user.id">
                </div>
                <div class="input_box">
                    <input type="text" v-model="user.name">
                </div>
                <div class="input_box">
                    <input type="password" v-model="user.password">
                </div>
                <div class="input_box">
                    <input type="password" v-model="user.passwordconfirm">
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
                'password' : '',
                'passwordconfirm' : ''
            }
        }
    },
    methods:{
        register() {
            
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
        flex: 1;
    }
    .image{
        background-color: #231291;
        justify-content: center;
        align-items: flex-end;
    }

    .main_image{
        width: 60%;
        height: 60%;
    }

    .register{
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>