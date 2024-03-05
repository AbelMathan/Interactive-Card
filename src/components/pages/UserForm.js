const UserForm = ({
  name,
  number,
  month,
  year,
  cvc,
  handleChange,
  handleSubmit,
}) => {
  return (
    <section>
      <div className="absolute top-1/2 md:right-60 md:top-56  md:w-[400px] p-10 text-[16px] uppercase font-medium  ">
        {/* <h1>Interactive Card Details</h1> */}
        <form onSubmit={handleSubmit}>
          <label className="cname">CardHolder name</label>
          <input
            type="text"
            className="name w-80 rounded-lg px-5 border-black border-2 drop-shadow-md"
            required
            placeholder="Eg.Ben"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <label className="cnumber ">card number</label>
          <input
            type="number"
            className="number w-80 rounded-lg px-5 border-black border-2 drop-shadow-md"
            required
            placeholder="1234 5678 9012 3456"
            name="number"
            maxLength={16}
            onChange={handleChange}
            value={number.slice(0, 16)}
          />
          <label className="edate ">Exp.date(MM//YY)</label>
          <label className="cvc ml-10 ">CVC</label>
          <br />
          <input
            type="number"
            className="month w-20 ml-1 rounded-lg text-center border-black border-2 drop-shadow-md"
            required
            placeholder="MM"
            name="month"
            onChange={handleChange}
            value={month.slice(0, 2)}
          />
          <input
            type="number"
            className="year w-20 ml-1 rounded-lg text-center border-black border-2 drop-shadow-md"
            required
            placeholder="YY"
            name="year"
            onChange={handleChange}
            value={year.slice(0, 2)}
          />
          <input
            type="number"
            className="cvc-field w-36 ml-2 rounded-lg text-center border-black border-2 drop-shadow-md"
            required
            placeholder="Eg.123"
            name="cvc"
            onChange={handleChange}
            value={cvc.slice(0, 3)}
          />
          <button className="btn bg-gray-900 text-white p-1 rounded-full w-80 mt-5 drop-shadow-lg">
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserForm;
