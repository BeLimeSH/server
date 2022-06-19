const currentPw = document.getElementById("currentPw");
const newPw = document.getElementById("newPw");
const newPwConfirm = document.getElementById("newPwConfirm");

const updateBtn = document.getElementById("info-update-btn");

let flag = false;

updateBtn.addEventListener("click", function(){

    //현재 비밀번호 미작성
    if(currentPw.value.length == 0){
        alert("현재 비밀번호를 입력해주세요.");
        currentPw.focus();
        return;
    }
    
    //새 비밀번호 미작성
    if(newPw.value.length == 0){
        alert("새 비밀번호를 입력해주세요.");
        newPw.focus();
        return;
    }
    
    //비밀번호 정규 표현식
    const regExp = /^[\w0-9!@#_-]{6,30}$/;
    
    //새 비밀번호 유효X
    if(!regExp.test(newPw.value)){
        alert("영어, 숫자, 특수문자(!,@,#,-,_) 6~30 글자 사이로 작성해주세요.");
        newPw.focus();
        return;
    }
    
    //확인 미작성
    if(newPwConfirm.value.length == 0){
        alert("새 비밀번호 확인을 입력해주세요.");
        newPwConfirm.focus();
        return;
    }
    
    //새 비밀번호와 일치X
    if(newPw.value != newPwConfirm.value){
        alert("새 비밀번호가 일치하지 않습니다.");
        newPwConfirm.focus();
        return;
    }

    flag = true;
});

function checkPw(){
    if(flag){
        return true;
    } else {
        return false;
    }
}