<template>
  <div>
    <h2>Scanner Input</h2>
    <input
      v-model="serialNumber"
      @keydown.enter="handleScannerInput"
      placeholder="Scan barcode..."
    />
    <button @click="simulateScannerInput">Simulate Scanner</button>
    <p v-if="serialNumber">Serial Number: {{ serialNumber }}</p>
  </div>
</template>

<script>
export default {
  name:"salesPage",
  data() {
    return {
      serialNumber: ''
    };
  },
  methods: {
    handleScannerInput() {
      // Process scanned input
      console.log('Scanner input detected:', this.serialNumber);
      // Clear input after processing
      this.serialNumber = '';
    },
    simulateScannerInput() {
      // Simulate scanner input for demonstration
      // Replace this with actual scanner behavior
      this.serialNumber = 'F20MP1106001500';
      this.handleScannerInput();
    }
  }
};
</script>
