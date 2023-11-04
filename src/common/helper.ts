import { ResEnum } from "./enum/enum";

export const responseCreater =(status: keyof typeof ResEnum , message:string, data?:unknown, props?:object) =>  {
    return {
        status : ResEnum[status],
        message,
        data,
        ...props
    }
}

export const errorResponse = (error: any)=>{
    console.log("error",error);
    
    return {
        status :ResEnum.failure,
        message : error?.message || "Something went wrong"
    }
}