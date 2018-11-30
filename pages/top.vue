<template>
  <div>
    {{ apiResult }}
    あいうえお
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return { apiResult: context.req.data }
  }
}
</script>
