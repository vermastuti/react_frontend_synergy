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
                        Welcome to the Dashboard
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Manage your movies and shows effortlessly with the tools provided.
                        Navigate through the menu to get started.
                    </Typography>
                    <br/>
                    <Link to="/admin/movies">Movies</Link>
                </CardContent>
            </Card>
        </Box>
    )
}