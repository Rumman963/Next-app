import Link from "next/link";

export default function Home() {
return (
  <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
       TODO APPLICATION
       <br />
       <Link className="text-md border m-2" href="/signin">Sign In to Todo app</Link>
       <br/>
             <Link className="text-md border m-2" href="/signup">Sign Up to Todo app</Link>
    </div>
  </div>
)
}