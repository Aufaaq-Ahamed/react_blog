export function Create() {
    return (
        <>
            <div id="postFormOverlay" class="fixed inset-0 bg-gray-900 bg-opacity-100 flex items-center justify-center">
                <div id="postFormContainer" class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold mb-4">Create a New Post</h2>
                    <form id="postForm">
                        <input type="hidden" id="postId" />
                        <input type="text" id="title" placeholder="Title" class="w-full p-2 border rounded mb-4 text-3xl hover:ring-2 ring-blue-500" required/>
                        <textarea id="content" placeholder="Content" class="w-full p-2 border rounded mb-4 h-120 text-xl hover:ring-2 ring-blue-500" required></textarea>
                        <input type="file" id="image"  class="w-full p-2 border rounded mb-4 hover:ring-2 ring-blue-500" required/>
                        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ">Save Post</button>
                        <button id="cancelForm" type="button" class="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-600">Cancel</button>
                    </form>
                </div>
            </div>
        </>
            )
}