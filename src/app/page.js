import CardFilme from "@/components/CardFilme";
import NavBar from "@/components/NavBar";
import Titulo from "@/components/Titulo";
import { Tv } from "lucide";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/tv/week?api_key=a79c438d50f2f432df5d47b0f7695c00&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {
  
  const tvs = await carregarDados()

  

  return (
    <>
      <NavBar />

      <Titulo>em alta</Titulo>

      <section className="flex flex-wrap gap-2">
 
        {tvs.map( filme => <CardFilme filme={filme} /> )}            
  
      </section>

      <Titulo>lançamentos</Titulo>

    </>
  )
}
