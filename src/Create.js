import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('fatih');

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    placeholder="My Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    placeholder="Blog Content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Auther:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="fatih">fatih</option>
                    <option value="haydar">haydar</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;