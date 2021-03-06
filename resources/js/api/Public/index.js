export const getUser = () => Axios.get(apiRoute('api_user_get_authenticated_user'));
export const authUser = payload => Axios.post(apiRoute('api_authentication_client_web_login_proxy'), payload);
export const registerUser = payload => Axios.post(apiRoute('api_user_register_user'), payload);
// export const putTest = data => Axios.put(apiRoute('auth', {id: data.id}), data);
// export const test = payload => Axios.get(apiRoute('test_endpoint', payload));
