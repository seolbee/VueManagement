const {User} = require('../../DB/Schema/User');

const auth = {
    register : async function(user){
        let {email, id} = user;
        let emailFind = await User.findOne({'email':email});
        if(emailFind !== null) {
            return {success:false, msg:'이미 있는 이메일입니다.'};
        }
    
        let idFind = await User.findOne({'id' : id});
        if(idFind !== null) {
            return {success:false, msg:'이미 있는 아이디 입니다.'};
        }
        let res = new User(user);
        await res.save();
        return {success:true};
    },
    login : async function({email, password}){
        let emailFind = await User.findOne({'email' : email});
        if(emailFind === null){
            return {success: false, msg: '잘못된 이메일 입니다.'};
        }
        
        let passwordFind = await User.findOne({'password' : password});
        if(passwordFind === null) {
            return {success: false, msg:'잘못된 패스워드 입니다.'};
        }

        let user = await User.findOne({'email' : email, 'password' : password});
        if(user === null) {
            return {success : false, msg: '이메일 또는 비밀번호가 잘못되었습니다.'};
        }

        return {success: true};
    }
};

module.exports = auth;