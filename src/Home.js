import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new site', body: 'lorem ipsum dolor', author:'fatih', id:1},
        {title: '2My new site', body: 'lorem ipsum dolor', author:'haydar', id:2},
        {title: '3My new site', body: 'lorem ipsum dolor', author:'fatih', id:3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);              
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;