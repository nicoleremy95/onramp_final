//TODO: make comments it's own component 
import * as React from 'react';
import {useState, useEffect} from 'react';

// interface Message {
//     message: string,
// }

export default function Comment() {
    // useEffect(()=>{
  //   if(currentUser === newsDB)
  // })

  // const id = useParams();
  // console.log('News.tsx id', id)
  // const {id} = useParams<ParamTypes>();
  
  // console.log('id', id)

  // const addCommBtn = `/comment/${id}`
  // console.log('News.tsx id', id)

//   const [commentObj, setCommentObj] = useState<Message>({
//     message:"",
//   });

  //TODO: work on function and api call for favoriting a sup feed 
  // const params = useParams<{params: string}>();
  // console.log('params', params)
  // function favoriteCom(e: React.ChangeEvent<HTMLFormElement>): boolean{
  //   API.postReaction(reactionObj, newsDB._id)
  //   return true;
  // }

  //TODO: work on api call to get newsid for particular sup feed for comments and reactions
  // useEffect(()=>{
  //   API.getNewsById(id)
  //   .then(res=>{
  //     console.log('News.tsx res.data', res.data)
  //   })
  // })
    // function inputChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    //     //TODO: refactor any
    //     const{name,value}: any = e.target;
    //     console.log('News.tsx e.target', e.target)
    //     setCommentObj({...commentObj, [name]: value})
    //   }
      
    //   function inputSubmit(e: React.ChangeEvent<HTMLFormElement>) : boolean {
    //     e.preventDefault();
    //     // console.log('News.tsx id', id)
    //     //TODO: work on input api call for comments 
    //     // API.getNewsById(id)
    //     // .then(res=>{
    //     //   console.log('News.tsx res.data', res.data)
    //     // })
    //     // console.log('News.tsx e.target', e.target.getAttribute("id"))
    //     const id:any = e.target.getAttribute("id")
    //     API.postComment(commentObj, id )
    //     .then(comment =>{
    //       // history.push("/")
    //       // console.log('News.tsx comment', comment)
    //     })
    //     .catch(err =>console.log('err', err))
    //     return true;
    //   }

//     const messArr = [];
  
//   for(let i = 0; i < newsDB.length; i ++){
//     for(let j = 0; j < newsDB[i].comments.length ; j ++){
//       console.log('newsDB[i].comments[j].message', newsDB[i].comments[j].message)
//       messArr.push(
//         <div>
//           <p>
//             {newsDB[i].comments[j].message}
//           </p>
//         </div>
//       )
//     }
    
//   }
    return (
        <div>
                 {/* {currentUser? 
              <form
                  noValidate 
                  autoComplete="on" 
                  onSubmit={inputSubmit}
                  id={newsDB[i]._id}
                >
                  <TextField
                  id="filled-multiline-static"
                  // componentId={newsDB[i]._id}
                  label="comment"
                  multiline
                  rows={2}
                  variant="filled"
                  className={classes.textField}
                  type="textarea"
                  name="message"
                  value={commentObj.message}
                  onChange={inputChange}
                  inputProps={{
                    maxlength: 100
                  }}
                  helperText={`${commentObj.message.length}/100`}
                />
                <Button 
                  variant="contained" 
                  color="primary"  
                  type="submit" 
                  // data-comm-news-id={newsDB[i]._id}
                  className={classes.button}
                >
                  send
                </Button> */}
                {/* TODO: input user protection around submitting an empty form  */}
                {/* {inputField===false? <Button 
                  variant="contained" 
                  color="primary"  
                  type="submit" 
                  data-comm-news-id={id}
                  className={classes.button}
                >
                  send
                </Button> : null} */}
                
                {/* </form>: null} */}
                {/* <div>
                 <p>{messArr.map(news =>{return news})}</p>
               </div> */}
        </div>
    )
}
