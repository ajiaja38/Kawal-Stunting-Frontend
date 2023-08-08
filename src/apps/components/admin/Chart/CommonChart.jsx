import React, { useState } from 'react'
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

const CommonChart = () => {
  const [month, setMonth] = useState('Juli')

  const handleSelectedMonth = (e) => {
    const value = e.target.value
    setMonth(value)
  }

  const dataMonths = {
    juli: {
      target: [27, 20, 39, 33],
      tercapai: [5, 14, 9, 16]
    },
    agustus: {
      target: [63, 34, 45, 58],
      tercapai: [10, 20, 7, 21]
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Data Kawal Stunting 2023'
      }
    }
  }

  const optionsMonth = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `Data Kawal Stunting bulan ${month} 2023`
      }
    }
  }

  const labelMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const labels = ['Jelarai', 'Tanjung Agung', 'Salimbatu', 'Sekatak Bengara']

  const dataMonth = {
    labels: labelMonth,
    datasets: [
      {
        label: 'Target',
        data: [0, 0, 0, 0, 0, 0, 119, 150, 0, 0, 0, 0],
        borderColor: 'rgb(68, 119, 206)',
        backgroundColor: 'rgb(68, 119, 206, 0.5)',
        cubicInterpolationMode: 'monotone',
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Tercapai',
        data: [0, 0, 0, 0, 0, 0, 44, 50, 0, 0, 0, 0],
        borderColor: 'rgb(252, 41, 71)',
        backgroundColor: 'rgb(252, 41, 71, 0.5)',
        cubicInterpolationMode: 'monotone',
        borderWidth: 1,
        fill: true
      }
    ]
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Target',
        data: month === 'Agustus' ? dataMonths.agustus.target : dataMonths.juli.target,
        borderColor: 'rgb(68, 119, 206)',
        backgroundColor: 'rgb(68, 119, 206, 0.5)',
        cubicInterpolationMode: 'monotone',
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Tercapai',
        data: month === 'Agustus' ? dataMonths.agustus.tercapai : dataMonths.juli.tercapai,
        borderColor: 'rgb(252, 41, 71)',
        backgroundColor: 'rgb(252, 41, 71, 0.5)',
        cubicInterpolationMode: 'monotone',
        borderWidth: 1,
        fill: true
      }
    ]
  }

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='font-bold'>Pilih Bulan Survey</label>
        <select
          onChange={handleSelectedMonth}
          className='border outline-none p-2 shadow-md w-64 rounded-md'
        >
          <option>Juli</option>
          <option>Agustus</option>
        </select>
      </div>
      <div className='grid grid-cols-2 gap-7 h-[25rem] justify-center items-center'>

        <div className='mb-5 p-5 flex justify-center items-center border w-full h-80 rounded-lg shadow-lg'>
          <Line options={options} data={dataMonth} />
        </div>

        <div className='mb-5 p-5 flex justify-center items-center border w-full h-80 rounded-lg shadow-lg'>
          <Bar options={optionsMonth} data={data} />
        </div>

      </div>
    </div>
  )
}

export default CommonChart
