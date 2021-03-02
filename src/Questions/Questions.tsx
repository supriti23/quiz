import React, { Component } from "react";
import "./Questions.scss";
import { QuestionProps } from "./Questions.type";
class Questions extends Component<QuestionProps, {}> {
  render() {
    return (
      <>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-10 questionShow">
                <p>{this.props.ques}</p>
              </div>
            </div>
            <div className="row">
              <div
                id="selectedA"
                onClick={this.props.selectedAns}
                className="col-md-4 ml-auto options"
                style={{
                  backgroundColor:
                    this.props.selectedA ||
                    this.props.answeredValue === this.props.answers[0]
                      ? "yellow"
                      : "rgb(29, 235, 224)",
                }}
              >
                {this.props.answers[0]}
              </div>
              <div
                id="selectedB"
                onClick={this.props.selectedAns}
                className="col-md-4 ml-auto options"
                style={{
                  backgroundColor:
                    this.props.selectedB ||
                    this.props.answeredValue === this.props.answers[1]
                      ? "yellow"
                      : "rgb(29, 235, 224)",
                }}
              >
                {this.props.answers[1]}
              </div>
            </div>
            {this.props.optionVisible ? (
              <div className="row">
                <div
                  id="selectedC"
                  onClick={this.props.selectedAns}
                  className="col-md-4 ml-auto options"
                  style={{
                    backgroundColor:
                      this.props.selectedC ||
                      this.props.answeredValue === this.props.answers[2]
                        ? "yellow"
                        : "rgb(29, 235, 224)",
                  }}
                >
                  {this.props.answers[2]}
                </div>
                <div
                  id="selectedD"
                  onClick={this.props.selectedAns}
                  className="col-md-4 ml-auto options"
                  style={{
                    backgroundColor:
                      this.props.selectedD ||
                      this.props.answeredValue === this.props.answers[3]
                        ? "yellow"
                        : "rgb(29, 235, 224)",
                  }}
                >
                  {this.props.answers[3]}
                </div>
              </div>
            ) : null}
            <div className="row justify-content-between">
              {this.props.position === 0 ? null : (
                <div className="col-4 btnStyle">
                  <button
                    type="button"
                    className="btn btn-success col-md-6"
                    onClick={this.props.quesPrevChange}
                  >
                    Previous
                  </button>
                </div>
              )}
              {this.props.position === 9 ? null : (
                <div className="col-4 btnStyle">
                  <button
                    type="button"
                    className="btn btn-success col-md-6"
                    onClick={this.props.quesNextChange}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
            {this.props.position === 9 ? (
              <div className="row">
                <div className="col-md-4 btnStyle">
                  <button
                    type="button"
                    className="btn btn-success col-md-6"
                    onClick={this.props.scoreCalc}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
export default Questions;
