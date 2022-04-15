import axios from "axios";

export const login = async (data) => {
  const url = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
  const result = await axios.get(url);
  const account = {
    username: result.data.username,
    password: result.data.password
  };
  if (JSON.stringify(data) === JSON.stringify(account)) {
    return {
      authen: true,
      username: account.username
    }
  }
  return {
    authen: false
  }
}