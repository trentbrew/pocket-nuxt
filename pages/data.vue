<script setup>
  const pb = usePocketbase()
  const records = await pb
    .collection('siblings')
    .getFullList(200, { sort: 'age' })
</script>

<template>
  <div
    class="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center"
  >
    <ul class="text-center">
      <li class="my-4" v-for="(item, index) in records" :key="index">
        {{ item.name }} is {{ item.age }} years old.
      </li>
    </ul>
  </div>
</template>
