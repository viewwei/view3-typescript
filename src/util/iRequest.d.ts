export interface IResponseData<T> {
    data:T,
    code:number,
    msg:string
}
export interface IUrlParams {
    [key:string]:any
}
