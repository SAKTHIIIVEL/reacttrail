import Counter from "../counter/Counter";
import FetchApi from "../pages/FetchApi";
import SearchUser from "../pages/SearchUser";

function Home(){
    return(
        <div>
        <h1>Welcome to my page !! Home.js </h1>
        <Counter/> <br/>
        <FetchApi/>
        <SearchUser/>
    </div>
    );
}

export default Home;