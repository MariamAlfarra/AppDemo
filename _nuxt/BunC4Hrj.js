import{u as i}from"./DRSpHbpW.js";import{ak as n,ab as a}from"./6MyY9Rk-.js";const u=n(e=>{const t=i();if(t.checkAuth(),!t.isAuthenticated&&e.path!=="/login")return a("/login");if(t.isAuthenticated&&e.path==="/login")return a("/")});export{u as default};