// 닉네임
const memberNickname = document.getElementById("memberNickname");

//전화번호
const memberTel = document.getElementById("memberTel");

//버튼
const updateBtn = document.getElementById("info-update-btn");

let flag = false;

updateBtn.addEventListener("click", function(){

    //닉네임 빈칸
    if(memberNickname.value.length == 0){     
        alert("닉네임을 입력해주세요.");
        memberNickname.focus();
        return;
    }
    
    //닉네임 정규표현식
    const regExp = /^[a-zA-Z0-9가-힣]{2,10}$/;
    
    //닉네임 유효성
    if(!regExp.test(memberNickname.value)){
        alert("닉네임은 영어/숫자/한글 2~10 글자 사이로 작성해주세요.");
        memberNickname.focus();
        return;
    }

    //전화번호 빈칸
    if(memberTel.value.length == 0){
        alert("전화번호를 입력해주세요.(- 제외)");
        memberTel.focus();
        return;
    }
    
    //전화번호 정규식
    const regExp2 = /^0(1[016789]|2|[3-6][1-5]|70)\d{3,4}\d{4}$/;
    
    if(!regExp2.test(memberTel.value)){
        alert("전화번호 형식이 올바르지 않습니다.");
        memberTel.focus();
        return;
    }

    flag = true;
});

//닉네임, 전화번호 올바르게 입력되었을 경우
function checkInfo(){

    if(flag){
        return true;
    } else {
        return false;
    }
}
