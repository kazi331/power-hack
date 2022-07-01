import axios from 'axios';
import { useEffect, useState } from 'react';
function Test() {
  const [posts, setPosts] = useState([])
  // const { isLoading, isError, data, error } = useQuery('info', ()=> axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'));
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then(res => setPosts(res.data))
  }, []);
  // console.log(posts);
  return (
    <div>
      <h2>Test data</h2>
      {posts?.map(post => {
        console.log(post);
        return (<div key={post.id}>
          <h4> {post.id}. {post.title} </h4>
        </div>)
      })}
    </div>
  )
}

export default Test