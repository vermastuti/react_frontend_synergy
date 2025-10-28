import React from 'react';
import { DataProvider, DeleteParams, RaRecord } from 'react-admin';

export interface Movie extends RaRecord {
  // id: number;
  title: string;
  genre: string;
  releaseDate?: string;
  mlanguage?: string,
  rating?: number,
  duration?: string,
  status?: string
  [key: string]: any; // Allow other optional fields
}

const API_URL = 'http://localhost:9002/api';
<<<<<<< Updated upstream
let allMovies: any = null;

=======
const resourceCache: Map<string, any[]> = new Map();
>>>>>>> Stashed changes

// ✅ Create a custom dataProvider so React Admin can handle your custom /all endpoint
export const MovieDataProvider: DataProvider = {

  getList: async (resource:any, params:any) => {

    const { filter, pagination, sort } = params;
    const searchTerm = filter.q?.toLowerCase();

    // 1. If we don't have the data yet, fetch it from the API
<<<<<<< Updated upstream
    if (allMovies === null) {
      const response = await fetch(`${API_URL}/${resource}`);
      allMovies = await response.json();
=======
    if (!resourceCache.has(resource)) {
      const response = await fetch(`${API_URL}\/${resource}`);
      let resourceData = await response.json();
      resourceCache.set(resource, resourceData);
      console.log("Data fetched and cached for resource:", API_URL, resource);
      console.log(resourceData);
>>>>>>> Stashed changes
    }

    let filteredMovies = resourceCache.get(resource) || [];

    // 2. Apply the search filter locally
    if(filter){
      filteredMovies = filteredMovies.filter((movie: any) => {

        if(searchTerm){
          const textMatch = movie.title?.toLowerCase().includes(searchTerm) || 
                            movie.genre?.toLowerCase().includes(searchTerm) ||
                            movie.status?.toLowerCase().includes(searchTerm)
          
          if (!textMatch) return false;
        }

        if(filter.releaseDate_gte){
          const releasedDate = new Date(movie.releaseDate);
          const filterDate = new Date(filter.releaseDate_gte);
          if(releasedDate <= filterDate) return false;
        }

        if(filter.rating_gt){
          if(movie.rating <= parseFloat(filter.rating_gt)) return false;
        }

        return true;

      });
    }

    // 3. Apply sorting locally
    const { field, order } = sort;
    const sortedMovies = [...filteredMovies].sort((a, b) => {
      if (a[field] > b[field]) return order === 'ASC' ? 1 : -1;
      if (a[field] < b[field]) return order === 'ASC' ? -1 : 1;
      return 0;
    });

    // 4. Apply pagination locally
    const { page, perPage } = pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedMovies = sortedMovies.slice(start, end);

    // 5. Return the result, including the total count of the filtered data
    return {
      data: paginatedMovies.map((movie) => ({ ...movie, id: movie.id })),
      total: filteredMovies.length,
    };
  },

  getMany: async (resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}`);
    const data = await response.json();
    console.log("getMany is called");

    return {
      data: data.map((movie: { id: any; }) => ({ ...movie, id: movie.id })), // ensure each record has an id field
      total: data.length,
    };
  },

  getManyReference: async(resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}`);
    const data = await response.json();
    console.log("getManyReference is called");

    return {
      data: data.map((movie: { id: any; }) => ({ ...movie, id: movie.id })), // ensure each record has an id field
      total: data.length,
    };
  },

  getOne: async (resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const data = await response.json();
    return { data };
  },

  update: async (resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    console.log(params.data);
    console.log(data);
    return { data };
  },

  updateMany: async(resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    return { data };
  },

  // cancel: async (resource:any, params:any) => {
  //   const response = await fetch(`http://localhost:9002/api/movies/${params.id}/cancel`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     // body: JSON.stringify(params.data),
  //   });
  //   const data = await response.json();
  //   return { data };
  // },

  create: async (resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    console.log(params.data);
    console.log(data);
    return { data };
  },

  delete: async (resource:string, params:DeleteParams) => {
    await fetch(`${API_URL}/${resource}/${params.id}`, { method: 'DELETE' });
    const deletedRecord = { id: params.id } as Movie;

    return { data: deletedRecord };
  },

  // deleteMany: async(resource:any, params:any) => {
  //   await fetch(`http://localhost:9002/api/movies/`, { 
  //     method: 'DELETE' });
  //   return { data: { id: [params] } };
  // },

};