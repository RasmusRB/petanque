import { Button, Form } from "react-bootstrap";

type Props = {
  isDarkMode: boolean;
};

const TeamRegistration = ({ isDarkMode }: Props) => {
  const buttonVariant = isDarkMode ? "outline-light" : "outline-dark";

  return (
    <Form style={{ width: "100%" }}>
      <Form.Floating className="mb-3" style={{ color: "black" }}>
        <Form.Control
          id="floatingInputCustom1"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom1">Email address</label>
      </Form.Floating>
      <Form.Floating className="mb-3" style={{ color: "black" }}>
        <Form.Control
          id="floatingInputCustom2"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom2">Email address</label>
      </Form.Floating>
      <Button size="sm" variant={buttonVariant}>
        Opret hold
      </Button>
    </Form>
  );
};

export default TeamRegistration;
