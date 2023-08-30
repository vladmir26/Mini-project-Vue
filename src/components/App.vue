<template>
  <div class="converter container">
  <div class="converter__primary-wrapper">
  <div class="converter__inner-wrapper">
  <div class="converter__wrapper">
      <label class="converter__label">Degrees</label>
      <input class="converter__input" type="number" v-model="number">
  </div>
  <div class="converter__wrapper">
      <label class="converter__label converter__label-select">Type</label>
      <select class="converter__select" v-model="degree">
        <option>
          Fahrenheit
        </option>
        <option>
          Celsius
        </option>
      </select>
  </div>
      <button class="converter__button" type="button" @click="ConvertDegrees">Convert</button>
  </div>
  <div class="converter__wrapper">
      <label class="converter__label">Result</label>
      <input class="converter__input converter__input--result" v-model="result" disabled>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '',
      degree: '',
      result: ''
    }
  }, 
  methods: {
    ConvertDegrees() {
      if (this.degree === 'Fahrenheit' && this.number) {
          this.result = (((this.number - 32) * 5/9).toFixed(2)) + ' °C';
          
      }
      if (this.degree === 'Celsius' && this.number) {
        this.result = ((this.number * 9/5) + 32).toFixed(2) + ' °F';
      }
    }
  }
}
</script>

<style lang="scss">
* {
   box-sizing: border-box;
}

body {
  background-color: lightgrey;
}

.container {
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
}
.converter {
  display: flex;
  justify-content: center;
  align-items: center;

  &__primary-wrapper {
    width: 500px;
    height: 200px;
    background-color: white;
    padding: 20px;
  }

  &__inner-wrapper {
    display: flex;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__input {
    width: 70px;
    height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px 0 10px 10px;
  }

  &__input--result {
    color: black;
    border: none;
    height: 30px;
    outline: none;
    font-weight: bold;
  }
  
  &__input::-webkit-outer-spin-button,
  &__input::-webkit-inner-spin-button  {
    appearance: none;
  }

  &__label {
     padding-left: 10px;
     padding-top: 10px;
     color: black;
  }

  &__label-select {
     padding-left: 20px;
  }

  &__select {
    width: 100px;
    margin: 10px 20px 10px 20px;
    height: 30px;
  }

  &__button {
    background-color: blue;
    color: #fff;
    width: 60px;
    height: 30px;
    margin-top: 35px;
    text-align: center;
    border: none;
    border-radius: 10%;
  }

}
</style>
