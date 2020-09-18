import axios from 'axios'

// CREATING API call skeletons to be called globally in the app.
const API = {
  getMedia: search => axios.get(`/api/omdb/${search}`),
  getSavedMedia: () => axios.get('/api/media'),
  saveMedia: media => axios.post('/api/media', media),
  deleteMedia: id => axios.delete(`/api/media/${id}`)
}

export default API