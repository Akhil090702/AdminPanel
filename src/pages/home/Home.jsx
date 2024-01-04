import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Piechart from "../../components/piechart/Piechart"
import Sales from "../../components/sales/Sales"
import Queries from "../../components/queries/Queries"
import Table from "../../components/table/Table"

const home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="Homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="impression" />
          <Widget type="total" />
          <Widget type="engagement" />
          <Widget type="engaged" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="chartinfo">
          <Piechart />
          <Sales />
          <Queries />
        </div>
        <div className="tableinfo">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default home
