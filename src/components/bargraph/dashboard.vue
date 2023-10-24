<template>
  <div class="form-control" style="width:40%;border-style: none;margin-left: 30px;">
    <div style="margin-top: 50px; height: 100%; width: 100%" class="barchart">
      <button style="background:#FF8C22; font-size: 14px; color: white; margin-left: 550px; margin-top: -36px; font-family: inter; width: 200px; border-radius: 4px; font-family: inter; display: inline-flex; position: absolute; left: 15px; height: 40px !important; text-align: center;">
  <a href="/purchaseordered" style="border-style: none; color: white; text-decoration: none; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">View Purchase Orders</a>
</button>
<select
  v-model="selectedYear"
  @change="onYearSelected"
  style="background: white; font-size: 14px; color: black; margin-left: 10px; margin-top: -36px; font-family: inter; width: 100px; border-radius: 4px; font-family: inter; display: inline-flex; position: absolute; left: 15px; height: 30px !important; text-align: center;"
>
  <option value=""  selected>Select Year</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select>





  <Bar :options="chartOptions" :data="chartData" ref="chart"   />
</div>

  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import AppMixins from "../../Mixins/shared";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "BarChart",
  components: { Bar },
  mixins: [AppMixins],
  data() {
    return {
      selectedYear: new Date().getFullYear(), 
      allsuppliers: [],
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Total Delivered",
            backgroundColor: "orange",
            borderColor: "orange",
            borderWidth: 1,
            data:[], // Will contain totalDelivered values
          },
          {
            label: "Total Issued",
            backgroundColor: "red",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: [], // Will contain totalIssued values
          },
          {
            label: "Total Damaged",
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 1,
            data: [], // Will contain totalIssued values
          },
        ],
      },
      chartOptions: {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  onClick: (event, elements) => {
  if (elements && elements.length > 0) {
    const clickedIndex = elements[0].index;
    const datasetIndex = elements[0].datasetIndex;

  
    if (datasetIndex === 0) {
      // Clicked on "Total Delivered" bar
      this.pushPO(clickedIndex); // Pass the clickedIndex to pushPO
    }else if (datasetIndex === 1) {
      // Clicked on "Total Issued" bar
      this.IssuePush(clickedIndex);
    }
    else if (datasetIndex===2){
      this.DamagedPush(clickedIndex);
    }
  }
},

  // ...
  
},

    };
  },


  methods: {
    async onYearSelected() {
    console.log("Selected Year:", this.selectedYear);
    // Fetch data for the selected year and update the chart
    await this.GetAllSuppliers(this.selectedYear);
   
  },
  async pushPO(clickedIndex) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const selectedMonthName = this.chartData.labels[clickedIndex];
  const selectedMonthIndex = monthNames.indexOf(selectedMonthName);

  if (selectedMonthIndex !== -1) {
    // Month found in the array
    const year = parseInt(this.selectedYear);
    const month = selectedMonthIndex + 1; // Add 1 because months are 1-based
    console.log("Selected year and month is:", year, month);
    this.$router.push({
      path: `/delivereditemsin/${year}/${month}`,
      replace: true,
    });
  } else {
    console.error("Invalid month name:", selectedMonthName);
  }
},
async DamagedPush(clickedIndex) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const selectedMonthName = this.chartData.labels[clickedIndex];
  const selectedMonthIndex = monthNames.indexOf(selectedMonthName);

  if (selectedMonthIndex !== -1) {
    // Month found in the array
    const year = parseInt(this.selectedYear);
    const month = selectedMonthIndex + 1; // Add 1 because months are 1-based
    console.log("Selected year and month is:", year, month);
    this.$router.push({
      path: `/damageditemsin/${year}/${month}`,
      replace: true,
    });
  } else {
    console.error("Invalid month name:", selectedMonthName);
  }
},
async IssuePush(clickedIndex) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const selectedMonthName = this.chartData.labels[clickedIndex];
  const selectedMonthIndex = monthNames.indexOf(selectedMonthName);

  if (selectedMonthIndex !== -1) {
    // Month found in the array
    const year = parseInt(this.selectedYear);
    const month = selectedMonthIndex + 1; // Add 1 because months are 1-based
    console.log("Selected year and month is:", year, month);
    this.$router.push({
      path: `/issueditemsin/${year}/${month}`,
      replace: true,
    });
  } else {
    console.error("Invalid month name:", selectedMonthName);
  }
},



    async GetAllSuppliers() {
  try {
    const response = await this.GetAllMonthlyRecords(this.selectedYear);
    this.allsuppliers = response.body;
    console.log("getMontlyrecors per year",this.allsuppliers);

    // Initialize arrays for totalDelivered and totalIssued with zeros for all months
    const totalDelivered = Array(12).fill(0);
    const totalIssued = Array(12).fill(0);
    const totalDamaged = Array(12).fill(0);

    for (const data of response.body) {
      const monthIndex = data.month - 1; // Convert numeric month to array index
      totalDelivered[monthIndex] = data.totalDelivered;
      console.log("total delivered for month", data.month, ":", data.totalDelivered);
      totalIssued[monthIndex] = data.totalIssued;
      console.log("total issued for month", data.month, ":", data.totalIssued);
      totalDamaged[monthIndex] = data.totalDamaged;
      console.log("total damaged for month", data.month, ":", data.totalDamaged);

    }

    console.log("Total Delivered Array:", totalDelivered);
    console.log("Total Issued Array:", totalIssued);
    console.log("Total damaged Array:", totalDamaged);

    // Update chartData data properties directly
    this.chartData.datasets[0].data = totalDelivered;
    this.chartData.datasets[1].data = totalIssued;
    this.chartData.datasets[2].data = totalDamaged;

    console.log("chartData after update:", this.chartData);

    // Explicitly update the chart
    // Assuming you have a ref on the chart component
    // Trigger a chart update

  } catch (err) {
    console.error(err);
  }
},
  },
  created() {
    this.GetAllSuppliers();
    
  },
 // ...

// ...
watch: {
  chartData: {
    handler(newChartData) {
      if (this.$refs.chart) {
        // Access the Chart.js instance
        const chartInstance = this.$refs.chart.chart;

        if (chartInstance) {
          // Update the chart data and options
          chartInstance.data = newChartData;
          chartInstance.options = this.chartOptions;

          // Update the chart
          chartInstance.update();
        }
      }
    },
    deep: true, // Watch for changes in nested properties
  },
},

// ...


// ...

};
</script>

<style>
.barchart {
  height: 400px !important; /* Use !important to ensure this rule takes precedence */
}
</style>
