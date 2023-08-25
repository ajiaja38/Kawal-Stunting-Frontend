import React, { useEffect } from 'react'
import Layout from './Layout'
import MapsStunting from '../../components/admin/Maps/MapsStunting'
import { useDispatch } from 'react-redux'
import { setDataMaps } from '../../redux/actions/actions'
import SourceStuntingAPI from '../../api/resource/SourceStunting'
// import SourceRegion from '../../api/resource/SourceRegion'
// import FilterRegion from '../../components/admin/Filter/FilterRegion'
import jwtDecode from 'jwt-decode'

const DashboardAdmin = () => {
  // const [provinsi, setProvinsi] = useState([])
  // const [kota, setKota] = useState([])
  // const [kecamatan, setKecamatan] = useState([])
  // const [kelurahan, setKelurahan] = useState([])

  const dispatch = useDispatch()
  // const { selectedProvinsi } = useSelector((state) => state.data)
  // const { selectedKota } = useSelector((state) => state.data)
  // const { selectedKecamatan } = useSelector((state) => state.data)

  const token = localStorage.getItem('token')
  const { COMPANY_GUID } = jwtDecode(token)

  const dataMaps = async (guidCompany) => {
    try {
      const response = await SourceStuntingAPI.getDataForMaps(guidCompany)
      dispatch(setDataMaps(response))
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  // const getProvinsi = async () => {
  //   try {
  //     const response = await SourceRegion.getProvinsi()
  //     setProvinsi(response)
  //   } catch (error) {
  //     console.log(error.response.data.message)
  //   }
  // }

  // const getKota = async (provinsiId) => {
  //   try {
  //     const response = await SourceRegion.getKota(provinsiId)
  //     setKota(response)
  //   } catch (error) {
  //     console.log(error.response.data.message)
  //   }
  // }

  // const getKecamatan = async (kotaId) => {
  //   try {
  //     const response = await SourceRegion.getKecamatan(kotaId)
  //     setKecamatan(response)
  //   } catch (error) {
  //     console.log(error.response.data.message)
  //   }
  // }

  // const getKelurahan = async (kecamatanId) => {
  //   try {
  //     const response = await SourceRegion.getKelurahan(kecamatanId)
  //     setKelurahan(response)
  //   } catch (error) {
  //     console.log(error.response.data.message)
  //   }
  // }

  useEffect(() => {
    dataMaps(COMPANY_GUID)
  }, [dispatch, COMPANY_GUID])

  // useEffect(() => {
  //   getProvinsi()
  // }, [])

  // useEffect(() => {
  //   getKota(selectedProvinsi)
  // }, [selectedProvinsi])

  // useEffect(() => {
  //   getKecamatan(selectedKota)
  // }, [selectedKota])

  // useEffect(() => {
  //   getKelurahan(selectedKecamatan)
  // }, [selectedKecamatan])

  return (
    <Layout>
      {/* <FilterRegion
        provinsi={provinsi}
        kota={kota}
        kecamatan={kecamatan}
        kelurahan={kelurahan}
      /> */}
      <MapsStunting/>
    </Layout>
  )
}

export default DashboardAdmin
