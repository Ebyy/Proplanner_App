import React from "react";
import { connect } from "react-redux";
//import { Tasks } from "./Tasks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as mutations from "../store/mutations";

const Task = ({
  id,
  task,
  status,
  category,
  checkedStatus,
  progressBar,

  setTaskCategory,
  setTaskStatus,
  setTaskName
}) => {
  
  const handleRadioButton = e => (task.category = e.target.value);

  return (
    <div className=" card p-3 col-6">
      <div>
        <input
          value={task.name}
          onChange={setTaskName}
          className="form-control form-control-md"
        />
      </div>

      <div onChange={setTaskCategory} className="mt-3">
        <FontAwesomeIcon icon="home" />
        Inhouse{" "}
        <input
          type="radio"
          value="G01"
          checked={task.category === "G01"}
          onChange={handleRadioButton}
        />{" "}
        &nbsp;&nbsp; <FontAwesomeIcon icon="plane" />
        Outsourced{" "}
        <input
          type="radio"
          value="G02"
          onChange={handleRadioButton}
          checked={task.category === "G02"}
        />{" "}
      </div>

      <div>
        <select
          onChange={setTaskStatus}
          value={task.status}
          className="form-control mt-3"
        >
          {status.map(stat => (
            <option key={stat.id} value={stat.id}>
              {stat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Link to="/dashboard">
          <button className="btn btn-primary mt-2">Done</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let status = state.status;
  let category = state.category;
  //let progressBar = false;
  return {
    id,
    task,
    status,
    category
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCategory(e) {
      dispatch(mutations.setTaskCategory(id, e.target.value));
    },
    setTaskStatus(e) {
      dispatch(mutations.setTaskStatus(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  };
};

export const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task);
