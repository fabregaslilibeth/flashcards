<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      {{ page.id }} {{ page.name }}
      <span @click="destroy(page.id)">Delete</span>
      <span @click="update(page.id)">Update</span>
    </div>
    <div class="flex justify-center items-center">
      <h1 class="text-3xl font-bold text-green-500">
        Installed Tailwind CSS 3 in Nuxt 3
      </h1>
    </div>

    <add-form @submitForm="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
const pages = ref();

onMounted(async () => {
  fetchPages();
});

const handleSubmit = async (formState: HTMLFormElement) => {
  await $fetch("/api/add?col=pages", {
    method: "POST",
    body: formState,
  })

  fetchPages();
};

const destroy = async (id: string) => {
  await $fetch(`/api/delete?col=pages&id=${id}`);

  fetchPages();
}

const update = async (id: string) => {
  const fields = {
    name: 'EDITED', 
  }
  await $fetch(`/api/update?col=pages&id=${id}`, {
    method: "PUT",
    body: fields,
  })

  fetchPages();
}

const fetchPages = async () => {
  const { result } = await $fetch("/api/query?col=pages");
  pages.value = result;
};
</script>
