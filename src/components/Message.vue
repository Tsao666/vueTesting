<template>
  <div>
    <h1>{{ someStr }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    someStr: String
  }
}
</script>