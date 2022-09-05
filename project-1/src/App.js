import axios from "axios";

function App() {
    async function getData() {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/1");
        const {data : post1} = await axios("(https://jsonplaceholder.typicode.com/posts?userId=1)");
        console.log("users", users);
        console.log("post1", post1);
    }
    getData();
  return (
    <div>
        Hello React
    </div>
  );
}

export default App;
