<template>
  
  <div class="" style="margin-top: 50px;height:70%;width:60%;">
  <Bar
    
    :options="chartOptions"
    :data="chartData"
  />
  </div>
 
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July","Aug","Sept","Oct","Nov","Dec"],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 17, 28, 24, 7,12,6,40,23,12],
      backgroundColor: "rgba(255,0,0,1)"
    }, {
      label: 'Purchases',
      data: [30, 29, 5, 5, 20, 3, 10,3,45,65,6,12],
      backgroundColor: "orange"
    }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>