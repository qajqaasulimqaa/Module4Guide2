
//Prop types 
type HelloProps = {
  name: string;
  age: number; 
  isStudent: boolean; 
};

const Hello = (props: HelloProps) => {
  return (
    <div>
    <p>Hello, {props.name}!</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

export default Hello;
