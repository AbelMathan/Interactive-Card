import "./App.css";
import { useState } from "react";
import Bg from "./components/assets/bg-main-desktop.png";
import UserForm from "./components/pages/UserForm";
import CardFront from "./components/pages/CardFront";
import CardBack from "./components/pages/CardBack";
import CardDetails from "./components/pages/CardDetails";
import Thankyou from "./components/pages/Thankyou";

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

  return (
    <main className="bg-gray-100 w-[400px] md:w-auto">
      <div className="App w-[400px] h-[777px] overflow-hidden  md:h-[737px] ">
        <img
          className="relative top-0 h-80 w-[500px] md:absolute md:h-[737px] md:w-[500px]"
          src={Bg}
          alt="Background"
        />
        <CardBack />
        <CardFront />
        <CardDetails
          name={values.name}
          number={values.number}
          month={values.month}
          year={values.year}
          cvc={values.cvc}
        />
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
    </main>
  );
}

export default App;
