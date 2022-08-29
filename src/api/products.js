import request from "../utils/request";
export function get(params={}){
    return request({
        method:'GET',
        url:'/godds',
        params, 
    })
}
export function getId(id){
    return request({
        method:'GET',
        url:`/${id}`,
    })
}
export function update(id,data){
  return request({
        method:'PUT',
        url:`/${id}`,
        data
    })
}