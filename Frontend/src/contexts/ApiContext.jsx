import { createContext ,useState ,useEffect } from "react";

export const ApiContext=createContext();

export function ApiContextProvider({children}){
  const [data,setData]=useState(null);

  async function fetchDataFromApi(){
    const url="https://api.themoviedb.org/3/movie/now_playing?api_key=bbfd0acbb161ef41f3281630162746ba&page=1";
    // const url="https://api.themoviedb.org/3/movie/now_playing?api_key=bbfd0acbb161ef41f3281630162746ba&language=en-US&page=1"
    const response=await fetch(url);
    const data=await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchDataFromApi(); // 👈 called here
  }, []);


  const value={
    data,
    setData,
    fetchDataFromApi
  }

  

  return <ApiContext.Provider value={value}>
    {children}
  </ApiContext.Provider>
}