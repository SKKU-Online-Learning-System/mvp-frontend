import { useEffect } from "react"
import axiosInstance from "apis";

export const usePreventDefault = () => {
    const listener = (event:any) => {
        // event.preventDefault();
        console.log("TEst")
        	axiosInstance
			.get(`${process.env.NEXT_PUBLIC_API_SERVER}auth/temp-login`)
			.then((res) => console.log(res.data))
			.catch(e => console.log(e))
			.finally(()=>console.log("ss"))
        event.returnValue = "asdsad";
      };
    const enablePrevent = () => window.addEventListener('beforeunload',listener);
    const disablePrevent = () => window.removeEventListener('beforeunload',listener);

    return {enablePrevent, disablePrevent};
}

export const usePageHide = () => {
    const listener = (event:any) => {
        event.preventDefault();
        window.open('https://google.com');
        event.returnValue = "asdsad";
      };
    const enableHide = () => window.addEventListener('pagehide',listener);
    const disableHide = () => window.removeEventListener('pagehide',listener);

    return {enableHide, disableHide};
}