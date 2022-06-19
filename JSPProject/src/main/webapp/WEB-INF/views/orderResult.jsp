<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     
<% //자바 코드 작성 영역(scriptlet, 스크립틀릿)

	int result = (int)request.getAttribute("res");

	//JSP에서도 요청시 전달받은 값(parameter)을 전달받을 수 있다.
	String pizza = request.getParameter("pizza");
	String size = request.getParameter("size");
	String amount = request.getParameter("amount");
%>

<!-- HTML 주석 (개발자 도구에 노출 O)-->
<%-- JSP 주석 (개발자 도구에 노출 X)--%>

<%--
	<%@ %> : 지시자 ->
	
	"charset=UTF-8"			: 현재 문서를 해석할 때 UTF-8 문자인코딩을 이용해서 해석
    pageEncoding="UTF-8"	: 현재 문서가 UTF-8 문자 인코딩 형식으로 작성되었음.

	<%  %> : 스크립틀릿(scriptlet) -> JSP에서 자바 코드를 작성할 수 있는 영역
	-> JSTL 라이브러리를 이용해 태그 형식으로 변경
	
	<%= %> : 표현식(Expression) -> 자바 코드의 값을 HTML 형식으로 표현(출력)
	-> EL(Expression Language)을 이용해서 간단하게 값을 출력
--%>  
 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 결과</title>
<style>
	#area{font-size: 18px; font-weight: bold;}

	h1{color: red;}
</style>

</head>
<body>

	<!-- webapp 폴더 내부 html/css/jsp 등은 서버를 끄지않고도 수정 가능하다 -->
	<div id="area">
		피자 : <%= pizza %> <br>
		사이즈 :
		<%	if(size.equals("R")) {	%>
			Regular
		<%	} else {	%>
			Large
		<%	}	%>
		
		<br>
		수량 <%= amount %>판 <br>
	</div>

	<h1> 계산 결과 : <%= result %>원</h1>
	
	<% for(int i=1; i<= 6; i++) { %>
	
	<h<%= i %>><%= i %>번째 출력중...</h<%= i %>>
	
	<% } %>
	
</body>
</html>