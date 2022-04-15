import React from "react";

const useAuthen = () => {
  const account = localStorage.getItem('authen');
  return JSON.parse(account)?.authen || false
}

export default useAuthen;