import { useEffect, useState } from "react";
import { getAuthors } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => { getAuthors().then(setAuthors); }, []);

  // Jika photo-nya adalah filename hasil upload ke storage laravel.
  const PHOTO_BASE_URL = "http://127.0.0.1:8000/storage/authors/";

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="author-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="author-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Search Author"
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <Link
              to="/admin/authors/create"
              className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            >
              <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/></svg>
              Add Author
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">Name</th>
                <th scope="col" className="px-4 py-3">Bio</th>
                <th scope="col" className="px-4 py-3">Photo</th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? authors.map(author => (
                <tr key={author.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">{author.name}</td>
                  <td className="px-4 py-3">{author.bio}</td>
                  <td className="px-4 py-3">
                    {author.photo
                      ? (
                        <div>
                          <img
                            src={
                              author.photo.startsWith("http")
                                ? author.photo
                                : PHOTO_BASE_URL + author.photo
                            }
                            alt={author.name}
                            className="h-10 w-10 object-cover rounded"
                          />
                          <div className="text-xs break-all">{author.photo}</div>
                        </div>
                      )
                      : <span className="italic text-gray-400">No photo</span>
                    }
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3} className="text-center py-4">No authors found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
