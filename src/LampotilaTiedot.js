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
      //MAUNALOACO2ANNUAL
      const [tietomla, setTietomla] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'maunaloaannual')
          .then((response) => {
              setTietomla(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //MAUNALOACO2MONTHLY
      const [tietomlm, setTietomlm] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'maunaloamonthly')
          .then((response) => {
              setTietomlm(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //ANTARCTICADATA
      const [tietoant, setTietoant] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'antarcticadata')
          .then((response) => {
              setTietoant(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //VOSTOKICECORECO2
      const [tietovic, setTietovic] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'vostokicecoreco2')
          .then((response) => {
              setTietovic(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //ICECORE800kYEARCOMPOSITESTUDY
      const [tietoicy, setTietoicy] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'icecore800kcompositestudy')
          .then((response) => {
              setTietoicy(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //EVOLUTIONOFGLOBALTEMPERATURE
      const [tietoeog, setTietoeog] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'evolutionofglobal')
          .then((response) => {
              setTietoeog(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      //EVOLUTIONOFGLOBALTEMPERATURECO2
      const [tietoeog2, setTietoeog2] = useState ( [])
      useEffect(() => {
          axios.get(URL + 'evolutionofglobalco2')
          .then((response) => {
              setTietoeog2(response.data)
          }).catch (error => {
              alert(error.response.data.error)
          })
      }, [])
      




// V1 & V2 VISUALISOINNIT
  const data1 = {
    datasets: [
      {
        label: "Global annual",
        data: tietoga,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
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
  //V3 & V4 VISUALISOINNIT
  const data2 = {
    datasets: [
      {
        label: "Mauna Loa CO2 PPM Annual",
        data: tietomla,
        borderWidth: 2,
        borderColor: "rgb(256, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Mauna Loa CO2 PPM Monthly",
        data: tietomlm,
        borderWidth: 2,
        borderColor: "rgb(0, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Antarctica CO2 PPM ~ 1000 year data",
        data: tietoant,
        hidden: true,
        borderWidth: 2,
        borderColor: "rgb(50, 50, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      

    ],
  };
  //V5
  const data3 = {
    datasets: [
      {
        label: "Vostok Ice Core CO2",
        data: tietovic,
        borderWidth: 3,
        borderColor: "rgb(256, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      
      

    ],
  };
  //V6
  const data4 = {
    datasets: [
      {
        label: "Ice Core 800k Year Composite Study",
        data: tietoicy,
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
  //V7
  const data5 = {
    datasets: [
      {
        label: "Temp",
        data: tietoeog,
        borderWidth: 2,
        borderColor: "rgb(256, 0, 256)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
          yAxisID: 'temp',
        },
        pointRadius: 1,
      },
      {
        label: "co2",
        data: tietoeog2,
        borderWidth: 2,
        borderColor: "rgb(255, 0, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
          yAxisID: 'co2',
        },
        pointRadius: 1,
      },
      
     
      
      

    ],
  };
  const options1 = {
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
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CO2 measurements from Mauna Loa and Antarctica",
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
  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vostok Ice Core CO2 measurements, 417160 - 2342 years ",
      },
    },
    scales: {
      x: {
        type: "linear",
        
      },
      yAxis: {
        type: "linear",
      },
    },
  };
  const options4 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ice core 800k year composite study CO2 measurements ",
      },
    },
    scales: {
      x: {
        type: "linear",
        
      },
      yAxis: {
        type: "linear",
      },
    },
  };
  const options5 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Evolution of global temperature over the past two million years",
      },
    },
    scales: {
      x: {
        type: "linear",
        

      },
      temp: {
        type: "linear",
        display:true,
        position:'right',

      },
      co2:{
        type: "linear",
        display:true,
        position:'left',
      }
    },
  };

    return (

             <div style={{ width: "1200px" }}>
            <h3>Lämpötilatiedot</h3>
            <div>
            <Line options={options1} data={data1}/>
            </div>
            <div class="tila">
            <h3>Hiilidioksidipitoisuudet</h3>
            <Line options={options2} data={data2}/>
            </div>
            <div class="tila">
            <Line options={options3} data={data3}/>
            </div>
            <div class="tila">
            <Line options={options4} data={data4}/>
            </div>
            <div class="tila">
            <Line options={options5} data={data5}/>
            </div>
            
            
        </div>
    );
}
    