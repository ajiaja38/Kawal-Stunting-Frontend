import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Data Kawal Stunting'
    }
  }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const data = {
  labels,
  datasets: [
    {
      label: 'Sehat',
      data: labels.map(() => faker.number.int({ min: 1000, max: 10000 })),
      borderColor: 'rgb(68, 119, 206)',
      backgroundColor: 'rgb(68, 119, 206, 0.5)',
      cubicInterpolationMode: 'monotone',
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Stunting',
      data: labels.map(() => faker.number.int({ min: 100, max: 10000 })),
      borderColor: 'rgb(252, 41, 71)',
      backgroundColor: 'rgb(252, 41, 71, 0.5)',
      cubicInterpolationMode: 'monotone',
      borderWidth: 1,
      fill: true
    }
  ]
}

const CommonChart = () => {
  return (
    <div className='grid grid-cols-2 gap-7 h-[33rem] justify-center items-center'>

      <div className='mb-5 p-5 flex justify-center items-center border w-full h-80 rounded-lg shadow-lg'>
        <Line options={options} data={data} />
      </div>

      <div className='mb-5 p-5 flex justify-center items-center border w-full h-80 rounded-lg shadow-lg'>
        <Bar options={options} data={data} />
      </div>

    </div>
  )
}

export default CommonChart
