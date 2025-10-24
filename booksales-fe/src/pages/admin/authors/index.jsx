import { useEffect, useState } from "react";
import { getAuthors, deleteAuthor } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  const PHOTO_BASE_URL = "http://127.0.0.1:8000/storage/authors/";

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this author?"
    );
    if (confirmDelete) {
      await deleteAuthor(id);
      setAuthors(authors.filter((a) => a.id !== id));
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Author List
          </h2>
          <Link
            to="/admin/authors/create"
            className="mt-3 md:mt-0 flex items-center bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add Author
          </Link>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 w-32">Name</th>
                <th className="px-4 py-3">Bio</th>
                <th className="px-4 py-3 w-44">Photo</th>
                <th className="px-4 py-3 w-20 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author) => (
                  <tr
                    key={author.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 group transition"
                  >
                    <td className="px-4 py-3 font-semibold">{author.name}</td>
                    <td className="px-4 py-3">{author.bio}</td>
                    <td className="px-4 py-3">
                      {author.photo ? (
                        <div>
                          <img
                            src={
                              author.photo.startsWith("http")
                                ? author.photo
                                : PHOTO_BASE_URL + author.photo
                            }
                            alt={author.name}
                            className="h-12 w-12 object-cover rounded inline-block ring-1 ring-gray-200 dark:ring-gray-700 mb-1"
                          />
                          <div className="text-xs text-gray-400 max-w-[120px] truncate">
                            {author.photo}
                          </div>
                        </div>
                      ) : (
                        <span className="italic text-gray-400">No photo</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right relative">
                      <div className="inline-block">
                        <button
                          onClick={() => toggleDropdown(author.id)}
                          className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
                          type="button"
                          aria-label="More actions"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        {openDropdown === author.id && (
                          <div className="absolute right-0 mt-1 z-10 w-32 bg-white rounded border shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col py-1">
                            <Link
                              to={`/admin/authors/edit/${author.id}`}
                              className="block py-2 px-4 hover:bg-indigo-50 dark:hover:bg-gray-700 text-indigo-700 dark:text-indigo-300 font-medium w-full text-left text-sm transition"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(author.id)}
                              className="block w-full text-left py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-400 italic"
                  >
                    No authors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
