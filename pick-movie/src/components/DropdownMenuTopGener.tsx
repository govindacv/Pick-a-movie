import { useEffect, useState } from "react";
import "../styles/Dropdown.css";
import axios from "axios";
import { addToSearchedGener } from "../dux/GenerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export let sg = "";
export const DropdownMenuTopGener = () => {
  const [searchedGener, setSearchGener] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchedGener !== "") {
      console.log(searchedGener);

      axios
        .get(`https://api.sampleapis.com/movies/${searchedGener}`)
        .then((response) => {
          console.log(response.data);
          dispatch(addToSearchedGener(response.data));
          sg = searchedGener;
          navigate(`/${searchedGener}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchedGener]);
  const handleOnclick = (val: string) => {
    setSearchGener(val);
  };
  return (
    <div className="dropdownMenuTopGener">
      <div onClick={() => handleOnclick("mystery")}>Mystery</div>
      <div onClick={() => handleOnclick("animation")}>Animation</div>
      <div onClick={() => handleOnclick("classic")}>Classic</div>
      <div onClick={() => handleOnclick("comedy")}>Comedy Movies</div>
      <div onClick={() => handleOnclick("drama")}>Drama</div>
      <div onClick={() => handleOnclick("horror")}>Horror</div>
      <div onClick={() => handleOnclick("family")}>Family</div>
    </div>
  );
};
