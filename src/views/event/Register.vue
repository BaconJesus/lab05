<template>
  <p>Regstration form here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], //inject the global store
  methods: {
    register() {
      //Assuming successful API call to register them
      //set flash message to appear on the next page loaded which says
      //you're successfully register for ' + this.event.title
      this.GStore.flashMessage =
        'You are successfully registered for' + this.event.title
      setTimeout(() => {
        //After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
