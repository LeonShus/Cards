import axios from "axios"

const inst = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const authApi = {
    ping(){
        return inst.get("ping")
    }
}