import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Update this with your backend URL
});

// Auth APIs
export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// Patient APIs
export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const getPatientById = async (id: string) => {
  const response = await api.get(`/patients/${id}`);
  return response.data;
};

// EEG Analysis APIs
export const uploadEEGFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/analysis/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const analyzeEEG = async (fileId: string) => {
  const response = await api.post(`/analysis/process/${fileId}`);
  return response.data;
};

// Stats APIs
export const getDashboardStats = async () => {
  const response = await api.get('/stats/dashboard');
  return response.data;
};

// Educational Resources APIs
export const getEducationalResources = async () => {
  const response = await api.get('/education/resources');
  return response.data;
};

export const getResourceById = async (id: string) => {
  const response = await api.get(`/education/resources/${id}`);
  return response.data;
};