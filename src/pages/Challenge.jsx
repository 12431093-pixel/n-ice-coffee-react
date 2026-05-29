import { useState } from "react";

function Challenge() {

  const [result, setResult] = useState("");

  const checkAnswer = (answer) => {

    if (answer === "Latte") {

      setResult("Correct! You entered the weekly challenge.");

    } else {

      setResult("Wrong answer. Try again next week.");

    }

  };

  return (

    <div className="container py-5">

      <h1 className="text-center mb-5">
        Weekly Coffee Challenge
      </h1>

      <div className="card p-4">

        <h4>
          Which coffee contains the most milk?
        </h4>

        <button
          className="btn btn-outline-dark mt-3"
          onClick={() => checkAnswer("Espresso")}
        >
          Espresso
        </button>

        <button
          className="btn btn-outline-dark mt-3"
          onClick={() => checkAnswer("Latte")}
        >
          Latte
        </button>

        <button
          className="btn btn-outline-dark mt-3"
          onClick={() => checkAnswer("Americano")}
        >
          Americano
        </button>

        {result && (

          <div className="alert alert-info mt-4">

            {result}

          </div>

        )}

      </div>

    </div>

  );
}

export default Challenge;