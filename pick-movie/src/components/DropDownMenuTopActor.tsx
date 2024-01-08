import { useEffect, useState } from "react";
import "../styles/DropdownTopActors.css";
import { DB } from "../resources/DB";
import { useDispatch } from "react-redux";
import { addToSearchedActor } from "../dux/ActorSlice";
import { useNavigate } from "react-router-dom";

export let sg = "";
export const DropDownMenuTopActor = () => {
  const [actorName, setActorName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (actorName != "") {
      let a = DB.filter((val) => {
        return val.actors.includes(actorName);
      });
      console.log(a);

      dispatch(addToSearchedActor(a));
      sg = actorName;
      console.log("hi");

      navigate(`/actor`);
    }
  }, [actorName]);
  const handleOnclick = (actorName: string) => {
    setActorName(actorName);
  };
  return (
    <>
      <div className="dropdownMenuTopActor">
        <div onClick={() => handleOnclick("Hugh Jackman")}>Hugh Jackman</div>
        <div onClick={() => handleOnclick("Leonardo DiCaprio")}>
          L. DiCaprio
        </div>
        <div onClick={() => handleOnclick("Brad Pitt")}>Brad Pitt</div>
      </div>
    </>
  );
};
