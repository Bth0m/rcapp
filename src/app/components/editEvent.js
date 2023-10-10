import Button from "./button";
import { sendEventComment } from "../api/services";

const EditEvent = ({
  country = "",
  city = "",
  id,
  handleClose,
  refetch,
  comment,
}) => {
  const handleSendComment = () => {
    const txtArea = document.getElementById("textArea")?.value;
    sendEventComment({ comment: txtArea, id });
    refetch();
    handleClose();
  };
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className=" text-center text-xl font-semibold text-zinc-800">
        Edit event
      </h1>
      <div>
        <span className="font-semibold text-zinc-700">Country: </span>
        <span className="text-zinc-700">{country}</span>
      </div>
      <div>
        <span className="font-semibold text-zinc-700"> City: </span>
        <span className=" text-zinc-700"> {city} </span>
      </div>

      <textarea
        id="textArea"
        className=" border border-solid border-zinc-700 rounded-md  h-3/5 text-zinc-800"
      >
        {comment}
      </textarea>
      <div className="mt-2 flex justify-end">
        <Button
          onClick={handleClose}
          txt="Cancel"
          isCancel
          customClassName="mr-2"
        />
        <Button onClick={handleSendComment} txt="Save" />
      </div>
    </div>
  );
};

export default EditEvent;
