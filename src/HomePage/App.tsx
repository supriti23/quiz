import React, { Component } from "react";
import "./App.scss";
import Questions from "../Questions/Questions";
import { QuestionSet } from "../Questions/Questions.type";
import showQuestions from "../FetchData";
import { AppState, GivenAns } from "./App.type";

const appState = {
  visible: false,
  position: 0,
  data: showQuestions(),
  question: "",
  answer: [],
  optionVisible: true,
  selected: {
    selectedA: false,
    selectedB: false,
    selectedC: false,
    selectedD: false,
  },
  score: 0,
  answeredValue: "",
  allAnswers: [],
  submitted: false,
};
class App extends Component<{}, AppState> {
  initialState = {};
  constructor(props: any) {
    super(props);
    this.state = appState;
    this.initialState = this.state;
  }
  changeNext() {
    let ans;
    this.state.allAnswers.map((val: GivenAns, idx: number) => {
      if (val.pos === this.state.position + 1) {
        ans = val.givenAns;
      }
    });
    this.setState({
      position: this.state.position + 1,
      selected: {
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false,
      },
      answeredValue: ans,
    });
  }

  getScore() {
    let scoreFinal: number = 0;
    this.state.data.map((val: QuestionSet, idx: number) => {
      this.state.allAnswers.map((e: GivenAns) => {
        if (e.pos === idx) {
          if (e.givenAns === val.correct) {
            scoreFinal += 1;
          }
        }
      });
    });

    this.setState({
      selected: {
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false,
      },
      score: scoreFinal,
      visible: false,
      submitted: true,
    });
    scoreFinal = 0;
  }

  changePrev() {
    let ans;
    this.state.allAnswers.map((val: GivenAns, idx: number) => {
      if (val.pos === this.state.position - 1) {
        ans = val.givenAns;
      }
    });
    this.setState({
      position: this.state.position - 1,
      answeredValue: ans,
      selected: {
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false,
      },
    });
  }

  quesAnsShow() {
    if (this.state.submitted === true) {
      this.setState(this.initialState, () => {});
    }
    this.setState({ visible: true, score: 0 });
  }

  getAns = (ev: any) => {
    this.state.allAnswers.map((val: GivenAns, idx: number) => {
      if (val.pos === this.state.position) {
        this.state.allAnswers.splice(idx, 1);
        this.setState({ answeredValue: ev.target.textContent });
      }
    });
    this.setState((prevState: any) => ({
      allAnswers: [
        ...prevState.allAnswers,
        { pos: this.state.position, givenAns: ev.target.textContent },
      ],
    }));
    console.log(
      this.state.data[this.state.position].correct +
        "##" +
        ev.target.textContent
    );

    switch (ev.target.id) {
      case "selectedA":
        this.setState({
          selected: {
            selectedA: true,
            selectedB: false,
            selectedC: false,
            selectedD: false,
          },
        });

        break;

      case "selectedB":
        this.setState({
          selected: {
            selectedB: true,
            selectedA: false,
            selectedC: false,
            selectedD: false,
          },
        });
        break;
      case "selectedC":
        this.setState({
          selected: {
            selectedC: true,
            selectedA: false,
            selectedB: false,
            selectedD: false,
          },
        });
        break;
      case "selectedD":
        this.setState({
          selected: {
            selectedD: true,
            selectedA: false,
            selectedB: false,
            selectedC: false,
          },
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <div className="row">
          {this.state.visible ? null : (
            <button
              className="startQuizButton"
              onClick={() => this.quesAnsShow()}
            >
              Let's Start
            </button>
          )}
        </div>
        <div>
          {this.state.visible ? (
            <Questions
              ques={this.state.data[this.state.position].ques}
              answers={this.state.data[this.state.position].answers}
              optionVisible={
                this.state.data[this.state.position].answers.length < 4
                  ? false
                  : true
              }
              quesNextChange={() => this.changeNext()}
              quesPrevChange={() => this.changePrev()}
              position={this.state.position}
              selectedAns={this.getAns}
              selectedA={this.state.selected.selectedA}
              selectedB={this.state.selected.selectedB}
              selectedC={this.state.selected.selectedC}
              selectedD={this.state.selected.selectedD}
              answeredValue={this.state.answeredValue}
              scoreCalc={() => this.getScore()}
            />
          ) : null}
        </div>
        {this.state.score || this.state.submitted ? (
          <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            Your score is : {this.state.score}
          </div>
        ) : null}
      </>
    );
  }
}

export default App;
