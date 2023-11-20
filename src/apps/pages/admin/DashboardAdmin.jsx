import React, { useEffect } from 'react'
import Layout from './Layout'
import MapsStunting from '../../components/admin/Maps/MapsStunting'
import { useDispatch } from 'react-redux'
import { setDataMaps } from '../../redux/actions/actions'
import SourceStuntingAPI from '../../api/resource/SourceStunting'

const DashboardAdmin = () => {
  const dispatch = useDispatch()

  const dataMaps = async () => {
    try {
      const response = await SourceStuntingAPI.getAllDataLocation()
      dispatch(setDataMaps(response))
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    dataMaps()
  }, [])

  return (
    <Layout>
      <MapsStunting/>
    </Layout>
  )
}

export default DashboardAdmin
