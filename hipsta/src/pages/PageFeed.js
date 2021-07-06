import { actionPromise } from "../reducers/allReducers";
import { gqlQuery } from "../actions/ActionGQL"

//60cdbf6734d8b37f3cf7523e
// const actionFollowingById = (_id) =>
//   actionPromise(
//     'goodById',
//     gqlQuery(
//       `
//       query UserFindOne($query:String) {
//         UserFindOne(query:$query) {
//          following {
//            _id
//          }
//         }
//       }    
//     `,
//       { query: JSON.stringify([{ _id }]) },
//     ),
//   );
// console.log
// dispatch(actionFollowingById(localStorage.myUserId));
