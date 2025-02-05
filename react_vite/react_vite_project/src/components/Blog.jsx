import { Link } from "react-router-dom";

export function Blog({ blogs, setBlogs }) {


    function deleteBlog(id) {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }
    function addViews(id) {
        const updatedBlogs = blogs.map(blog => blog.id===id ? {...blog, views: blog.views+1} : blog);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }

    return (
        <div className="flex font-mono flex-wrap justify-around m-6 px-32 py-10 gap-10 h-screen">
            {
                blogs.map((blog, index) => (
                    <div key={blog.id} className="bg-black w-120 h-90 rounded-md shadow-lg hover:ring-2 ring-blue-500">
                        <Link onClick={() => addViews(blog.id)} to={`/content/${blog.id}`}>

                            <img src={blog.image} alt="Blog" className="w-full h-65 object-cover rounded-t-md" />
                        </Link>
                        <div className="flex justify-between">
                            <div className="p-8 font-bold text-xl text-white">{blog.title}</div>
                            <button
                                onClick={() => deleteBlog(blog.id)}
                                className="m-6 p-4 py-2 rounded-full font-bold text-xl text-white bg-red-800 hover:cursor-pointer">
                                Delete
                            </button>
                            <button
                                onClick={() => deleteBlog(blog.id)}
                                className="m-6 p-4 py-2 rounded-full font-bold text-xl text-white bg-green-800 hover:cursor-pointer">
                                Edit
                            </button>
                            <p className="text-white">👁️{blog.views}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
