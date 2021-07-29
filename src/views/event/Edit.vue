<template>
  <p>Edit the event here</p>
  <button @click="editbut">Edit data</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    editbut() {
      this.GStore.flashMessage =
        'Your data for' + this.event.title + 'has been updated'
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
