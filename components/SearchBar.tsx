"use client";
import {useState} from "react";
export default function SearchBar({
    initialQuery="",
}:{
    initialQuery?:string;
}) {
    const [query,setQuery]=useState(initialQuery);
    return(
        <form action="/" method="GET">
            <input 
            className="search"
            type="text"
            name="q"
            placeholder="Search by name or city..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}/>
        </form>
    );
}