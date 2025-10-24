import { API } from "../_api";

export const getAuthors = async () => {
  const { data } = await API.get("/authors");
  return data.data;
}

export const createAuthor = async (data) => {
 try {
   const response = await API.post("/authors", data);
   return response.data;
 } catch (error) {
  console.log(error);
  throw error;
 }

 
}
export const deleteAuthor = async (id) => {
  await API.delete(`/authors/${id}`);
};

export const showAuthor = id => API.get(`/authors/${id}`).then(res => res.data.data);
export const updateAuthor = (id, data) => API.post(`/authors/${id}`, data, {
  headers: { "Content-Type": "multipart/form-data" },
});

