<template>
  <main>
    <div
      class="bg-blue-500 text-white px-12 py-1 rounded-full cursor-pointer"
      @click="upload"
    >
      Import CSV
    </div>
  </main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("home", () =>
  queryContent("/words").findOne()
);

const upload = async () => {
  const words = data.value.body;

  words.forEach((word) => {
    const form = {
      chapter: word.source,
      english: word.english,
      romaji: word.romaji,
      hiragana: word.hiragan,
      katakana: word.katakana,
      kanji: word.kanji,
      partOfSpeech: word.category,
      jlptLevel: "5",
    }

    submit(form)
  })
};

const submit = async (formState: HTMLFormElement) => {
  await $fetch("/api/add?col=vocabs", {
    method: "POST",
    body: formState,
  });
};
</script>
