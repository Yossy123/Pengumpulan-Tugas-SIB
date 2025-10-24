import { API } from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data.data;
}

export const createGenre = async (data) => {
 try {
   const response = await API.post("/genres", data);
   return response.data;
 } catch (error) {
  console.log(error);
  throw error;
 }
}

export const deleteGenre = async (id) => {
  await API.delete(`/genres/${id}`);
};

export const showGenre = id => API.get(`/genres/${id}`).then(res => res.data.data);
export const updateGenre = (id, data) => API.post(`/genres/${id}`, data); 
