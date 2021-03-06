package edu.kh.test.user.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.kh.test.user.model.service.UserService;
import edu.kh.test.user.vo.User;

@WebServlet("/selectUser")
public class SelectUserServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int userNo = Integer.parseInt( req.getParameter("userNo") );
		
		UserService service = new UserService();
		User user = null;
		
		
		try {
			user = service.selectUser(userNo);
			
			String path = "";
			RequestDispatcher dispatcher;
			
			if(user != null) {
				// 조회 결과가 있을 때 /views/searchSuccess.jsp로 결과 위임
				
				path = "WEB-INF/views/searchSuccess.jsp";				
				dispatcher = req.getRequestDispatcher(path);
				
				req.setAttribute("userNo", user.getUserNo());
				req.setAttribute("userId", user.getUserId());
				req.setAttribute("userName", user.getUserName());
				req.setAttribute("userAge", user.getUserAge());
				
				dispatcher.forward(req, resp);
				
			} else {
				// 조회 결과가 없을 때 /views/searchFail.jsp로 결과 위임
				
				path = "WEB-INF/views/searchFail.jsp";
				dispatcher = req.getRequestDispatcher(path);
				
				dispatcher.forward(req, resp);
				
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
