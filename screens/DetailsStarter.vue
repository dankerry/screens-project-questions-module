<template>
  <!-- questions section -->
  <div id="questions">
    <!-- Cancel button -->
    <div class="scroll-top" style="display: block;">
      <span @click="cancel">&#215;</span>
    </div>
    <!-- End cancel button -->

    <div class="container">
      <div class="columns is-vcentered is-centered">
        <div class="column is-12">
          <transition name="fade">
        <!-- Show form  -->
        <InfoForm v-if="!isShowingQuestion" key="visible" @displayQuestions="showQuestions($event)" />
        <!-- Show when on the first question -->
        <section v-else-if="firstQuestion" key="notVisible" class="section">
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
        <section v-else-if="secondQuestion" key="invisible" class="section">
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
        <section v-else-if="copyright" key="in-visible" class="section">
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="columns is-8-desktop is-variable is-multiline pt-4">
                <div class="column is-12-desktop is-12-tablet is-12-mobile">
                  <div class="py-5">
                    <p class="is-size-6">What is a copyright?</p>
                  </div>
                  <div class="py-5">
                    <p class="is-size-6">If you create a deed you are allowed to use, change, edit, sell and resell it. Sometimes copyrights are sold. If you do not have it, an artist, author or publisher can revoke the right to create Demand, NEWV or Spotlights.</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="copyrightAnswer('yes')" class="button is-success is-outlined is-light">
                    I have the copyright
                  </button>
                </div>
                <div class="column is-6-desktop is-hidden-mobile">
                  <button @click="copyrightAnswer('no')" class="button is-success is-outlined is-light">
                    I don't have it
                  </button>
                </div>
                <!-- Buttons on mobile -->
                <div class="columns pt-4 is-hidden-desktop is-hidden-tablet">
                  <div class="column">
                    <button @click="copyrightAnswer('yes')" class="button is-success is-outlined is-light">
                      I have the copyright
                    </button>
                  </div>
                  <div class="column">
                    <button @click="copyrightAnswer('no')" class="button is-success is-outlined is-light">
                      I don't have it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Show when on the third question -->
        <section v-else-if="thirdQuestion" key="unvisible" class="section">
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
        <section v-else-if="viewResult" key="un-visible" class="section">
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="columns is-8-desktop is-variable is-multiline pt-4">
                <div class="column is-12-desktop is-12-tablet is-12-mobile">
                  <div class="py-5">
                    <p class="is-size-6">{{ name }}, here is your result:</p>
                  </div>
                  <div class="py-5">
                    <p class="is-size-6">{{ option }}</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6-desktop is-hidden-mobile">
                  <a :href="location" class="button is-success is-outlined is-light">
                    {{ linkText }}
                  </a>
                </div>
                <div class="column is-6-desktop is-hidden-mobile">
                  <a href="#" class="button is-success is-outlined is-light">
                    Restart Assistant
                  </a>
                </div>
                <!-- Buttons on mobile -->
                <div class="columns pt-4 is-hidden-desktop is-hidden-tablet">
                  <div class="column">
                    <a :href="location" class="button is-success is-outlined is-light">
                      {{ linkText }}
                    </a>
                  </div>
                  <div class="column">
                    <a href="#" class="button is-success is-outlined is-light">
                      Restart Assistant
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </transition>
        </div>
      </div>
    </div>
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
          question: "Do you want someone else to produce an Audiobook or do you want to read it yourself?",
          answer: ""
        },
      ],

      options: [
        { offer: "You can create an OFFER. An Offer lets you create a request on the marketplace and pic the best readr for you.", button1: "Create OFFER now", button2: "Restart Assistant", location: "https://trello.com/c/V9V80ck8" },
        { selfPublish: "You can create an initiative. An initiative lets you record the audiobook yourself and sell it on Youreadfor.me.", button1: "Create initiative", button2: "Restart Assistant", location: "https://www.figma.com/file/QsXEGiic6oijuiWKDvOCSohh/Youreadfor.me?node-id=620%3A15" },
        { demandChooser: "You can create a demand. A demand lets you request a  Readr without copyright. Youreadfor.me handles it for you.", button1: "Create Demand now", button2: "Restart Assistant", location: "#" },
        { newv: "You can create a NEWV. A New Version is the Readr reinterpretation of an existing Audiobook. Have it your way.", button1: "Create NEWV now", button2: "Restart Assistant", location: "#" }
      ],

      option: "",

      linkText: "",

      location: "",

      name: "",

      // shows info form when false
      isShowingQuestion: false,

      // shows first question when true
      firstQuestion: false,

      // shows second question when true
      secondQuestion: false,

      // show third question when true
      thirdQuestion: false,

      viewResult: false,

      copyright: false,

      scrolled: false
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
        // window.location.href = "https://trello.com/c/V9V80ck8";
        this.viewResult = true;
        this.thirdQuestion = false;
        this.option = this.options[0].offer;
        this.linkText = this.options[0].button1;
        this.location = this.options[0].location;
      } else if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "yes" &&
        value === "read it myself"
      ) {
        // window.location.href =
        // "https://www.figma.com/file/QsXEGiic6oijuiWKDvOCSohh/Youreadfor.me?node-id=620%3A15";
        this.viewResult = true;
        this.thirdQuestion = false;
        this.option = this.options[1].selfPublish;
        this.linkText = this.options[1].button1;
        this.location = this.options[1].location;
      } else if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "no" &&
        value === "pick a reader"
      ) {
        console.log("GO TO DEMAND CHOOSER");
        this.viewResult = true;
        this.thirdQuestion = false;
        this.option = this.options[2].demandChooser;
        this.linkText = this.options[2].button1;
        this.location = this.options[2].location;
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "no" &&
        value === "read it myself"
      ) {
        console.log("GO TO NEWV");
        this.viewResult = true;
        this.thirdQuestion = false;
        this.option = this.options[3].newv;
        this.linkText = this.options[3].button1;
        this.location = this.options[3].location;
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "yes" &&
        value === "pick a reader"
      ) {
        // window.location.href = "https://trello.com/c/V9V80ck8";
        this.viewResult = true;
        this.thirdQuestion = false;
        this.option = this.options[0].offer;
        this.linkText = this.options[0].button1;
        this.location = this.options[0].location;
      }
    },

    copyrightAnswer(value) {
      if (value === "yes") {
        this.setToYes(this.questions[1].question);
      } else if (value === "no") {
        this.setToNo(this.questions[1].question);
      }
      this.copyright = false;
      this.thirdQuestion = true;
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
      this.copyright = true;
      this.secondQuestion = false;
    },

    // display the first question
    showQuestions({displayStatus, name}) {
      this.isShowingQuestion = displayStatus; // "value being true"
      this.firstQuestion = true;
      this.name = name;
    },

    // scroll up through the questions
    scrollUp() {
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

    scrollDown() {
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
    },

    // scroll down thriugh the questions
    mouseScroll(e) {
      // console.log("beanas: ", e)
      if (e.deltaY < 0) {
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
        } else if (this.viewResult) {
          this.viewResult = false;
          this.isShowingQuestion = false;
        }
        console.log("times");
      } else if (e.deltaY > 0) {
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
        } else if (this.viewResult) {
          this.viewResult = false;
          this.thirdQuestion = true;
        }
      }
    },

    cancel () {
      console.log("go back");
      this.isShowingQuestion = false;
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = false;
      this.copyright = false;
      this.viewResult = false;
    }
  },

  mounted() {
    const questions = document.querySelector("#questions");
    questions.addEventListener("wheel", _.debounce(this.mouseScroll, 100));

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
  padding-top: 260px !important;
}

