<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Page</title>

    <link rel="stylesheet" href="${contextPath}/resources/css/main-style.css">
    <link rel="stylesheet" href="${contextPath}/resources/css/myPage-style.css">

    <script src="https://kit.fontawesome.com/1ef9913073.js" crossorigin="anonymous"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>

        <section class="myPage-content">
        
        	<jsp:include page="/WEB-INF/views/member/sideMenu.jsp"/>

            <section class="myPage-main">

                <h1 class="myPage-title">비밀번호 변경</h1>
                <span class="myPage-explanation">현재 비밀번호가 일치하는 경우 새 비밀번호로 변경할 수 있습니다.</span>

                <form action="changePw" method="POST" name="myPage-form" onsubmit="return checkPw()">

                    <div class="myPage-row">
                        <label>현재 비밀번호</label>
                        <input type="password" name="currentPw" id="currentPw" maxlength="30">
                    </div>

                    <div class="myPage-row">
                        <label>새 비밀번호</label>
                        <input type="password" name="newPw" id="newPw" maxlength="30">
                    </div>

                    <div class="myPage-row">
                        <label>새 비밀번호 확인</label>
                        <input type="password" name="newPwConfirm" id="newPwConfirm" maxlength="30">
                    </div>
                    
                    <button id="info-update-btn">변경하기</button>

                </form>
            </section>

        </section>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <script src="${contextPath}/resources/js/member/myPage-changePw.js"></script>
</body>
</html>