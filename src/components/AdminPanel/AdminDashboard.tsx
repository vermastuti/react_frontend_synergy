import React from 'react';
import { fetchUtils, Admin, ListGuesser, Resource, GetListParams, QueryFunctionContext } from "react-admin";
import { Layout } from "./Layout";
import MovieIcon from '@mui/icons-material/Movie';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TheatersIcon from '@mui/icons-material/Theaters';
import { HomePage } from "./pages/Homepage";
import { authProvider} from "./authProvider";
import simpleRestProvider from 'ra-data-simple-rest';
import { Link, Links, Route } from 'react-router-dom';
import { MovieList } from './pages/movies/movie-list';
import { MovieView } from './pages/movies/movie-view';
import { MovieEdit } from './pages/movies/movie-edit';
import { MovieCreate } from './pages/movies/movie-create';
import { MovieDataProvider } from './MovieDataProvider';
import { MovieShowList } from './pages/movie-shows/movie-show-list';
import { MovieShowEdit } from './pages/movie-shows/movie-show-edit';
import { MovieShowCreate } from './pages/movie-shows/movie-show-create';
import { MovieShowView } from './pages/movie-shows/movie-show-view';
import { TheatreList } from './pages/theatres/theatre-list';
import { TheatreEdit } from './pages/theatres/theatre-edit';
import { TheatreCreate } from './pages/theatres/theatre-create';
import { TheatreView } from './pages/theatres/theatre-view';


export default function AdminDashboard(){

    return(
        <Admin basename="/admin" layout={Layout} dataProvider={MovieDataProvider} dashboard={HomePage} authProvider={authProvider}>
            <Resource  icon={MovieIcon} name="movies" 
                list={MovieList} 
                show={MovieView}
                edit={MovieEdit}
                create={MovieCreate}
                //   options={{ label: 'Movies' }}
            />
            <Resource icon={SlideshowIcon} name="shows" 
                list={MovieShowList} 
                edit={MovieShowEdit}
                create={MovieShowCreate}
                show={MovieShowView}
                >
            </Resource>
            
           <Resource  icon={TheatersIcon} name="theatre" 
                list={TheatreList} 
                edit={TheatreEdit}
                create={TheatreCreate}
                show={TheatreView}
                >
             </Resource>   

        </Admin>
    )
};

