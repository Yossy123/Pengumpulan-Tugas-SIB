import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    photo: null,
    _method: "PUT",
  });
  const [oldPhoto, setOldPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await showAuthor(id);
      setFormData({
        name: data.name,
        bio: data.bio,
        photo: null,
        _method: "PUT",
      });
      setOldPhoto(data.photo);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("bio", formData.bio);
    if (formData.photo) {
      fd.append("photo", formData.photo);
    }
    fd.append("_method", "PUT");
    try {
      await updateAuthor(id, fd);
      navigate("/admin/authors");
    } catch (error) {
      alert("Update failed: " + error.message);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Author</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="Author name" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
              <textarea id="bio" name="bio"
                value={formData.bio} onChange={handleChange} rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Short bio..." />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Photo {oldPhoto && (
                  <span className="text-xs ml-2 text-gray-400">(Current: {oldPhoto})</span>
                )}
              </label>
              <input type="file" name="photo" id="photo" accept="image/*" onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer" />
            </div>
          </div>
          <button type="submit"
            className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 ">
            Save Data
          </button>
        </form>
      </div>
    </section>
  );
}
