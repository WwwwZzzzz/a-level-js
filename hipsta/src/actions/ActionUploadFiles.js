// import { store } from "../reducers/allReducers"
// import {CDrop} from "../components/DropComponent"

//  const actionUploadFiles = (files) =>
//     async (dispatch) => {
//         const promises = files.map((file) => {
//             const filesData = new FormData
//             fileData.append("file", file)
//             let promise = url.innerHTML = url.href = "/" + await(await fetch('/upload', {
//                 method: "POST",
//                 headers: localStorage.authToken ? { Authorization: 'Bearer ' + localStorage.authToken } : {},
//                 body: filesData
//             }))
//                 .then(response.json())
//             return promise
//         })

//         return await dispatch(actionPromise("uploads", Promise.all(promises)))
//     }