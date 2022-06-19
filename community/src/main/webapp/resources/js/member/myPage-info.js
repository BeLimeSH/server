// 닉네임
const memberNickname = document.getElementById("memberNickname");

//전화번호
const memberTel = document.getElementById("memberTel");

//버튼
const updateBtn = document.getElementById("info-update-btn");

let flag = false;

if(updateBtn != null){

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

}

//닉네임, 전화번호 올바르게 입력되었을 경우
function checkInfo(){

    if(flag){
        return true;
    } else {
        return false;
    }
}

//회원 프로필 이미지 변경(미리보기)
const inputImage = document.getElementById("input-image");

if(inputImage != null){

    // input type="file" 요소는 파일이 선택되어 업로드 될 때 change 이벤트가 발생한다.
    inputImage.addEventListener("change", function(){

        // this : 이벤트가 발생한 요소 (input type="file")
        // files : input type="file"만 사용 사능한 속성으로 선택된 파일을 배열로 반환
        // console.log(this.files);
        // console.log(this.files[0]); //파일 목록에서 첫 번째 파일 객체를 선택

        if(this.files[0] != undefined){ //파일이 선택되었을 때

            const reader = new FileReader();
            // 자바스크립트의 FileReader
            // - 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 사용하는 객체

            reader.readAsDataURL(this.files[0]);
            // FileReader.readAsDataURL(파일)
            // - 지정된 파일의 내용을 읽기 시작함.
            // - 읽어오는게 완료되면 result 속성 data에
            //   읽어온 파일의 위치를 나타내는 URL이 포함된다.
            //   -> 해당 url을 이용해서 브라우저에 이미지를 볼 수 있다.

            // FileReader.onload = function(){}
            // - FileReader가 파일을 다 읽어온 경우 함수를 수행

            reader.onload = function(e){ //고전 이벤트 모델
                // e : 이벤트 발생 객체
                // e.target : 이벤트가 발생한 요소(객체) -> FileReader
                // e.target.result : FileReader가 읽어온 파일의 URL

                //프로필 이미지의 src 속성의 값을 FileReader가 읽어온 파일의 URL로 변경
                const profileImage = document.getElementById("profile-image");

                profileImage.setAttribute("src", e.target.result);
                // -> setAttribute() 호출 시 중복되는 속성이 존재하면 덮어쓰기
            
                document.getElementById("delete").value = 0;
                //새로운 이미지가 선택되었기때문에 안눌러진 상태로 변경.
            }
        }
    });
}

//이미지 선택 확인

function profileValidate(){
    const inputImage = document.getElementById("input-image");

    const del = document.getElementById("delete"); //hidden 타입

    if(inputImage.value == '' && del.value == 0){
        //빈문자열 == 파일 선택X / del의 값이 0
        //--> 아무것도 안하고 변경버튼을 클리한 경우
        alert("이미지를 선택한 후 변경 버튼을 클릭해주세요.");

        return false;
    }

    return true;
}

// 프로필 이미지 옆 x 버튼 클릭시
document.getElementById("delete-image").addEventListener("click", function(){

    const del = document.getElementById("delete");

    if(del.value == 0){ //눌러지지 않은 경우
        // 1) 프로필 이미지를 기본 이미지로 변경
        document.getElementById("profile-image").setAttribute("src", contextPath + "/resources/images/user.png");
    
        // 2) input type="file"에 저장된 값(value)에 "" 대입 -> 변경하기 버튼 동작 막기
        document.getElementById("input-image").vlaue = "";

        del.value = 1; //눌러진걸로 인식
    }


});