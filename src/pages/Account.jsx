import { UserAuth } from "../context/AuthContext";
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

const Account = () => {
  const [address, setAddress] = useState(null);
  const [education, setEducation] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [hobbies, setHobbies] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "address") {
      setAddress(value);
    }
    if (id === "education") {
      setEducation(value);
    }
    if (id === "lastname") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "name") {
      setName(value);
    }
    if (id === "phonenumber") {
      setPhonenumber(value);
    }
    if (id === "hobbies") {
      setHobbies(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      address,
      education,
      lastname,
      email,
      name,
      phonenumber,
      hobbies
    );
    let obj = {
      name: name,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      address: address,
      education:education,
      hobbies:hobbies
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <div className="form">
          <div className="form-body">
            <div className="name">
              <label className="form__label" for="name">
                Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="name"
                value={name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastname">
                Last Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => handleInputChange(e)}
                placeholder="Last Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                className="form__input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>
            <div className="education">
              <label className="form__label" for="education">
                Education{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="education"
                value={education}
                onChange={(e) => handleInputChange(e)}
                placeholder="Education"
              />
            </div>
            <div className="phonenumber">
              <label className="form__label" for="phonenumber">
                Phone Number
              </label>
              <input
                className="form__input"
                type="text"
                id="phonenumber"
                value={phonenumber}
                onChange={(e) => handleInputChange(e)}
                placeholder="Phone Number"
              />
            </div>
            <div className="hobbies">
              <label className="form__label" for="hobbies">
                Hobbies
              </label>
              <input
                className="form__input"
                type="text"
                id="hobbies"
                value={hobbies}
                onChange={(e) => handleInputChange(e)}
                placeholder="Hobbies"
              />
            </div>
            <div className="address">
              <label className="form__label" for="address">
                Address
              </label>
              <input
                className="form__input"
                type="text"
                id="address"
                value={address}
                onChange={(e) => handleInputChange(e)}
                placeholder="Address"
              />
            </div>
          </div>
          <div class="footer">
            <button onClick={() => handleSubmit()} type="submit" class="btn">
              Register
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
