<template>
  <!-- questions section -->
  <div id="questions">
    <div class="container">
      <InfoForm v-if="!isShowingQuestion" @displayQuestions="showQuestions($event)" />
      <section v-else class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-12">
              <div class="title-box py-5">
                <p class="has-text-centered">Not sure what to choose?</p>
              </div>
            </div>
          </div>
        </div>
          <div v-if="question !== questions[1].question" class="columns is-8-desktop is-variable is-multiline pt-4">
            <div class="column is-8-desktop is-12-tablet is-12-mobile">
              <div class="title-box py-5">
                <p class="has-text-centered">{{ question }}</p>
              </div>
            </div>
            <div class="column is-2-desktop is-hidden-mobile">
              <div class="title-box title-box__btn py-5">
                <p @click="question !== questions[2].question? answer('yes'): answer('pick a reader')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"yes": "Pick a Readr" }}</p>
              </div>
            </div>
            <div class="column is-2-desktop is-hidden-mobile">
              <div class="title-box title-box__btn py-5">
                <p @click="question !== questions[2].question? answer('no'): answer('read it myself')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"no": "Read it myself" }}</p>
              </div>
            </div>
          </div>
          <!-- show when on question 2 -->
          <div v-else class="columns is-8-desktop is-variable is-multiline pt-4">
            <div class="column is-5-desktop is-12-tablet is-12-mobile">
              <div class="title-box py-5">
                <p class="has-text-centered">{{ question }}</p>
              </div>
            </div>
            <div class="column is-2-desktop is-hidden-mobile">
              <div class="title-box title-box__btn py-5">
                <p @click="question !== questions[2].question? answer('yes'): answer('pick a reader')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"yes": "Pick a Readr" }}</p>
              </div>
            </div>
            <div class="column is-2-desktop is-hidden-mobile">
              <div class="title-box title-box__btn py-5">
                <p @click="question !== questions[2].question? answer('no'): answer('read it myself')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"no": "Read it myself" }}</p>
              </div>
            </div>
            <div class="column is-3-desktop is-hidden-mobile">
              <div class="title-box title-box__btn py-5">
                <p @click="goToCopyright" class="has-text-centered">What is a copyright?</p>
              </div>
            </div>
          </div>
          <!-- end "show when on question 2" -->
          <!-- Buttons on mobile -->
          <div class="columns is-3 is-variable pt-4 is-hidden-desktop is-hidden-tablet">
            <div class="column">
              <div class="title-box py-5">
                <p @click="question !== questions[2].question? answer('yes'): answer('pick a reader')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"yes": "Pick a Readr" }}</p>
              </div>
            </div>
            <div class="column">
              <div class="title-box py-5">
                <p @click="question !== questions[2].question? answer('no'): answer('read it myself')" class="has-text-centered is-uppercase">{{ question !== questions[2].question?"no": "Read it myself" }}</p>
              </div>
            </div>
            <!-- show when on question 2 on mobile -->
            <div v-if="question === questions[1].question" class="column">
              <div class="title-box title-box__btn py-5">
                <p @click="goToCopyright" class="has-text-centered">What is a copyright?</p>
              </div>
            </div>
            <!-- end "show when on question 2 on mobile" -->
          </div>
      </section>
    </div>
  </div>
  <!-- end questions sections -->
</template>

<script>
export default {
  data () {
    return {
      // array holding each question and answer
      questions: [
        { question : "Did you write/publish the book yourself?", answer: "" },
        { question: "Do you have the copyright to your book?", answer: "" },
        { question: "Do you want someone else to produce an Audiobook or do you want to read it yourself? Pick a Repair/Read it myself", answer: "" }
      ],

      //value holding the current question
      question: "",

      isShowingQuestion: false
    };
  },

  mounted() {
    //setting the current question when the component has mounted the DOM
    this.question = this.questions[0].question;
  },

  methods: {
    answer(value) { // "value" is each answer that has been clicked
      switch (this.question) {
        case "Did you write/publish the book yourself?":
          if (value === "yes") {
            this.setToYes(this.question);
          } else if (value === "no") {
            this.setToNo(this.question);
          }
          this.question = this.questions[1].question;
          break;
        case "Do you have the copyright to your book?":
          if (value === "yes") {
            this.setToYes(this.question);
          } else if (value === "no") {
            this.setToNo(this.question);
          }
          this.question = this.questions[2].question;
          break;
        case this.questions[2].question:
          if (this.questions[0].answer === "yes" && this.questions[1].answer === "yes" && value === "pick a reader") {
            window.location.href = "https://trello.com/c/V9V80ck8";
          } else if (this.questions[0].answer === "yes" && this.questions[1].answer === "yes" && value === "read it myself") {
            window.location.href = "https://www.figma.com/file/QsXEGiic6oijuiWKDvOCSohh/Youreadfor.me?node-id=620%3A15";
          } else if (this.questions[0].answer === "yes" && this.questions[1].answer === "no" && value === "pick a reader") {
            console.log("GO TO DEMAND CHOOSER");
          } else if (this.questions[0].answer === "no" && this.questions[1].answer === "no" && value === "read it myself") {
            console.log("GO TO NEWV");
          } else if (this.questions[0].answer === "no" && this.questions[1].answer === "yes" && value === "pick a reader") {
            window.location.href = "https://trello.com/c/V9V80ck8";
          }
          break;
        default:
          if (value === "") {
            console.log("nothing happens");
          }
          break;
      }
    },

    getCurrentQuestion(question) {
      for (const q of this.questions) {
        if (q.question === question) {
          return q;
        }
    }
  },

  setToYes(question) {
    this.getCurrentQuestion(question).answer = "yes";
  },

  setToNo(question) {
    this.getCurrentQuestion(question).answer = "no";
  },

  goToCopyright() {
    console.log("redirecting to copyright...");
  },

  showQuestions(value) {
    this.isShowingQuestion = value; // "value being true"
  }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
p {
  color: #5f5f5f;
  font-family: 'Mulish', sans-serif;
}

section {
  padding-top: 90px;
}

.title-box {
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  box-sizing: border-box;
}

.title-box__btn {
  cursor: pointer;
}
</style>
