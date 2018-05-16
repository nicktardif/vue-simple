<template>
  <div>
    <img :src="link" style="width:300px"/>
    <p>{{ name }}</p>
  </div>
</template>

<script>

export default {
  name: 'ButteImage',
  props: ['link', 'name']
}
</script>
