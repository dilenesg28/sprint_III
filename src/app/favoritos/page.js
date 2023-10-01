import CardFilme from "@/components/CardFilme";
import NavBar from "@/components/NavBar";
import Titulo from "@/components/Titulo";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzljNDM4ZDUwZjJmNDMyZGY1ZDQ3YjBmNzY5NWMwMCIsInN1YiI6IjY1MTM4NTdkYTE5OWE2MDBmZTczZThhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FOmoXkfR3-7IGGXJDgxX69REzSzTs1QisQxpVJSngtQ'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/20502027/watchlist/tv?language=pt-br&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {
  
  const tvs = await carregarDados() 

  return (
    <>
      <NavBar />

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap gap-2">
        {tvs.map( filme => <CardFilme filme={filme} /> )}
      </section>

    </>
  )
}
