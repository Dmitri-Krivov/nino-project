import { useEffect, useState } from "react";
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // const handleDelete = (id) => {
  //   const newBlogs = data.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  console.log("1111111" + blogs)

   useEffect(() => {
    console.log(count);
    document.title = `Вы нажали ${count} раз`;
  },[count]);

  return (
    <div>
     
           <div className="home">
              {error&&<div>{error}</div>}
              {isPending&& <div>Loading...</div>}
              {/* {data && <BlogList blogs={data} title="All Blogs" handleDelete={handleDelete} />} */}
              {blogs && <BlogList blogs={blogs} title="All Blogs"    />}
           </div>
          <p>Total clicks: {count} </p>
          <button onClick={() => setCount(count + 1)}>
            Push me
          </button>
    </div>

  );

}
 
export default Home;
