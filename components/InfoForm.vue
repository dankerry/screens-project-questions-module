<template>
  <!-- Personalization form -->
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-7">
        <div class="field">
          <label class="label">What's your name?*</label>
          <div class="control has-icons-left has-icons-right">
            <input v-model="name" class="input" type="text" placeholder="Enter name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="name !== ''" class="columns is-centered">
      <div class="column is-7">
        <button @click="showQuestions" class="button is-primary is-outlined is-light">
          <span>OK</span>
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
    </div>
  </section>
  <!-- End personalization form -->
</template>

<script>
export default {
    data () {
        return {
            name: ""
        }
    },

    methods: {
        // display the first question
        showQuestions() {
            this.$emit("displayQuestions", true);
        }
    }
}
</script>

<style scoped>
section {
    padding-top: 15rem !important;
}

input {
  border: none;
  border-bottom: 1px solid #d6d6d6;
  outline: none;
  border-radius: 0;
  box-shadow: none;
  margin-top: 32px;
}

.icon.is-left {
  margin-top: 32px;
}

input:focus {
  outline: none;
  box-shadow: none;
  border-color: black;
}

label {
  font-size: 20px;
  font-weight: unset;
}

button {
  min-width: unset !important;
}
</style>