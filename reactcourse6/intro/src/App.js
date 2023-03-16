// import { Route} from "react-route-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from 'react-router-dom';
import axios from "axios";
import React from "react";


const baseURL = "https://jsonplaceholder.typicode.com/posts";

const baseURLUser = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [postUsers, setUsers] = React.useState(null);

React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);
  });
  axios.get(baseURLUser).then((response) => {
    setUsers(response.data);
  });
}, []);



if (!post) return null;
// var posts = [];
// posts = data;  
if (!postUsers) return null;
return (
 <BrowserRouter>
 <landing>
 <div className="posts">
  {
  post.map(data =>
    <p>{data.title},{data.body}</p>
    )
  }
  </div>
  <div className="users">
  {
        postUsers.map(data =>
          <p>{data.id},{data.username}</p>
          )
  }
  </div>
 </landing>

 </BrowserRouter>
  );
}
