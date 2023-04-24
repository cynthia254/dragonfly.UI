<template>
  
  <div class="container" style="margin-top: 50px;">
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
        labels: [ 'Total Tickets', 'Escalated', 'Due Today','Overdue','Open','Completed Tickets','On Hold','Pending' ],
        datasets: [ { data: [60,40, 5, 30, 12,45,4,3, ] ,backgroundColor: ['lightblue', 'grey', 'yellow', 'red','blue','green','black','orange']} ],
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>