import { useDispatch, useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Headphone } from "./headphone";
import { useEffect, useState } from "react";
import { getHeadphoneById } from "../../redux/entities/headphones/get-headphone-by-id";

export const HeadphoneContainer = ({ id }) => {
  const dispatch = useDispatch();

  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const { name, brand, reviews, codecs } = headphone || {};

  useEffect(() => {
    dispatch(getHeadphoneById(id));
  }, [dispatch, id]);

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
    />
  );
};
