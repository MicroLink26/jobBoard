import Job from "./Job";
import("./Jobs.css");

const Jobs = (props) => {
  return (
    <div className="container">
      {props.jobs.map((job, index) => (
        <Job value={job} key={index} />
      ))}
    </div>
  );
};

export default Jobs;
