import Counter from "../counter/Counter";
import FetchApi from "../pages/FetchApi";
import SearchUser from "../pages/SearchUser";

function Home(){
    return(
        <div>
        
        <FetchApi/>
        <SearchUser/>
    </div>
    );
}

export default Home;