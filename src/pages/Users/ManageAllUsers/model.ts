import service from "@/services/user";
import { useEffect, useState } from "react";

export default () => {
    const [data, setData] = useState([])
    const getAllUsers = async () => {
        const {data} = await service.getAllUser()
        console.log(data);
        setData(data)
    }
    useEffect(() => {
        getAllUsers()
    },[])
    return {
        data,
    }
}