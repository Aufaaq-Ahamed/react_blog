import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Create({ setBlogs }) {
    const navigate = useNavigate();
  const [newItem, setNewItem] = useState({ id: crypto.randomUUID(), title: "", content: "", image: null, views:0});

  function handleSubmit(e) {
    e.preventDefault();
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      newItem
    ]);
    // setNewItem({ id: crypto.randomUUID(), title: "", content: "", image: null }); 
    localStorage.setItem("blogs", JSON.stringify([...JSON.parse(localStorage.getItem("blogs") || "[]"),newItem]));
    navigate("/blog");
  }

  function handleFileChange(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        setNewItem((prev) => ({...prev, image: reader.result}))
    }
    // console.log(reader);
  }

  return (
    <div id="postFormContainer" className="bg-white p-6 rounded-lg shadow-md bg-opacity-75">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form id="postForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          placeholder="Title"
          className="w-full p-2 border rounded mb-4 text-3xl hover:ring-2 ring-blue-500"
          required
        />
        <textarea
          value={newItem.content}
          onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
          placeholder="Content"
          className="w-full p-2 border rounded mb-4 h-120 text-xl hover:ring-2 ring-blue-500"
          required
        ></textarea>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded mb-4 text-3xl hover:ring-2 ring-blue-500"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ">
          Save Post
        </button>
      </form>
    </div>
  );
}