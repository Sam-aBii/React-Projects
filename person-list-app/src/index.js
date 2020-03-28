import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}      
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
        <Person img="22" name="Abid" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="76" name="Arif" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="65" name="Ali" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="89" name="Farhan" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="34" name="Bilal" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="37" name="irfan" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
