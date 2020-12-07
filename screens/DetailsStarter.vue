<template>
  <!-- questions section -->
  <div id="questions" class="columns is-vcentered is-mobile">
    <div class="column is-12">
      <!-- Cancel button -->
      <div class="scroll-top" style="display: block;">
        <span @click="cancel">&#215;</span>
      </div>
      <!-- End cancel button -->
      <div class="container">
        <!-- <div class="columns is-vcentered is-centered"> -->
        <!-- <div class="column is-12"> -->
        <!-- <transition name="fade"> -->
        <!-- Show form  -->
        <InfoForm :class="{ 'theform': true, 'form-isVisible': formIsVisible, 'form-invisible': formInvisible }" v-if="!isShowingQuestion" @displayQuestions="showQuestions($event)" />
        <!-- Show when on the first question -->
        <section v-else-if="firstQuestion" :class="{ 'section': true, 'firstSection': true, 'is-visible': isVisible, 'invisible': invisible }">
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
        <section v-else-if="secondQuestion" :class="{ 'section': true, 'secondSection': true, 'is-visible': secondIsVisible, 'invisible': secondInvisible }">
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
        <section v-else-if="copyright" :class="{ 'section': true, 'copyrightSection': true, 'is-visible': copyrightIsVisible, 'invisible': copyrightInvisible }">
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
        <section v-else-if="thirdQuestion" :class="{ 'section': true, 'thirdSection': true, 'is-visible': thirdIsVisible, 'invisible': thirdInvisible }">
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
        <section v-else-if="viewResult" :class="{ 'section': true, 'fourthSection': true, 'is-visible': fourthIsVisible, 'invisible': fourthInvisible }">
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
        <!-- </transition> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
      <!-- Cancel button -->
      <div class="scroll-btn is-hidden-desktop" style="display: block;">
        <i @click="scrollUp" class="fas fa-angle-up"></i>
        <i @click="scrollDown" class="fas fa-angle-down"></i>
      </div>
      <!-- End cancel button -->
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
        { offer: "You can create an OFFER. An Offer lets you create a request on the marketplace and pick the best Readr for you.", button1: "Create OFFER now", button2: "Restart Assistant", location: "https://trello.com/c/V9V80ck8" },
        { selfPublish: "You can create an Initiative. An Initiative lets you record the audiobook yourself and sell it on Youreadfor.me.", button1: "Create initiative", button2: "Restart Assistant", location: "https://www.figma.com/file/QsXEGiic6oijuiWKDvOCSohh/Youreadfor.me?node-id=620%3A15" },
        { demandChooser: "You can create a Demand. A Demand lets you request a  Readr without copyright. Youreadfor.me handles it for you.", button1: "Create Demand now", button2: "Restart Assistant", location: "#" },
        { newv: "You can create a NEWV. A New Version is the Readr reinterpretation of an existing Audiobook. Have it your way.", button1: "Create NEWV now", button2: "Restart Assistant", location: "#" }
      ],

      isVisible: false,

      invisible: false,

      formIsVisible: false,

      formInvisible: false,

      secondIsVisible: false,

      secondInvisible: false,

      thirdIsVisible: false,

      thirdInvisible: false,

      fourthIsVisible: false,

      fourthInvisible: false,

      copyrightIsVisible: false,

      copyrightInvisible: false,

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

      scrolled: false,

      isUpdated: false
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
      this.animateToSecondQuestion();
    },

    // set answer of second question then move to next question
    secondAnswer(question, value) {
      if (value === "yes") {
        this.setToYes(question);
      } else if (value === "no") {
        this.setToNo(question);
      }
      this.animateToThirdQuestion();
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
        this.animateToFourthSection();
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
        this.animateToFourthSection();
        this.option = this.options[1].selfPublish;
        this.linkText = this.options[1].button1;
        this.location = this.options[1].location;
      } else if (
        this.questions[0].answer === "yes" &&
        this.questions[1].answer === "no" &&
        value === "pick a reader"
      ) {
        console.log("GO TO DEMAND CHOOSER");
        this.animateToFourthSection();
        this.option = this.options[2].demandChooser;
        this.linkText = this.options[2].button1;
        this.location = this.options[2].location;
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "no" &&
        value === "read it myself"
      ) {
        console.log("GO TO NEWV");
        this.animateToFourthSection();
        this.option = this.options[3].newv;
        this.linkText = this.options[3].button1;
        this.location = this.options[3].location;
      } else if (
        this.questions[0].answer === "no" &&
        this.questions[1].answer === "yes" &&
        value === "pick a reader"
      ) {
        // window.location.href = "https://trello.com/c/V9V80ck8";
        this.animateToFourthSection();
        this.option = this.options[0].offer;
        this.linkText = this.options[0].button1;
        this.location = this.options[0].location;
      } else if (this.questions[0].answer === "no" &&
        this.questions[1].answer === "no" &&
        value === "pick a reader") {
        console.log("GO TO DEMAND CHOOSER");
        this.animateToFourthSection();
        this.option = this.options[2].demandChooser;
        this.linkText = this.options[2].button1;
        this.location = this.options[2].location;
      } else if (this.questions[0].answer === "yes" &&
        this.questions[1].answer === "no" &&
        value === "read it myself") {
        console.log("GO TO NEWV");
        this.animateToFourthSection();
        this.option = this.options[3].newv;
        this.linkText = this.options[3].button1;
        this.location = this.options[3].location;
      } else if (this.questions[0].answer === "no" &&
        this.questions[1].answer === "yes" &&
        value === "read it myself") {
        this.animateToFourthSection();
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
      const bread = this;
      this.copyrightIsVisible = false;
      this.copyrightInvisible = true;
      setTimeout(function() {
        bread.copyright = false;
        console.log("removed");
      }, 500)
      this.thirdQuestion = true;
      if (this.thirdQuestion) {
        setTimeout(function() {
          bread.thirdIsVisible = true;
          bread.blurButton();
          console.log("second");
        }, 1000)
      } else {
        console.log("copy not set")
      }
    },

    animateToFirstQuestion(value) {
      if (!this.isShowingQuestion) {
        this.formIsVisible = false;
        this.formInvisible = true;
        const bread = this;

        setTimeout(function() {
          bread.isShowingQuestion = value; // "value being true"
          console.log("removed");
        }, 500)
        this.firstQuestion = true;
        this.isVisible = false;
        this.invisible = false;
        if (this.firstQuestion) {
          setTimeout(function() {
            bread.isVisible = true;
            bread.blurButton();
            console.log("foood");
          }, 1000)
        } else {
          console.log("1 not set")
        }
      } else if (this.secondQuestion) {
        console.log("animating to firstQuestion");
        this.secondIsVisible = false;
        this.secondInvisible = true;
        const bread = this;
        setTimeout(function() {
          bread.secondQuestion = false;
          bread.thirdQuestion = false;
          bread.firstQuestion = true;
          bread.invisible = false;
          bread.isVisible = true;
          console.log("removed");
        }, 500)
        // this.firstQuestion = true;
        // this.isVisible = false;
        // this.invisible = false;
        // if (this.firstQuestion) {
        //   setTimeout(function() {
        //     bread.isVisible = true;
        //     console.log("second");
        //   }, 1000)
        // } else {
        //   console.log("3 not set")
        // }
      }
    },

    animateToSecondQuestion() {
      if (this.firstQuestion) {
        const bread = this;
        this.isVisible = false;
        this.invisible = true;
        setTimeout(function() {
          bread.firstQuestion = false;
          console.log("removed");
        }, 500)
        this.secondQuestion = true;
        this.secondIsVisible = false;
        this.secondInvisible = false;
        if (this.secondQuestion) {
          setTimeout(function() {
            bread.secondIsVisible = true;
            bread.blurButton();
            console.log("second");
          }, 1000)
        } else {
          console.log("2 not set")
        }
      } else if (this.thirdQuestion) {
        this.thirdIsVisible = false;
        this.thirdInvisible = true;
        // this.secondIsVisible = false;
        // console.log("animating to second question");
        const bread = this;
        // this.thirdInvisible = true;
        // this.thirdIsVisible = false;
        setTimeout(function() {
          bread.thirdQuestion = false;
          bread.fourthQueston = false;
          bread.secondQuestion = true;
          bread.secondInvisible = false;
          bread.secondIsVisible = true;
          console.log("removed");
        }, 500)
        // this.secondQuestion = true;
        // if (this.secondQuestion) {
        // setTimeout(function() {

        //   console.log("second is");
        // }, 1000)
        // } else {
        //   console.log("4 not set")
        // }
      }
    },

    animateToThirdQuestion() {
      if (this.secondQuestion) {
        const bread = this;
        this.secondIsVisible = false;
        this.secondInvisible = true
        setTimeout(function() {
          bread.secondQuestion = false;
          console.log("removed");
        }, 500)
        this.thirdQuestion = true;
        this.thirdIsVisible = false;
        this.thirdInvisible = false;
        if (this.thirdQuestion) {
          setTimeout(function() {
            bread.thirdIsVisible = true;
            bread.blurButton();
            console.log("second");
          }, 1000)
        } else {
          console.log("3 not set")
        }
      } else if (this.viewResult) {
        this.fourthIsVisible = false;
        this.fourthInvisible = true;
        const bread = this;

        setTimeout(function() {
          bread.viewResult = false;
          bread.isShowingQuestion = true;
          bread.thirdQuestion = true;
          bread.thirdInvisible = false;
          bread.thirdIsVisible = true;
          // setTimeout(function() {
          // }, 200)
        }, 500)
      }
    },

    animateToFourthSection() {
      if (this.thirdQuestion) {
        const bread = this;
        this.thirdIsVisible = false;
        this.thirdInvisible = true;
        setTimeout(function() {
          bread.thirdQuestion = false;
          console.log("removed");
        }, 500)
        this.viewResult = true;
        this.fourthIsVisible = false;
        this.fourthInvisible = false;
        if (this.viewResult) {
          setTimeout(function() {
            bread.fourthIsVisible = true;
            bread.blurButton();
            console.log("second");
          }, 1000)
        } else {
          console.log("4 not set")
        }
      } else if (!this.isShowingQuestion) {
        console.log("fourth worketh")
        this.formIsVisible = false;
        this.formInvisible = true;
        const bread = this;
        setTimeout(function() {
          bread.isShowingQuestion = true; // actually setting it to false
          bread.firstQuestion = false;
          bread.viewResult = true;
          bread.fourthIsVisible = true;
          setTimeout(function() {
            bread.fourthInvisible = false;
          }, 500)
        }, 500)
      }
    },

    animateToInfoform() {
      if (this.viewResult) {
        this.fourthIsVisible = false;
        this.fourthInvisible = true;
        const bread = this;
        setTimeout(function() {
          bread.viewResult = false;
          bread.isShowingQuestion = false;
          bread.formIsVisible = true;
          setTimeout(function() {
            bread.formInvisible = false;
          }, 200)
          console.log("fourth removed");
        }, 500)
        // this.formInvisible = false;
        // if (!this.isShowingQuestion === true) {
        //   setTimeout(function() {
        //     bread.formIsVisible = true;
        //     console.log("form is visible");
        //   }, 1000)
        // } else {
        //   console.log("form not set")
        // }
      } else if (this.firstQuestion) {
        this.isVisible = false;
        this.invisible = true;
        const bread = this;
        setTimeout(function() {
          bread.firstQuestion = false;
          bread.secondQuestion = false;
          bread.isShowingQuestion = false; // actually true
          bread.formIsVisible = true;
          setTimeout(function() {
            bread.formInvisible = false;
          }, 200)
          console.log("removed");
        }, 500)

        // if (!this.isShowingQuestion === true) {
        //   setTimeout(function() {
        //     bread.formIsVisible = true;
        //     console.log("second");
        //   }, 1000)
        // } else {
        //   console.log("form not set")
        // }
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
      this.secondIsVisible = false;
      this.secondInvisible = true
      const bread = this;
      setTimeout(function() {
        bread.secondQuestion = false;
        console.log("removed");
      }, 500)
      this.copyright = true;
      if (this.copyright) {
        setTimeout(function() {
          bread.copyrightIsVisible = true;
          bread.blurButton()
          console.log("copy");
        }, 1000)
      }
    },

    // display the first question
    showQuestions({ displayStatus, name }) {
      this.animateToFirstQuestion(displayStatus);
      // if (this.firstQuestion) {
      //  document.querySelector(".firstSection").classList.add("is-visible");
      //  console.log("beans");
      // }
      this.name = name;
    },

    // scroll up through the questions
    scrollUp() {
      if (this.firstQuestion) {
        this.animateToInfoform();
      } else if (this.secondQuestion) {
        this.animateToFirstQuestion(true);
      } else if (this.thirdQuestion) {
        this.animateToSecondQuestion();
      } else if (!this.isShowingQuestion) {
        this.animateToFourthSection();
      } else if (this.viewResult) {
        this.animateToThirdQuestion();
      }
    },

    scrollDown() {
      if (!this.isShowingQuestion) {
        this.animateToFirstQuestion(true);
      } else if (this.firstQuestion) {
        this.animateToSecondQuestion();
      } else if (this.secondQuestion) {
        this.animateToThirdQuestion();
      } else if (this.thirdQuestion) {
        this.animateToFourthSection();
      } else if (this.viewResult) {
        this.animateToInfoform();
      }
    },

    // scroll down thriugh the questions
    mouseScroll(e) {
      // console.log("beanas: ", e)
      if (e.deltaY < 0) {
        if (!this.isShowingQuestion) {
          this.animateToFirstQuestion(true);

        } else if (this.firstQuestion) {
          this.animateToSecondQuestion();

        } else if (this.secondQuestion) {
          this.animateToThirdQuestion();

        } else if (this.thirdQuestion) {
          this.animateToFourthSection();

        } else if (this.viewResult) {
          this.animateToInfoform();

        }
        console.log("times");
      } else if (e.deltaY > 0) {
        if (this.firstQuestion) {
          this.animateToInfoform();
        } else if (this.secondQuestion) {
          this.animateToFirstQuestion(true);
        } else if (this.thirdQuestion) {
          this.animateToSecondQuestion();
        } else if (!this.isShowingQuestion) {
          this.animateToFourthSection();
        } else if (this.viewResult) {
          this.animateToThirdQuestion();
        }
      }
    },

    cancel() {
      console.log("go back");
      this.isShowingQuestion = false;
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = false;
      this.copyright = false;
      this.viewResult = false;
      this.formIsVisible = false;
      this.formInvisible = false;
      this.isVisible = false;
      this.invisible = false;
      this.secondIsVisible = false;
      this.secondInvisible = false;
      this.copyrightIsVisible = false;
      this.copyrightInvisible = false;
      this.thirdIsVisible = false;
      this.thirdInvisible = false;
      this.fourthIsVisible = false;
      this.fourthInvisible = false;
      const beans = this;
      setTimeout(function() {
        beans.formIsVisible = true
        beans.formInvisible = false;
      }, 1000)
    },

    blurButton() {
      const btn = document.getElementsByClassName("button");
      for (const val of btn) {
        console.log("val: ", val);
        val.blur();
      }
    }
  },

  mounted() {
    const questions = document.querySelector("#questions");
    questions.style.height = window.innerHeight + 'px';
    questions.addEventListener("wheel", _.debounce(this.mouseScroll, 100));
    const beans = this;
    setTimeout(function() {
      beans.formIsVisible = true
    }, 1000)
  },

  // beforeUpdate() {
  //   console.log("updated");
  //   this.isUpdated = true;
  // },

  // updated() {
  //   if (this.isUpdated) {
  //     const btn = document.getElementsByClassName("button");
  //     for (const val of btn) {
  //       console.log("val: ", val);
  //       // val.blur();
  //     }
  //     this.isUpdated = false;
  //   }
  // }
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap");

