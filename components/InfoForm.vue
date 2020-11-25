<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-7">
          <div class="title-box py-5">
            <p class="has-text-centered">What's your name?</p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-7">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="name" class="input" type="text" placeholder="Enter name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="name !== ''" class="columns is-centered">
      <div class="column is-7">
        <button @click="showQuestions" class="button is-primary">
          <span>OK</span>
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            name: ""
        }
    },

    methods: {
        showQuestions() {
            this.$emit("displayQuestions", true);
        }
    }
}
</script>

<style scoped>
section {
    padding-top: 90px;
}
</style>