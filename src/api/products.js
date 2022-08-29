import service from "../utils/request";
export function getSms(params={}){
     service.request({
        method:'GET',
        url:'/goods/',
        params, 
    })
}


// export function getId(id){
//     return request({
//         method:'GET',
//         url:`/${id}`,
//     })
// }
// export function update(id,data){
//   return request({
//         method:'PUT',
//         url:`/${id}`,
//         data
//     })
// }