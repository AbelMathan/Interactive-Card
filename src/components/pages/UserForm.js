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
    <div className="w-full lg:w-auto relative bottom-24 lg:bottom-0 ">
      {/* <h1>Interactive Card Details</h1> */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="cnumber ">card number</label>
        <input
          type="number"
          className="number lg:w-80 rounded-lg px-5 border-black border-[1px] drop-shadow-md"
          required
          placeholder="1234 5678 9012 3456"
          name="number"
          maxLength={16}
          onChange={handleChange}
          value={number.slice(0, 16)}
        />
        <label className="cname">CardHolder name</label>
        <input
          type="text"
          className="name lg:w-80 rounded-lg px-5 border-black border-[1px] drop-shadow-md"
          required
          placeholder="Eg.Ben"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <article className="w-full lg:w-80 grid grid-cols-2 gap-2 ">
          <label className="edate ">Exp.date(MM//YY)</label>
          <label className="cvc ml-20 ">CVC</label>
        </article>
        <article className="w-full lg:w-80 grid grid-cols-3 gap-2  ">
          <input
            type="number"
            className="month rounded-lg text-center border-black border-[1px] drop-shadow-md"
            required
            placeholder="MM"
            name="month"
            onChange={handleChange}
            value={month.slice(0, 2)}
          />
          <input
            type="number"
            className="year rounded-lg text-center border-black border-[1px] drop-shadow-md"
            required
            placeholder="YY"
            name="year"
            onChange={handleChange}
            value={year.slice(0, 2)}
          />
          <input
            type="number"
            className="cvc-field  rounded-lg text-center border-black border-[1px] drop-shadow-md"
            required
            placeholder="Eg.123"
            name="cvc"
            onChange={handleChange}
            value={cvc.slice(0, 3)}
          />
        </article>
        <button className="btn bg-gray-900 text-white p-1 rounded-full lg:w-80 mt-5 drop-shadow-lg">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default UserForm;
