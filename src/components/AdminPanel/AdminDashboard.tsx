import React from 'react';
import { fetchUtils, Admin, ListGuesser, Resource, GetListParams, QueryFunctionContext } from "react-admin";
import { Layout } from "./Layout";
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import { HomePage } from "./pages/Homepage";
import { authProvider} from "./authProvider";
import simpleRestProvider from 'ra-data-simple-rest';
import { Link, Links, Route } from 'react-router-dom';
import { MovieList } from './pages/movies/movie-list';
import { MovieShow } from './pages/movies/movie-show';
import { MovieEdit } from './pages/movies/movie-edit';
import { MovieCreate } from './pages/movies/movie-create';
import { MovieDataProvider } from './MovieDataProvider';


export default function AdminDashboard(){

    const fetchJson = (url: string, options = {}) => {
        // if (!options.headers) {
        //     options.headers = new Headers({ Accept: 'application/json' });
        // }
        // // add your own headers here
        // options.headers.set('X-Custom-Header', 'foobar');
        // options.headers.set('Content-Range', 'foobar');
        return fetchUtils.fetchJson(url, options);
    }

    const dataP = simpleRestProvider('http://localhost:9002/api', fetchJson);

    return(
        <Admin basename="/admin" layout={Layout} dataProvider={MovieDataProvider} dashboard={HomePage} authProvider={authProvider}>
            <Resource  icon={ArticleIcon} name="movies" 
                list={MovieList} 
                show={MovieShow}
                edit={MovieEdit}
                create={MovieCreate}
                //   options={{ label: 'Movies' }}
            >
                {/* <Route path="all" element={<MoviesList/>} /> */}
            </Resource>
            {/* <Resource icon={PersonIcon} name="users" list={UserList} show={UserShow}/> */}
        </Admin>
    )
};

