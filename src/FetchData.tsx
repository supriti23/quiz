import { QuestionResponse, QuestionSet } from "./Questions/Questions.type";
import { Response } from "./mock/response";

const fetchData = async (): Promise<any> => {
  // const url = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy';
  // let promise = await fetch(url);
  // let data = await promise.json();
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(Response), 10);
  });
  return promise;
  // return data;
};

const showQuestions = (): QuestionSet[] => {
  let quesAns: QuestionSet[] = [];
  fetchData()
    .then((val) => {
      val.results.map((val: any, idx: number) => {
        let ans = [];
        ans = val.incorrect_answers;
        ans.push(val.correct_answer);
        let obj = {
          ques: val.question,
          answers: ans,
          correct: val.correct_answer,
        };
        quesAns.push(obj);
      });
    })
    .catch((e) => {console.error("********** NO RESPONSE ************")
  console.log(e)});
  return quesAns;
};
export default showQuestions;
