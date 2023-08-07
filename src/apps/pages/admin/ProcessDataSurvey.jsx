/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import FormProcessSurveyor from '../../components/admin/Form/FormProcessSurveyor'
import CardDataSurveyor from '../../components/admin/Card/CardDataSurveyor'
import { useParams } from 'react-router-dom'
import SourceSurveyor from '../../api/resource/SourceSurvey'

const ProcessDataSurvey = () => {
  const { guidReport, guidResult, name } = useParams()
  const [surveyor, setSurveyor] = useState({})
  const [child, setChild] = useState({})

  const getDataAnakAndSurveyor = async (GUID_REPORT, GUID_RESULT, NAME) => {
    try {
      const data = {
        GUID_REPORT,
        GUID_RESULT,
        NAME
      }
      const response = await SourceSurveyor.getDataAnakAndSurveyor(data)
      setSurveyor(response.survey)
      setChild(response.child)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    getDataAnakAndSurveyor(guidReport, guidResult, name)
  }, [guidReport, guidResult, name])

  return (
    <Layout>
      <div className='
        flex gap-8
      '>
        <FormProcessSurveyor
          child={child}
          guidReport={guidReport}
        />
        <CardDataSurveyor
          surveyor={surveyor}
        />
      </div>
    </Layout>
  )
}

export default ProcessDataSurvey
