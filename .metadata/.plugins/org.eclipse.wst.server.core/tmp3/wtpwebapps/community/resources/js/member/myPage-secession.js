const memberPw = document.getElementById("memberPw");
const agree = document.getElementById("agree");
const updateBtn = document.getElementById("info-update-btn");

let flag = false;

updateBtn.addEventListener("click", function(){

    if(memberPw.value.length == 0){
        alert("비밀번호를 입력해주세요.");
        memberPw.focus();
        return;
    }
    
    if(!agree.checked){
        alert("약관 동의 후 탈퇴 버튼을 클릭해주세요.");
        return;
    }

    if(confirm("정말 탈퇴 하시겠습니까?")){
        flag = true;
    } else {
        return;
    }
})

function checkSecession(){
    if(flag){
        return true;
    } else {
        return false;
    }
}