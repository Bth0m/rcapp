import Button from "./button";

const LoginAdmin = ({ handleSuccess }) => {
  const handleInput = () => {
    const textInput = document.getElementById("input")?.value;
    if (textInput === "rolandapp") {
      handleSuccess(true);
    }
  };

  return (
    <div className="h-full mt-10">
      <h1 className=" text-center text-xl font-semibold text-zinc-800">
        Welcome Admin
      </h1>
      <div className=" flex flex-col items-center mt-10">
        <span className=" text-zinc-800"> Please put the password </span>
        <input
          id="input"
          className="border border-solid border-zinc-800 rounded-md my-10 text-zinc-800"
          type="password"
        />
        <Button txt="Save" onClick={handleInput} />
      </div>
    </div>
  );
};

export default LoginAdmin;
