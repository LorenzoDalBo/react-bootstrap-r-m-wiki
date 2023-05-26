import Cards from "@/components/Cards/Cards";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import { useState, useEffect } from "react";

export default function Home() {
  
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState({results:[], info:{}})
  let [search, setSearch] = useState("")


  let {info, results} = fetchedData;

  let charAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  

  useEffect(() => {

    (async function() {

      let response = await fetch(charAPI)
      let data = await response.json()
      updateFetchedData(data)

    })()

  } , [charAPI])
  
  
    console.log(info)
  
  return (
    <main>
      <div>
        <Search setPageNumber={setPageNumber} search={search} setSearch={setSearch}/>
        <Filter/>
        <Cards results={results}/>
      </div>
    </main>
  )
}
