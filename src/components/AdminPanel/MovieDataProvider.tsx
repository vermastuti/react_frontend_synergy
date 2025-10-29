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

const API_URL = 'http://localhost:9003/api';
const resourceCache: Map<string, any[]> = new Map();


// ✅ Create a custom dataProvider so React Admin can handle your custom /all endpoint
export const MovieDataProvider: DataProvider = {

  getList: async (resource:any, params:any) => {

    const { filter, pagination, sort } = params;
    const searchTerm = filter.q?.toLowerCase();

    // 1. If we don't have the data yet, fetch it from the API
    // if (!resourceCache.has(resource)) {
      const response = await fetch(`${API_URL}\/${resource}`);
      let resourceData = await response.json();
      resourceCache.set(resource, resourceData);
      console.log("Data fetched and cached for resource:", API_URL, resource);
      console.log(resourceData);
    // }

    let filteredMovies = resourceCache.get(resource) || [];

    // 2. Apply the search filter locally
    if(filter && filteredMovies.length > 0){
      filteredMovies = filteredMovies.filter((record: any) => {

        if(searchTerm){
          let textMatch: any;
          if(resource === 'movies'){
            textMatch = record.title?.toLowerCase().includes(searchTerm) || 
                        record.genre?.toLowerCase().includes(searchTerm) ||
                        record.status?.toLowerCase().includes(searchTerm)
          } else if (resource === 'shows'){
            textMatch = record.status?.toLowerCase().includes(searchTerm)
          } else if (resource === 'theatre'){
            textMatch = record.name?.toLowerCase().includes(searchTerm) || 
                        record.city?.toLowerCase().includes(searchTerm) ||
                        record.state?.toLowerCase().includes(searchTerm)
          }
          
          if (!textMatch) return false;
        }

        if(filter.releaseDate_gte){
          const releasedDate = new Date(record.releaseDate);
          const filterDate = new Date(filter.releaseDate_gte);
          if(releasedDate <= filterDate) return false;
        }

        if(filter.rating_gt){
          if(record.rating <= parseFloat(filter.rating_gt)) return false;
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
    const {id} = params;

    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const record = await response.json();

    if(!record){
      throw new Error(`Record with id ${id} not found in resource ${resource}`);
    }
    
    return { data: record };
  },

  update: async (resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    const updatedRecord = await response.json();

    // Update the local cache
    // if (resourceCache.has(resource)) {
    //   const records = resourceCache.get(resource) ?? [];
    //   console.log(records);
    //   console.log(params.id, records[0].id);
    //   console.log(params.id == records[0].id);
    //   const recordIndex = records.findIndex(item => item.id === params.id);

    //   if (recordIndex !== -1) {
    //     // Create a new array with the updated record using immutable updates
    //     const updatedRecords = [
    //       ...records.slice(0, recordIndex),
    //       updatedRecord,
    //       ...records.slice(recordIndex + 1),
    //     ];
    //     resourceCache.set(resource, updatedRecords);
    //   }
    //   console.log(records.findIndex(item => item.id === params.id));

    // }
    console.log(params.data);
    console.log("update is called");
    return { data: updatedRecord };

  },

  updateMany: async(resource:any, params:any) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    console.log(params.data);
    console.log("updateMany is called");
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

    if (response.status !== 201) {
      throw new Error(`Failed to create record in resource ${resource}`);
    }
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