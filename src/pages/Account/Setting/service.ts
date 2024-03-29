import request from "@/utils/request";

const { api } = process.env

export const saveUserInfo = async (params?: any) => {
    const data = await request.post(`${api}/user/saveUserInfo`, params)
    return data
}
export const uploadAvatar = async (params?: any) => {
    const data = await request.post(`${api}/qnuploads/avatar`, params)
    return data
}

