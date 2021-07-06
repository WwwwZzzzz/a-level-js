import { actionPromise } from "../reducers/allReducers";
import { gqlQuery } from "../actions/ActionGQL"

export const actionPostById = (_id) =>
    actionPromise(
        'postById',
        gqlQuery(
            `
        query postById($query: String){
            PostFindOne(query:$query) {
              _id title description post {
                  _id, title, image {
                    text, url, owner
                  }
              }
            }
          }    
        `,
            { query: JSON.stringify([{ _id }]) },
        ),
    );

export const actionCreatePost = (name, description) => {
    return actionPromise('createPost', gqlQuery(`
        mutation createPost($name: String, $description: String) {
          PostUpsert(playlist:{
            title: $name, text: $description
          }) {
            _id, title, description
          }
        } 
        `, { name, description }))
}
