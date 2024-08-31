import { SearchBar } from "./SearchBar";
export function AppBar(){
    console.log("hi from APPbar");
    return <div className="text-md flex justify-between items-center">
        <div className="inline-flex">
            Youtube
            {/* <img src="youtube.jpg"></img> */}
            
        </div>
        <div >
           <SearchBar></SearchBar>
        </div>
        <div>
            Sign In
        </div>
        
    </div>
}