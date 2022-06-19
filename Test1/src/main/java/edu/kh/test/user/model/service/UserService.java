package edu.kh.test.user.model.service;

import static edu.kh.test.common.JDBCTemplate.*;

import java.sql.Connection;

import edu.kh.test.user.model.dao.UserDAO;
import edu.kh.test.user.vo.User;

public class UserService {

	UserDAO dao = new UserDAO();
	User user = new User();
	
	/**
	 * 유저 조회 Service
	 * @param userNo
	 * @return user
	 * @throws Exception
	 */
	public User selectUser(int userNo) throws Exception {
		
		Connection conn = getConnection();
		
		user = dao.selectUser(conn, userNo);
		
		close(conn);
		
		return user;
	}

}
