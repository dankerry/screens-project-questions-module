<template>
  <!-- questions section -->
  <div id="questions">
    <div class="container">
      <transition name="fade">
      	<!-- Show form  -->
        <InfoForm v-if="!isShowingQuestion" key="visible" @displayQuestions="showQuestions($event)" />
        <!-- Show when on the first question -->
        <section v-if="firstQuestion" key="notVisible" class="section fade-enter fade-enter-active">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="title-box py-5">
                  <p class="has-text-centered">Not sure what to choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="columns is-8-desktop is-variable is-multiline pt-4">
                <div class="column is-12-desktop is-12-tablet is-12-mobile">
                  <div class="py-5">
                    <p class="is-size-6">{{ questions[0].question }}</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="firstAnswer(questions[0].question, 'yes')" class="button is-success is-outlined is-light">
                    Yes
                  </button>
                </div>
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="firstAnswer(questions[0].question, 'no')" class="button is-success is-outlined is-light">
                    No
                  </button>
                </div>
              </div>
              <!-- Buttons on mobile -->
              <div class="columns pt-4 is-hidden-desktop is-hidden-tablet">
                <div class="column">
                  <button @click="firstAnswer(questions[0].question, 'yes')" class="button is-success is-outlined is-light">
                    Yes
                  </button>
                </div>
                <div class="column">
                  <button @click="firstAnswer(questions[0].question, 'no')" class="button is-success is-outlined is-light">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End first question -->
        <!-- Show when on the second question -->
        <section v-if="secondQuestion" key="invisible" class="section fade-enter fade-enter-active">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="title-box py-5">
                  <p class="has-text-centered is-size-6">Not sure what to choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="columns is-8-desktop is-variable is-multiline pt-4">
                <div class="column is-12-desktop is-12-tablet is-12-mobile">
                  <div class="py-5">
                    <p class="is-size-6">{{ questions[1].question }}</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-2-desktop is-hidden-mobile">
                  <button @click="secondAnswer(questions[1].question, 'yes')" class="button is-success is-outlined is-light">
                    Yes
                  </button>
                </div>
                <div class="column is-2-desktop is-hidden-mobile">
                  <button @click="secondAnswer(questions[1].question, 'no')" class="button is-success is-outlined is-light">
                    no
                  </button>
                </div>
                <div class="column is-3-desktop is-hidden-mobile">
                  <button @click="goToCopyright" class="button is-success is-outlined is-light">
                    What is a copyright?
                  </button>
                </div>
                <!-- Buttons on mobile -->
                <div class="columns pt-4 is-hidden-desktop is-hidden-tablet">
                  <div class="column">
                    <button @click="secondAnswer(questions[1].question, 'yes')" class="button is-success is-outlined is-light">
                      Yes
                    </button>
                  </div>
                  <div class="column">
                    <button @click="secondAnswer(questions[1].question, 'no')" class="button is-success is-outlined is-light">
                      No
                    </button>
                  </div>
                  <!-- show when on question 2 on mobile -->
                  <div class="column">
                    <button @click="goToCopyright" class="button is-success is-outlined is-light">
                      What is a copyright?
                    </button>
                  </div>
                  <!-- end "show when on question 2 on mobile" -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End second question -->
        <!-- Show when on the third question -->
        <section v-if="thirdQuestion" key="unvisible" class="section fade-enter fade-enter-active">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="title-box py-5">
                  <p class="has-text-centered">Not sure what to choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="columns is-8-desktop is-variable is-multiline pt-4">
                <div class="column is-12-desktop is-12-tablet is-12-mobile">
                  <div class="py-5">
                    <p class="is-size-6">{{ questions[2].question }}</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="thirdAnswer('pick a reader')" class="button is-success is-outlined is-light">
                    Pick a readr
                  </button>
                </div>
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="thirdAnswer('read it myself')" class="button is-success is-outlined is-light">
                    Read it myself
                  </button>
                </div>
                <!-- Buttons on mobile -->
                <div class="columns pt-4 is-hidden-desktop is-hidden-tablet">
                  <div class="column">
                    <button @click="thirdAnswer('pick a reader')" class="button is-success is-outlined is-light">
                      Pick a readr
                    </button>
                  </div>
                  <div class="column">
                    <button @click="thirdAnswer('read it myself')" class="button is-success is-outlined is-light">
                      Read it myself
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End third question -->
      </transition>
    </div>
    <!-- Questions navigator -->
    <div class="scroll-top" style="display: block;">
      <span>
        Youreadfor.me
      </span>
      <i @click="scrollUp" class="fas fa-angle-up"></i>
      <i @click="scrollDown" class="fas fa-angle-down"></i>
    </div>
    <!-- End questions navigator -->
  </div>
  <!-- end questions sections -->
