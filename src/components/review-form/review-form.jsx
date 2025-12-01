import { useEffect, useRef, useState } from "react";
import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";
import { Button } from "../button/button";

// { current: undefined }

export const ReviewForm = ({ ref }) => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();

  const inputRef = useRef(null); // { current: null }

  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [count, setCount] = useState(1);

  console.log(styles);

  const intervalRef = useRef();
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => setCount((prev) => prev + 1), 1000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  const { text, rating } = form;

  return (
    <div>
      <h3>Review Form</h3>
      <form>
        {/* <form onSubmit={(e) => e.preventDefault()}> */}
        <div>
          <span>Text</span>
          <input
            ref={inputRef}
            type='text'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <Counter
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />

        <button onClick={clear}>Clear</button>

        <div>{count}</div>
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
          type='button'
        >
          stop
        </button>

        <Button text='button' className={styles.button} />
      </form>
    </div>
  );
};
