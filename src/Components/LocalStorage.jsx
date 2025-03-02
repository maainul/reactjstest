import { useEffect, useState } from "react";

export const LocalStorage = () => {
  console.log("Local Storage renderd");
  const [name, setName] = useState("");
  const [localName, setLocalName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name : ${name}`);
    console.log(name);
    localStorage.setItem("userName", name);
  };

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    setLocalName(savedName);
  }, []);

  return (
    <>
      <h1>Local Storage</h1>
      <h2>Hello, {localName}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Name ..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>------------------------------------------------</p>
    </>
  );
};
