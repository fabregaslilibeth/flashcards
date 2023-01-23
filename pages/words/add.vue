<template>
  <div class="m-8">
    <div class="flex justify-between">
      <div class="text-blue-500 cursor-pointer">
        <nuxt-link to="/">&larr; Back</nuxt-link>
      </div>
      <import-csv />
    </div>
    
    <div class="my-8 relative">
      <form @submit.prevent="handleSubmit()">
        <div class="flex relative" v-for="(form, index) in forms" :key="index">
          <div class="bcursor-pointer">
            <div class="rounded-full w-6 h-6 text-white flex justify-center items-center text-xs mr-2"
              :class="index % 2 ? 'bg-green-300' : 'bg-green-500'">
              {{ index + 1 }}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="English"
              v-model="form.english"
              class="w-full text-black border-b border-green-500 placeholder-gray-400 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Hiragana"
              v-model="form.hiragana"
              class="w-full text-green-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Katakana"
              v-model="form.katakana"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Kanji"
              v-model="form.kanji"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="JLPT Level"
              v-model="form.jlptLevel"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Chapter"
              v-model="form.chapter"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Part Of Speech"
              v-model="form.partOfSpeech"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Verb Group"
              v-model="form.verbGroup"
              class="w-full text-gray-800 border-b border-green-500 focus:outline-none focus:shadow-outline px-3 py-1 text-xs"
              :class="index % 2 ? 'bg-green-50' : 'bg-green-200'"
            />
          </div>
          <div v-if="index > 0" class="absolute bottom-0 -right-2 cursor-pointer" @click="removeRow(index)">
            <div class="rounded-full w-4 h-4 bg-red-500 text-white flex justify-center items-center text-xs">
              &times;
            </div>
          </div>
        </div>

        <div class="my-8">
          <button
            type="submit"
            class="bg-blue-500 text-white px-12 py-1 rounded-full cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="absolute -top-4 right-0 cursor-pointer animate-bounce select-none" @click="addRow">
        <div class="rounded-full w-10 h-10 bg-blue-800 text-white flex justify-center items-center text-xl">
          &plus;
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const forms = ref([
  {
    english: "",
    hiragana: "",
    katakana: "",
    kanji: "",
    jlptLevel: "",
    chapter: "",
    partOfSpeech: "",
    verbGroup: "",
  },
]);

const addRow = () => {
  // if (forms.value.length > 19) {
  //   return
  // }
  forms.value.push({
    english: "",
    hiragana: "",
    katakana: "",
    kanji: "",
    jlptLevel: "",
    chapter: "",
    partOfSpeech: "",
    verbGroup: "",
  });
};

const removeRow = (index) => {
  forms.value.splice(index, 1)
}

const handleSubmit = () => {
  console.log(forms.value);
}

</script>
