import {
    Card, CardContent, Typography, Box
} from '@mui/material'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography variant='h4' component='div' gutterBottom>
                        Welcome to Admin Dashboard of Movie Booking System 
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Manage your movies and shows effortlessly with the tools provided.
                        Navigate through the menu to get started.
                    </Typography>
                    <br/>
                    <br/>
                    <Link to="/admin/movies">Manage Movies</Link>
                    <br/>
                    <br/>
                    <Link to="/admin/shows">Manage Shows</Link>
                    <br/>
                    <br/>
                    <Link to="/admin/theatre">Manage Theatres</Link>
                </CardContent>
            </Card>
        </Box>
    )
}