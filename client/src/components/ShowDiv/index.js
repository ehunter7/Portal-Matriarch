import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useStateContext } from "../../utils/GlobalState";
import { useHistory } from "react-router-dom";
import EmployeeList from "../Employeelist";
import Time from "../Time";
import Pay from "../Pay";
import Manage from "../Manage";
import Feed from "../feed";
import EmployeeForm from "../EmployeeForm";

export const ShowDiv = () => {
  const [state, dispatch] = useStateContext();
  if (state.openDirectory) {
    return <EmployeeList />;
  } else if (state.openTime) {
    return <Time />;
  } else if (state.openPay) {
    return <Pay />;
  } else if (state.openManage) {
    return <Manage />;
    // } else if (state.openViewRequest) {
    //   return <ViewRequest />;
  } else {
    return <Feed />;
  }
};

export const Submenu = () => {
  const [state, dispatch] = useStateContext();
  const history = useHistory();
  return (
    <>
      <div className="adminDiv">
        <Row id="adminRow">
          <Col xs={1}>
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "toggle-user" })}
              variant="primary"
            >
              Create New Account
            </Button>
            {state.addUser ? <EmployeeForm /> : null}
          </Col>
          <Col xs={1}>
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "open-manage" })}
              variant="primary"
            >
              Manage Accounts
            </Button>
          </Col>
          <Col xs={1}>
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => {
                console.log("this should redirect");
                history.push("/workweek");
              }}
              variant="primary"
            >
              Create Schedule
            </Button>
          </Col>
          {/* <Button
        id="adminButton"
        className="btn btn-dark"
        onClick={() => dispatch({ type: "open-viewrequest" })}
        variant="primary"
      >
        View Requested Time Off
      </Button> */}
          <Col xs={1}>
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "toggle-new-post" })}
              variant="primary"
            >
              Create New Post
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