</template>
<script>
export default {
  data() {
    return {
      // array holding each question and answer
      questions: [
        { question: "Did you write/publish the book yourself?", answer: "" },
        { question: "Do you have the copyright to your book?", answer: "" },
        {
          question: "Do you want someone else to produce an Audiobook or do you want to read it yourself? Pick a Repair/Read it myself",
          answer: ""
        },
      ],

      // shows info form when false
      isShowingQuestion: false,

      // shows first question when true
      firstQuestion: false,

      // shows second question when true
      secondQuestion: false,

      // show third question when true
      thirdQuestion: false
    };
  },

  methods: {
  	// set answer of first question then move to next question
    firstAnswer(question, value) {
      if (value === "yes") {
        this.setToYes(question);
      } else if (value === "no") {
        this.setToNo(question);
      }
      this.firstQuestion = false;
      this.secondQuestion = true;
    },

    // set answer of second question then move to next question
    secondAnswer(question, value) {
      if (value === "yes") {
        this.setToYes(question);
      } else if (value === "no") {
        this.setToNo(question);
      }
      this.secondQuestion = false;
      this.thirdQuestion = true;
    },

    // set answer of third question then redirect depending on the answers of the first, second and third question
    thirdAnswer(value) {
      console.log("works")
      if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "yes" &&
        value === "pick a reader"
      ) {
        window.location.href = "https://trello.com/c/V9V80ck8";
      } else if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "yes" &&
        value === "read it myself"
      ) {
        window.location.href =
          "https://www.figma.com/file/QsXEGiic6oijuiWKDvOCSohh/Youreadfor.me?node-id=620%3A15";
      } else if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "no" &&
        value === "pick a reader"
      ) {
        console.log("GO TO DEMAND CHOOSER");
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "no" &&
        value === "read it myself"
      ) {
        console.log("GO TO NEWV");
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "yes" &&
        value === "pick a reader"
      ) {
        window.location.href = "https://trello.com/c/V9V80ck8";
      }
    },

    // get current question being asked
    getCurrentQuestion(question) {
      for (const q of this.questions) {
        if (q.question === question) {
          return q;
        }
      }
    },

    // set the answer of current question to yes
    setToYes(question) {
      this.getCurrentQuestion(question).answer = "yes";
    },

    // set the answer of current question to no
    setToNo(question) {
      this.getCurrentQuestion(question).answer = "no";
    },

    // when the "what is a copyright?" button is clicked.
    goToCopyright() {
      console.log("redirecting to copyright...");
    },

    // display the first question
    showQuestions(value) {
      this.isShowingQuestion = value; // "value being true"
      this.firstQuestion = true;
    },

    // scroll up through the questions
    scrollUp () {
    	if (this.firstQuestion) {
    		this.firstQuestion = false;
    		this.isShowingQuestion = false;
    	} else if (this.secondQuestion) {
    		this.secondQuestion = false;
    		this.firstQuestion = true
    	} else if (this.thirdQuestion) {
    		this.thirdQuestion = false;
    		this.secondQuestion = true
    	} else if (!this.isShowingQuestion) {
    		this.thirdQuestion = true;
    		this.isShowingQuestion = true;
    	}
    },

    // scroll down thriugh the questions
    scrollDown () {
    	if (!this.isShowingQuestion) {
    		this.isShowingQuestion = true;
    		this.firstQuestion = true;
    	} else if (this.firstQuestion) {
    		this.firstQuestion = false;
    		this.secondQuestion = true;
    	} else if (this.secondQuestion) {
    		this.secondQuestion = false;
    		this.thirdQuestion = true;
    	} else if (this.thirdQuestion) {
    		this.thirdQuestion = false;
    		this.isShowingQuestion = false;
    	}
    }
  }
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap");

p {
  color: #5f5f5f;
  font-family: "Mulish", sans-serif;
}

section {
  padding-top: 90px !important;
}

.title-box {
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  box-sizing: border-box;
}

.title-box__btn {
  cursor: pointer;
}

.fade-enter {
  transform: translateY(500px) !important;
}

.fade-enter-active {
  transition: transform .5s ease-in;
}

button {
  min-width: 100% !important;
}

.scroll-top {
  padding-left: 10px;
  padding-right: 10px;
  min-width: 40px;
  height: 40px;
  line-height: 44px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  font-size: 12px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: none;
  background: #000000;
  border-radius: 3px;
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
  -webkit-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
}

.fa-angle-down,
.fa-angle-up {
  margin-left: 10px;
  cursor: pointer;
}

</style>
