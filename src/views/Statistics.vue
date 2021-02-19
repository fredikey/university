<template>
  <div class="container">
    <h2 class="title">Статистика</h2>
	  <GChart
		  type="LineChart"
		  :data="chartData"
		  :options="chartOptions"
	  />
  </div>
</template>

<script>
	import { GChart } from 'vue-google-charts'
	
export default {
	data () {
		return {
			// Array will be automatically processed with visualization.arrayToDataTable function
			chartData: [
				['days', 'Проценты'],
				['ПН', 10],
				['ВТ', 50],
				['СР', 65],
				['ЧТ', 55],
				['ПТ', 66],
				['СБ', 66],
				['ВС', 100],
				
			],
			chartOptions: {
				chart: {
					subtitle: 'Sales, Expenses, and Profit: 2014-2017',
				},
				legend: 'none',
				height: 500,
				vAxis: {minValue: 0, maxValue: 100, textStyle: {fontName: 'Montserrat'}, format: "#'%'"},
				hAxis: {textStyle: {fontName: 'Montserrat'}},
				tooltip: 'none'
			}
		}
	},
	components: {
		GChart
	}
}
</script>

<style scoped></style>
