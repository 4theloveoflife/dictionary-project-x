import React from "react";

export default function Meanig (props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
         <h3>{props.meaning.partofSpeech}</h3>
         {props.meaning.definitions.map(function(definition,  index)   {
            return (
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example} </em>
                    </p>
             </div>
            );
         })}
         </div>
    );
}