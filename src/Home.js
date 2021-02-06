import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new site', body: 'lorem ipsum dolor', author:'fatih', id:1},
        {title: '2My new site', body: 'lorem ipsum dolor', author:'haydar', id:2},
        {title: '3My new site', body: 'lorem ipsum dolor', author:'orhan', id:3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;