import React, { useState } from "react";
import "./Steps.css";
import Step from "../Step/Step";

function Steps() {
  const [steps, setSteps] = useState([
    {
      number: 1,
      title: "Recherche de bien",
      detail:
        "Trouvez rapidement un bien qui vous corresponde parmi une vaste sélection de biens en location.",
    },
    {
      number: 2,
      title: "Recherche de bien",
      detail:
        "Trouvez rapidement un bien qui vous corresponde parmi une vaste sélection de biens en location.",
    },
    {
      number: 3,
      title: "Recherche de bien",
      detail:
        "Trouvez rapidement un bien qui vous corresponde parmi une vaste sélection de biens en location.",
    },
    {
      number: 4,
      title: "Recherche de bien",
      detail:
        "Trouvez rapidement un bien qui vous corresponde parmi une vaste sélection de biens en location.",
    }
  ]);
  return (
    <div className="steps">
      {steps.map(step => 
        (<Step step={step}/>))}
      
    </div>
  );
}

export default Steps;