p {
  color: #5f5f5f;
  font-family: "Mulish", sans-serif;
}

/*#questions {
  min-height: 80vh;
}*/

.title-box {
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  box-sizing: border-box;
}

.title-box__btn {
  cursor: pointer;
}

.firstSection,
.secondSection,
.copyrightSection,
.thirdSection,
.fourthSection {
  opacity: 0;
  transform: translateY(5em);
  transition: opacity .5s ease-out, transform .5s ease-out;
  will-change: opacity, transform;
}

.firstSection.is-visible,
.secondSection.is-visible,
.copyrightSection.is-visible,
.thirdSection.is-visible,
.fourthSection.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.theform {
  opacity: 0;
  transform: translateY(5em);
  transition: opacity .5s ease-out, transform .5s ease-out;
  will-change: opacity, transform;
}

.theform.form-isVisible {
  opacity: 1;
  transform: translateY(0);
}

.theform.form-invisible,
.firstSection.invisible,
.secondSection.invisible,
.copyrightSection.invisible,
.thirdSection.invisible,
.fourthSection.invisible {
  opacity: 0;
  transform: translateY(-5em);
}

/*.fade-enter,
.fade-leave-to {
  transform: translateY(200px) !important;
  opacity: 0;
}

.fade-leave-active {
  transition: opacity .5s ease-in;
}

.fade-enter-active {
  transition: opacity 2s 1s ease;
}*/

