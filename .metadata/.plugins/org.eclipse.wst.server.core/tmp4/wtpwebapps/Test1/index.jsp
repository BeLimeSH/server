<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
</head>
<body>
	<h1>회원 정보 조회</h1>
	
	<form action="selectUser" method="get">
		<input type="number" name="userNo" placeholder="회원 번호 입력">
		
		<button>조회</button>
	</form>
	
	
</body>
</html>