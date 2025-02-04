export function Blog({ blogs }) {
    return (
      <div className="flex flex-wrap justify-around m-6 px-32 py-10 gap-10">
        {
          blogs.map(blog => (
            <div className="bg-red-200 h-100 w-80 rounded-md shadow-lg hover:opacity-70" key={blog.id}>
              <div className="h-2/3 bg-green-300 rounded-md">{blog.title}</div>
              <div className="h-1/3 bg-red-600 rounded-md shadow-sm">{blog.content}</div>
            </div>
          ))
        }
      </div>
    );
  }