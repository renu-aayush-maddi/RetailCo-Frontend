import { create } from "zustand";

const useAuth = create((set) => ({
  token: sessionStorage.getItem("os_token") || null,
  user: null,
  login: (token) => {
    sessionStorage.setItem("os_token", token);
    set({ token });
  },
  logout: () => {
    sessionStorage.removeItem("os_token");
    set({ token: null, user: null });
  },
}));

export default useAuth;
