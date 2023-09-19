import { useState } from "react";
import { Link } from "react-router-dom";

const Username = () => {
  const [username, setUsername] = useState("");

  const saveName = (username) => {
    return username;
  };

  return (
    <div className="bg-white px-8 w-{500px} pl-7 pr-14 box-border  w-auto p-4 border-4 relative  ">
      <div className="flex justify-center">
        <input
          type="text"
          className="text-3xl border-2 rounded-lg m-1 p-2 border-black text-center"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(setUsername);
          }}
        />
      </div>
      <div className="font-semibold flex justify-center ">
        <Link to={`/quiz/${username}`}>
          <button
            className="border-black border-2 m-1 p-1 rounded-lg bg-emerald-500 "
            onClick={() => {
              const data = saveName(username);
              setUsername(username);
            }}
            disabled={username === ""}>
            Save & Next
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Username;
