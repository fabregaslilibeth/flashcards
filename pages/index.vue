<template>
  <div>
    <div class="grid grid-cols-12 h-screen text-center">
      <div class="col-span-2 flex flex-col justify-between bg-red-50 w-48">
        <div class="h-4/6 bg-green-50 flex flex-col justify-between">
          <div class="flex w-full border border-gray">
            <div class="border border-gray w-1/2">Nihongo to English</div>
            <div class="border border-gray w-1/2">English to Nihongo</div>
          </div>
          <div class="w-full border border-gray bg-gray-300">
            <div class="border border-gray w-full">Romaji</div>
            <div class="border border-gray w-full font-extrabold">ひらがな</div>
            <div class="border border-gray w-full">カタカナ</div>
            <div class="border border-gray w-full">感じ</div>
          </div>
          <div class="flex w-full">
            <div class="border border-gray w-1/2">JLPT Words</div>
            <div class="border border-gray w-1/2">Random</div>
          </div>
          <div class="flex w-full space-between">
            <div class="border border-gray w-full">1</div>
            <div class="border border-gray w-full">2</div>
            <div class="border border-gray w-full">3</div>
            <div class="border border-gray w-full">4</div>
            <div class="border border-gray w-full">5</div>
          </div>
          <div class="flex w-full">
            <div class="border border-gray w-full">Limit: 40</div>
          </div>
        </div>

        <div>
          <div>Add words</div>
          <div>
            <signout />
          </div>
        </div>
      </div>

      <div class="col-span-2"></div>
      <div class="col-span-4 border border-gray">flash card here</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
