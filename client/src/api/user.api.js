import { apiFetch } from "./client";

export const getUserData = ()=>{
    return apiFetch('/api/user');
}