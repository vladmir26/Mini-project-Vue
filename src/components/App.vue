<script>

</script>

<template>
  <div class="converter container">
  <div class="converter__inner-wrapper">
      <label>Degrees</label>
      <input type="number">
      <label>Type</label>
      <select>
        <option>
          Fahrenheit
        </option>
        <option>
          Celsius
        </option>
      </select>
      <button type="button">Convert</button>
      <label>Result</label>
      <input type="number">
  </div>
  </div>
</template>

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

  &__inner-wrapper {
    width: 500px;
    height: 200px;
    background-color: white;
}

} 
</style>
