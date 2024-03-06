import "./Color.css";

function Color(props) {
  console.log(props);
  const color = {
    backgoundColor: props.colorCode,
  };
  return (
    <>
      <div className="container">
        <div
          style={{
            backgroundColor: props.colorCode,
          }}
          className="colorContainer"
        ></div>
        <div className="colorDetails">
          <h4>{props.colorCode}</h4>
          <p
            style={{
              color: props.colorCode,
            }}
          >
            {props.colorName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Color;
