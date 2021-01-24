import React, { useState } from "react";
const data = require("../data/recipes");

const AllPosts = (props) =>{
    var allpost = data.getAll();
    var test = ({sh}) => sh.sh;
    if(test){
        return (<p>yoyo</p>);
    }
    return (
    <div className="all-posts-body">
        <h1>AllPosts</h1>
        <div>
            {allpost.map((e) => {
                return(
                    <p>{e.title}</p>
                
                );
            })}
        </div>
    </div>);
}

export default AllPosts;