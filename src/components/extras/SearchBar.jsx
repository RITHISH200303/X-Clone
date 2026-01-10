import { Search } from "lucide-react"
import sb from "./SearchBar.module.css"

export default function SearchBar(){
    return(
    <div className={`${sb.searchParent} h-10 flex flex-row items-center justify-between border-[1.5px] rounded-3xl py-2 p-3 gap-2`}>
        <span>
            <Search className={`${sb.searchInput} text-gray-400 w-4`}/>
        </span>
        <input type="text" placeholder="Search" className="w-full font-light outline-none font-normal text-base"/>
    </div>
    )
}