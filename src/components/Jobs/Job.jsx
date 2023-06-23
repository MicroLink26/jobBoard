const Job = (props) => {
  return (
    <div className={props.value.className + " item"}>
      <p>{props.value.title}</p>
      <div>
        {props.value.contractType} - {props.value.country} - {props.value.city}
      </div>
    </div>
  );
};

export default Job;
