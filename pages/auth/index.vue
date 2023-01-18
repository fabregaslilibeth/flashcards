<template>
  <div class="body">
    <div class="container">
      <div class="blueBg">
        <div class="box signin">
          <h2 class="text-4xl font-extrabold">Welcome back!</h2>
          <p class="text-md tracking-wider mt-2 mb-8">Login to continue learning words.</p>
          <button
            class="bg-red-400 rounded-full px-12 py-2 text-white text-sm uppercase tracking-wider font-bold"
            @click="setActiveForm('login')"
          >
            Sign In
          </button>
        </div>
        <div class="box signup">
          <h2 class="text-4xl font-extrabold">Welcome!</h2>
          <p class="text-md tracking-wider mt-2 mb-8">Enter your details and start learning with us.</p>
          <button
            class="bg-red-400 rounded-full px-12 py-2 text-white text-sm uppercase tracking-wider font-bold"
            @click="setActiveForm('register')"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div class="formBox" :class="activeForm === 'register' && 'active'">
        <div v-if="visibleForm === 'login'" class="form signinForm">
          <login />
        </div>

        <div v-if="visibleForm === 'register'" class="form signinForm">
          <signup />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeForm = ref('register')
const visibleForm = ref('register')

const setActiveForm = (form: string) => {
  activeForm.value = form
  setTimeout(() => {
    visibleForm.value = form
  }, 300)
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#A0DBF2, #fff);
  transition: 0.5s;
}

.container {
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;
}

.blueBg {
  position: absolute;
  width: 100%;
  height: 500px;
  background: white;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.formBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  transition: 0.5s ease-in-out;
}

.formBox.active {
  left: 50%;
}
</style>
