import {
  SET_CURRENT_USER,
} from "./types";// Register User


export const loginUser = (userData, history) => dispatch => {

  fetch('https://api.app.lettria.com/auth/login', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbmFseXRpY0lkIjoiNWY3NDk3M2RmOWFlYzIxNjIzNzdkYzU1IiwicHJvamVjdElkIjoiNWY3NDk3M2RmOWFlYzIxNjIzNzdkYzU2Iiwic3Vic2NyaXB0aW9uSWQiOiI1Zjc0OTcyMzE5ZGY3ZDE2MjhlZDg0OWYiLCJpYXQiOjE2MDE0NzY0MTksImV4cCI6MTY0OTg2MDQxOX0.KzDysz3FGf-davL52Wrdqf_eI-zTv0oJDTPUttJX2jU',
              },
             body: JSON.stringify({
                email: userData.email,
                password: userData.password,
						})
        })
        .then(results => results.json())
				.then(res => {
          if(res.user){
            dispatch(setCurrentUser(res));
              history.push({pathname:"/user/profil"})
            }
        })
};

export const updateInfoProfil = (userData) => dispatch => {
  fetch('https://api.app.lettria.com/auth/modifyUser', {
						method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'LettriaSessionKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZkZjFkYmY5YWVjMjE2MjM3N2RjNGQiLCJlbWFpbCI6InRoaWJhdWx0LmNvbGxhcmRAZ21haWwuY29tIiwicm9sZSI6IkJldGFVc2VyIiwiaWF0IjoxNjAxNDcxNTMxLCJleHAiOjE2MDE1NTc5MzF9.xdk2fi5zp3j_kXx5AmJ6v-SxZNleDbQ2kt62vuZNC7E',
              },
             body: JSON.stringify({
                firstName: userData.firstName,
								lastName: userData.lastName,
						})
        })
				.then(results => results.json())
				.then(res => {
					dispatch(setCurrentUser(res))
				})
}


export const setCurrentUser = res => {
  return {
    type: SET_CURRENT_USER,
    user: res.user,
    isAuthenticated: true
  };
};// User loading