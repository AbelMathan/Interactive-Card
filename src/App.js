import "./App.css";
import { useState } from "react";
import UserForm from "./components/pages/UserForm";
import CardFront from "./components/pages/CardFront";
import CardBack from "./components/pages/CardBack";
import Thankyou from "./components/pages/Thankyou";
import Background from "./components/pages/Background";

function App() {
  const [isComplete, setIsComplete] = useState(true);
  const [values, setValues] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (values.number.length > 15) {
      values.number.slice(0, 5);
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsComplete((isComplete) => (isComplete = !isComplete));
    setValues({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
  };
  // -top-48 sm:-top-[700px] lg:top-0
  return (
    <main className="bg-gray-100 w-full h-screen overflow-hidden ">
      <Background />
      <section className="w-full h-screen absolute top-0 lg:flex flex-row justify-center justify-items-center items-center p-5 lg:gap-32 ">
        <div className=" w-full lg:w-auto p-5 flex flex-col-reverse  lg:flex-col">
          <CardFront
            name={values.name}
            number={values.number}
            month={values.month}
            year={values.year}
          />
          <CardBack cvc={values.cvc} />
        </div>

        <div className="w-full lg:w-auto px-5">
          {isComplete ? (
            <UserForm
              name={values.name}
              number={values.number}
              month={values.month}
              year={values.year}
              cvc={values.cvc}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <Thankyou handleSubmit={handleSubmit} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
