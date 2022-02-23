<template>
  <section class="container">
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="changeAge">Change Age</button>
    <br><br>
    <div>
      <input type="text" id="" placeholder="First name" v-model="firstName" />
      <input type="text" id="" placeholder="Last name" v-model="lastName" />
    </div>
  </section>

  <!-- <section class="container">
    <h2>{{ user2.name }}</h2>
    <h3>{{ user2.age }}</h3>
  </section>
  <section class="container">
    <h2>{{ user3.name }}</h2>
    <h3>{{ user3.age }}</h3>
  </section>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
  </section> -->
</template>

<script>
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// import { ref, reactive, toRefs } from 'vue';

export default {
  components: { UserData },

  // Composition Api:

  setup(){
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(20);

    function changeAge(){
       age.value = 21;
    }

    provide('age', age);

    watch(age, function(newValue, oldValue){
      console.log("old value: " + oldValue);
      console.log("new value: " + newValue);
    });

    // const user2 = ref({
    //   name: 'abc',
    //   age: 18,
    // });

    // setTimeout(function(){
    //   user2.value.name = 'xyz';
    //   user2.value.age = 19;
    // }, 2000);

    // const user3 = reactive({
    //   name: 'pqr',
    //   age: 20,
    // });

    // setTimeout(function(){
    //   user3.name = 'mno';
    //   user3.age = 21;
    // }, 2000);

    // const user4 = reactive({
    //   name: 'jkl',
    //   age: 22,
    // });

    // setTimeout(function(){
    //   user4.name = 'stu';
    //   user4.age = 23;
    // }, 2000);

    // const refUser4 = toRefs(user4);

    return{
      firstName,
      lastName,
      age,
      changeAge,
      // user2,
      // user3,
      // uName: refUser4.name,
      // uAge: refUser4.age,
    };
  },
  
  // Options Api:
  
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>