import { useState, useEffect } from "react";

export function Create({ setBlogs }) {
  const [newItem, setNewItem] = useState({ id: crypto.randomUUID(), title: "", content: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      { id: crypto.randomUUID(), title: newItem.title, content: newItem.content }
    ]);
    setNewItem({ id: crypto.randomUUID(), title: "", content: "" });
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ">
          Save Post
        </button>
      </form>
    </div>
  );
}