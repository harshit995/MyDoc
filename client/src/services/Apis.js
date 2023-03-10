import { commonrequest } from "../services/ApiCall"
import { BASE_URL } from "../services/helper"

export const registerfunc = async (data) => {
    return await commonrequest("POST", `${BASE_URL}/register`, data, "");
}

export const getuserfunc = async () => {
    return await commonrequest("GET", `${BASE_URL}/getuserdata`, {});
}
export const logoutfunc = async () => {
    return await commonrequest("GET", `${BASE_URL}/logout`, {});
}
export const applydocfunc = async (data) => {
    return await commonrequest("POST", `${BASE_URL}/applydoctor`, data, "");
}

export const getmarkallreadfunc = async (data) => {
    return await commonrequest("POST", `${BASE_URL}/getallnotification`, data, "");
}

export const getdeletefunc = async (data) => {
    return await commonrequest("POST", `${BASE_URL}/deleteallnotification`, data, "");
}

export const getallusersfunc = async () => {
    return await commonrequest("GET", `${BASE_URL}/getallusers`, {});
}
// export const usergetfunc = async (search, gender, activity, sort) => {
//     return await commonrequest("GET", `${BASE_URL}/user/details?search=${search}&gender=${gender}&activity=${activity}&sort=${sort}`, "");
// }

export const loginfunc = async (data) => {
    return await commonrequest("POST", `${BASE_URL}/login`, data, "");
}

// export const editfunc = async (id, data, header) => {
//     return await commonrequest("PUT", `${BASE_URL}/user/edit/${id}`, data, header);
// }

// export const deletefunc = async (id) => {
//     return await commonrequest("DELETE", `${BASE_URL}/user/delete/${id}`, {});
// }

// export const statuschangefunc = async (id, data) => {
//     return await commonrequest("PUT", `${BASE_URL}/user/activity/${id}`, { data });
// }

// export const exporttocsvfunc = async () => {
//     return await commonrequest("GET", `${BASE_URL}/userexport`, "");
// }