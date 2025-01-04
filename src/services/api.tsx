import axios from "axios";

export const createApi = (name: any) => {
  if (!name) {
    throw new Error("O nome é obrigatório para configurar a API.");
  }

  return axios.create({
    baseURL: `https://primary-production-aac6.up.railway.app/webhook/4988e677-e798-4c29-8ebf-99cf6c505732?user=${name}`,
    timeout: 90000,
  });
};

export const createApiImage = (url: any) => {
  if (!url) {
    throw new Error("O nome é obrigatório para configurar a API.");
  }

  return axios.create({
    baseURL: `https://primary-production-aac6.up.railway.app/webhook/4988e677-e798-4c29?url=${url}`,
    timeout: 70000,
  });
};
