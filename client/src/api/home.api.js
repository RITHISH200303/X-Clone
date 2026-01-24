import { apiFetch } from "./client";

export const getHomeData = ()=>{
    return apiFetch('/api/home');
}