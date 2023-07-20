<template>
  <div class="converter container">
  <div class="converter__primary-wrapper">
  <div class="converter__inner-wrapper">
  <div class="converter__wrapper">
      <label class="converter__label">Degrees</label>
      <input class="converter__input" type="number" v-model="number">
  </div>
  <div class="converter__wrapper">
      <label class="converter__label">Type</label>
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
      <input class="converter__input converter__input--result" type="number" v-model="result">
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
          this.result = ((this.number - 32) * 5/9).toFixed(2)
      }
      if (this.degree === 'Celsius' && this.number) {
        this.result = ((this.number * 9/5) + 32).toFixed(2)
      }
    }
  }
}
</script>

<style lang="scss">
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
    padding: 5px;
    margin: 10px;
  }

  &__input--result {
    border: none;
    outline: none;
  }
  
  &__input::-webkit-outer-spin-button,
  &__input::-webkit-inner-spin-button  {
    appearance: none;
  }

  &__label {
     padding-left: 10px;
     padding-top: 10px;
  }
  &__select {
    width: 100px;
    margin: 10px;
  }

  &__button {
    width: 60px;
    height: 30px;
    margin-top: 25px;
    text-align: center;
  }

}
</style>
