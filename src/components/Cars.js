import Wrapper from './Wrapper'




const Car = ({children, color}) => {


  let colorInfo = "";
  if (color) {
    colorInfo = color;
  }else {
    colorInfo = "Néant";
  }
  return children && (

    <Wrapper>
      <p>Marque: {children}</p>
      <p>Marque: {colorInfo}</p>
    </Wrapper>

  )
}


export default Car
