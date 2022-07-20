import { request as umiRequest } from "@umijs/max"
const request = {
    get: (url: string, params?: any) => {
        const data = umiRequest(url, { method: "get", params});
        return data
    },
    post: (url: string, params?: any) => {
        const data = umiRequest(url, { method: "post", data: params });
        return data
    }
}
export default request