// import { actionPromise } from "../reducers/allReducers";
// import { gqlQuery } from "../actions/ActionGQL"

// export const actionPromiseFeed = () =>
//     actionPromise(
//         "feed",
//         gqlQuery(
//             `query {
//         PostFind(query:"[{}]") {
//           title,
//           text,
//           _id,
//           createdAt,
//           likes {
//            owner {
//               _id,
//               login,
//               avatar {
//                   url
//               }
//             }
//           }
//           images {
//             text,
//             url
//           }
//           owner {
//             _id,
//             login,
//             avatar {
//                 url
//             }
//           }
//         }
//       }`
//         )
//     );