import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();

  const { text, rating } = form;

  return (
    <>
      <h3>Review Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>Text</span>
          <input
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
      </form>
    </>
  );
};
