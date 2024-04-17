import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../feature/reducers/userReducer";
import { RootState } from "../../feature/store";

type Props = {
  isDarkMode: boolean;
};

const Counter = ({ isDarkMode }: Props) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);
  const buttonVariant = isDarkMode ? "outline-light" : "outline-dark";

  return (
    <Container>
      <Container>Count: {value}</Container>
      <Button onClick={() => dispatch(increment())} variant={buttonVariant}>
        +
      </Button>
      <Button onClick={() => dispatch(decrement())} variant={buttonVariant}>
        -
      </Button>
    </Container>
  );
};

export default Counter;
