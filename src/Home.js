import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new site', body: 'lorem ipsum dolor', author:'fatih', id:1},
        {title: '2My new site', body: 'lorem ipsum dolor', author:'haydar', id:2},
        {title: '3My new site', body: 'lorem ipsum dolor', author:'orhan', id:3}
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;