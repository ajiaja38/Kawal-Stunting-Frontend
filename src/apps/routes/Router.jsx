import React from 'react'
import {
  BrowserRouter as Routers,
  Routes,
  Route
} from 'react-router-dom'

import {
  DashboardAdmin,
  KartuPosyandu,
  LoginPage,
  Posyandu,
  NotAuthenticatedPage,
  DetailDataAnak,
  DataSurveyor,
  DataAnak,
  AddDataAnak,
  ProcessDataSurvey,
  GraphicPages
} from '../pages'
import RequireAuth from './utils/RequireAuth'

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/acces-denied' element={<NotAuthenticatedPage/>} />

        <Route element={<RequireAuth redirecPath='/acces-denied' />}>
          <Route path='/dashboard' element={<DashboardAdmin/>} />

          <Route path='/data-anak' element={<DataAnak/>} />
          <Route path='/data-anak/:id' element={<DetailDataAnak/>}/>
          <Route path='/data-anak/add' element={<AddDataAnak/>}/>

          <Route path='/data-surveyor' element={<DataSurveyor/>} />
          <Route path='/data-surveyor/process/:guidReport/:guidResult/:name' element={<ProcessDataSurvey/>}/>

          <Route path='/grafik' element={<GraphicPages/>} />

          <Route path='/posyandu' element={<Posyandu/>} />
          <Route path='/kartu-posyandu' element={<KartuPosyandu/>} />
        </Route>

      </Routes>
    </Routers>
  )
}

export default Router
