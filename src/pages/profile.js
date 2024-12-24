import React, { useState } from "react";
import Avatar from "../assets/images/avatar.jpg";
import Tablet from "../assets/icons/tablet.svg";
import Footer from "../components/footer";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Joyce Johnson",
    occupation: "Manager",
    employer: "Food Couriers",
    country: "Nigeria",
    phone: "+234 813 0400 445",
    email: "ekamcy@mail.com",
  });

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderField = (label, name, type = "text") => (
    <div className="w-full py-3.5">
      <p className="float-left">{label}</p>
      {isEditing ? (
        <input
          type={type}
          name={name}
          value={userInfo[name]}
          onChange={handleUserInputChange}
          className="float-right w-28 border rounded px-2"
        />
      ) : (
        <p className="float-right">{userInfo[name]}</p>
      )}
    </div>
  );

  return (
    <div className="sm:h-full">
      <div className="px-10 flex flex-row justify-center items-center relative">
        <img src={Avatar} alt="avatar" className="border-[10px] w-[100px] h-[100px] border-red-200 rounded-full relative" />
        <img src={Tablet} alt="tablet" className="border-2 rounded-full absolute transform translate-x-8 translate-y-9" />
      </div>
      <div className="px-4 sm:px-10">
        <p className="py-8 font-bold text-lg">Personal Info</p>
        <div className="border rounded-lg px-4 pb-4">
          {renderField("Your name", "name")}
          {renderField("Occupation", "occupation")}
          {renderField("Employer", "employer")}
          <div className="w-full py-4">
            <p className="float-left">Country</p>
            <div className="float-right w-12 h-6 bg-gradient-to-r from-[#D61355] to-[#FF0000] rounded-full">
              <div className="float-right w-6 h-6 bg-white border-2 border-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 sm:px-10">
        <p className="font-bold text-lg">Contact Info</p>
        <div className="mt-4 border rounded-lg px-4 pb-4">
          {renderField("Phone number", "phone")}
          {renderField("Email", "email", "email")}
        </div>
      </div>

      <div className="mt-8 mb-8 sm:px-10 px-4">
        <button
          type="button"
          className="w-full h-14 bg-[#D61355] text-white text-lg font-bold rounded-lg"
          onClick={handleEditClick}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="fixed bottom-0 sm:hidden w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
