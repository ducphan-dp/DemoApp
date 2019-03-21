import _ from "lodash";

class QuizCard {
  constructor(orientation, cardId, prompt, correctAnswer, answers) {
    this.orientation = orientation;
    this.cardID = cardId;
    this.prompt = prompt;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }
}

function mkReviews(cards) {
  var makeReviews = function(sideOne, sideTwo) {
    return cards.map(card => {
      let others = cards.filter(other => {
        return other.id !== card.id;
      });

      let answers = _.shuffle(
        [card[sideTwo]].concat(_.sampleSize(_.map(others, sideTwo), 3))
      );

      return new QuizCard(
        sideOne,
        card.id,
        card[sideOne],
        card[sideTwo],
        answers
      );
    });
  };

  let reviews = makeReviews("front", "back").concat(
    makeReviews("back", "front")
  );
  return _.shuffle(reviews);
}

export { mkReviews, QuizCard };
