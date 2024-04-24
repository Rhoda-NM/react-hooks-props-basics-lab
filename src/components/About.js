import React from "react";
import Links from "./Links";

function About(props) {
  function getBio(){
    if(props.bio && props.bio.length > 1){
      return props.bio;
    }
    else{
      return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{getBio()}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}></Links>
    </div>
  );
}

export default About;
