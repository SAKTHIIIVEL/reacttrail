import { TextField } from '@mui/material';
import React from 'react'


function SearchUser() {
    const [news,setNews] = React.useState([]);
    let [searchText,setSearchText] = React.useState("");
    let [loading, setLoading] = React.useState(false);

    const searchUser = async()=> {
    
        const NEWS_API = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba772a5854384ee3908a792d34ce26f9"
        const res =  await fetch(NEWS_API); 
        const data= await res.json();
        setNews(data.articles);
        }

  return (
    <div>
        <h3>SearchUser</h3>
        <TextField
        fullWidth
        label="Search News By Title"
        value={searchText}
        onChange={handleChange}
        margin='normal'
        />
        
        <button onClick={searchUser}>Search</button>
        {
            news.map((item)=>{
                return(
                    <div>{item.title}</div>
                );
            })
        }

    </div>
  )
}

export default SearchUser