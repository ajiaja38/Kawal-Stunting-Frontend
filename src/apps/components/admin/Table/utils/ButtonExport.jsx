import React from 'react'
import SourceStuntingAPI from '../../../../api/resource/SourceStunting'

const ButtonExportData = () => {
  const handleDownload = async () => {
    try {
      const blob = await SourceStuntingAPI.downloadDataAnak()

      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `data_anak-${new Date().toISOString()}.xlsx`)
      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      URL.revokeObjectURL(url)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <button onClick={handleDownload} className='bg-main hover:bg-secondary active:bg-main transition-all ease-in-out text-white p-2 rounded-lg flex gap-1 justify-center items-center'>
      Export Data Excel
    </button>
  )
}

export default ButtonExportData