/*#a5ffc9*/

.button.is-success.is-light {
  min-width: 100% !important;
  transition: all .3s ease 0s;
}

/*.button.is-success.is-light:focus,*/
.button.is-success.is-light:active {
  background-color: #a5ffc9 !important;
  /*color: #257942 !important;*/
}

.button.is-success.is-light:hover {
  border-color: #48c774 !important;
}

/*.button.is-success:focus:not(:active) {
  box-shadow: none !important;
}
*/
@media (min-width: 990px) {
  .button.is-success.is-light:hover {
    box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
    transform: translateY(-2px);
  }
}

.fa-angle-up,
.fa-angle-down {
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
}

.fa-angle-down {
  margin-left: 30px;
}

.scroll-btn {
  padding-left: 10px;
  padding-right: 10px;
  min-width: 40px;
  height: 40px;
  line-height: 44px;
  position: fixed;
  right: 9px;
  bottom: 15px;
  z-index: 999;
  font-size: 13px;
  color: #00947e;
  text-align: center;
  text-decoration: none;
  display: none;
  background: #ebfffc;
  border: 1px solid #00947e;
  border-radius: 3px;
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
  -webkit-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
}

.scroll-top {
  min-width: 40px;
  height: 40px;
  line-height: 44px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: none;
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

/*.scroll-top:hover {
  transform: rotateZ(90deg);
}*/

@media (max-width: 766px) {
  .scroll-top {
    right: 5px;
  }
}

</style>
