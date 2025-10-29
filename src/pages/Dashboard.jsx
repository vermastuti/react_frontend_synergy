import MovieList from "../components/movieList";

function Dashboard() {
  return (
    <div >
      {/* <div style={{ position: 'absolute', top: '5%'}}></div> */}
      <h3 style={{ position: 'relative', marginTop: '5%'}}> Now Showing</h3>
      <MovieList />
    </div>
  );
}

export default Dashboard;