//creating a Type
//Adding ? makes the Props optional 
type NavBarProps = {
  color?: string;
  font?: string;
  backgroundColor? : string; 
  logoColor?: string; 
  logoFont?: string; 
  fontSize?: string; 
  fontSizeLogo?: string; 
};

const NavBar = (props: NavBarProps) => {
  return (
    <div className="flex justify-between items-center px-6 py-3"
     style={{ backgroundColor: props.backgroundColor,
      color: props.color, 
      fontFamily: props.font 
      ,fontSize:props.fontSize}} >
      <ul className="ml-3.5 flex justify-center gap-4 ">
        <li >Menu</li>
        <li >About</li>
        <li>Photos</li>
      </ul>
  <h1 className="ml-10 font-bold" 
  style={{color: props.logoColor,
   fontFamily: props.logoFont, 
   fontSize:props.fontSizeLogo}}>
    Logo</h1>
    </div>
  );
};

export default NavBar;
