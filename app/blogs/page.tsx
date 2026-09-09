import axios from "axios";

async function getblogs(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return res.data

}

export default async function Blogs() {

    const blogs  = await getblogs()

    return <div>
    {blogs.map((blog: ITodo) => <Todo key={blog.title} title={blog.title} completed={blog.completed} /> )}

    </div>
}

interface ITodo {


    title:string,
    completed:boolean;

}


function Todo({title , completed}:ITodo){

    return <div>
        
        {title} {completed ? "done!" : "not done"}
        </div>


}