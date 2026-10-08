type GreetProps = {
  username?: string;
};

export default function Greet({ username = "user" }: GreetProps) {
  return (
    <div>
      <h3>Hello, {username}</h3>
    </div>
  );
}
