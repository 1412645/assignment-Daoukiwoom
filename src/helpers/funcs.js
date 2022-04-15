export const getCurrentUser = () => {
  const data = localStorage.getItem('authen');
  return data
}