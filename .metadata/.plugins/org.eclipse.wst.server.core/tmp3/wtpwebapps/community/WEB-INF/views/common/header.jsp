<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<header>

	<!-- 클릭시 메인페이지로 이동하는 로고 -->
	<section>
		<a href="#">
		
			<!-- header를 별도의 jsp로 분리한 경우
				 상대경로로 작성된 이미지의 경로가 일치하지 않게 됨
				 
				 * 지금처럼 분리한 jsp에 경로를 지정하는 경우
				   상대경로는 문제가 발생할 가능성이 높음!!
				   -> 절대 경로로 작성하는 것이 바람직함
			-->
			 
			<%-- 
			/community
			<%= request.getContextPath() %>
			${pageContext.servletContext.contextPath}
			
			위에 작성된 내용은 모두 같은 결과이나 문제가 조금씩 있음
			-> 모든 주소 요청 시 동작하는 EncodingFilter에서
			   application scope에 최상위 주소를 간단히 부를 수 있는 형태로 저장
			
			--%>
			
			
			<img src="${contextPath}/resources/images/logo.jpg" id="home-logo">
		</a>
	</section>

	<!-- header2 -->
	<section>        
		<article class="search-area">

			<!-- form 내부 input 태그 값을 서버 또는 페이지로 전달 -->
			<form action="#" name="search-form">
                    
				<!-- form 내부에서 inut을 종류별로 묶는 용도로 많이 사용 -->
 				<fieldset>
    
					<!-- autocomplete="off" : HTML 기본 자동완성 끄기 -->
					<input type="search" id="query" name="query" autocomplete="off"
					placeholder="검색어를 입력해주세요.">
    
					<!-- 검색 버튼 -->
					<button type="submit" id="search-btn" class="fa-solid fa-magnifying-glass"></button>
				</fieldset>
    
			</form>
    
		</article>
	</section>

	<section></section>
</header>

<!-- 
	쿼리 스트링 : 주소에 담겨져서 전달되는 파라미터를 나타내는 문자열
	주소?name속셩=값&name속셩=값...
 -->

<nav>
		<ul>
			<li><a href="${contextPath}/board/list?type=1">공지사항</a></li>
			<li><a href="${contextPath}/board/list?type=2">자유 게시판</a></li>
			<li><a href="${contextPath}/board/list?type=3">질문 게시판</a></li>

			<li><a href="#">FAQ</a></li>
			<li><a href="#">1:1 문의</a></li>
		</ul>
</nav>