/*@media (min-width: 990px) {
  section {
    height: 90vh !important;
  }
}*/

@media (max-width: 450px) {
  section {
    padding-top: 200px !important;
  }
}


@media (max-width: 360px) {
  section {
    padding-top: 140px !important;
  }
}

.title-box {
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  box-sizing: border-box;
}

.title-box__btn {
  cursor: pointer;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(200px) !important;
  opacity: 0;
}

.fade-leave-active {
  transition: all .5s ease-in;
}

.fade-enter-active {
  transition: all 1s ease;
}

.button.is-success.is-light {
  min-width: 100% !important;
  transition: all .3s ease 0s;
}

.button.is-success.is-light:focus,
.button.is-success.is-light:active {
  background-color: #a5ffc9 !important;
}

.button.is-success.is-light:hover {
  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
  transform: translateY(-2px);
}

.scroll-top {
  /*padding-left: 10px;
  padding-right: 10px;*/
  min-width: 40px;
  height: 40px;
  line-height: 44px;
  position: fixed;
  right: 50px;
  top: 50px;
  z-index: 999;
  font-size: 15px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: none;
  /*background: #000000;*/
  /*border-radius: 3px;*/
  /*-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);*/
  /*box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);*/
  -webkit-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
}

.scroll-top span {
  color: #777; 
  font-size: 40px; 
  font-weight: 100;
  cursor: pointer;
}

.scroll-top:hover {
  transform: rotateZ(90deg);
}

@media (max-width: 766px) {
  .scroll-top {
    right: 20px;
  }
}

</style>
