import { useEffect, useState } from "react"
import axios from "axios"
import Chart from 'chart.js/auto';
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";


const URL = 'http://localhost:3001/'
export default function LampotilaTiedot() {
        //GLOBAL ANNUAL
    const [tietoga, setTietoga] = useState ( [])
    useEffect(() => {
        axios.get(URL + 'globalannual')
        .then((response) => {
            setTietoga(response.data)
        }).catch (error => {
            alert(error.response.data.error)
        })
    }, [])
    //GLOBAL MONTHLY
    const [tietogm, setTietogm] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'globalmonthly')
          .then((response) => {
              setTietogm(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
        //NORTHERN HEMISPHERE ANNUAL
      const [tietonha, setTietonha] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'northernhemispherenannual')
          .then((response) => {
              setTietonha(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
        //NORTHERN HEMISPHERE MONTHLY
      const [tietonhm, setTietonhm] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'northernhemispherenmonthly')
          .then((response) => {
              setTietonhm(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //SOUTHERN HEMISPHERE ANNUAL
      const [tietosha, setTietosha] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'southernhemispherenannual')
          .then((response) => {
              setTietosha(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
        //SOUTHERN HEMISPHERE MONTHLY
      const [tietoshm, setTietoshm] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'southernhemispherenmonthly')
          .then((response) => {
              setTietoshm(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //NORTHERN HEMISPHERE 2000 YEAR RECONSTRUCTION
      const [tietonh2000, setTietonh2000] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'northernhemisphere2000')
          .then((response) => {
              setTietonh2000(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])




  const data1 = {
    datasets: [
      {
        label: "Global annual",
        data: tietoga,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Temp",
        },
        pointRadius: 1,
      },
      {
        label: "Global monthly",
        data: tietogm,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Northern Hemisphere Annual",
        data: tietonha,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Northern Hemisphere Monthly",
        data: tietonhm,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Southern Hemisphere Annual",
        data: tietosha,
        borderWidth: 2,
        borderColor: "rgb(255, 0, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Southern Hemisphere Monthly",
        data: tietoshm,
        borderWidth: 2,
        borderColor: "rgb(255, 0, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Northern Hemisphere 2000 year reconstruction",
        data: tietonh2000,
        hidden: true,
        borderWidth: 2,
        borderColor: "rgb(256, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },

    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature anomalies from January 1850 onwards",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
      yAxis: {
        type: "linear",
      },
    },
  };

    return (

             <div style={{ width: "1200px" }}>
            <h3>Testidata</h3>
            
            <Line options={options} data={data1}/>
            
         
        
        
        </div>
    );
}
    