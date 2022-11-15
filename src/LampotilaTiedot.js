import { useEffect, useState } from "react"
import axios from "axios"
import Chart from 'chart.js/auto';
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";


const URL = 'http://localhost:3001/'
export default function LampotilaTiedot() {
    const [tietoga, setTietoga] = useState ( [])
    useEffect(() => {
        axios.get(URL + 'globalannual')
        .then((response) => {
            setTietoga(response.data)
        }).catch (error => {
            alert(error.response.data.error)
        })
    }, [])




    const data = {
        datasets : [
            {
            label: "Temperature Global Annual",
            data: [tietoga],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "Temp",
        parsing: {
            xAxisKey: "Time",
            yAxisKey: "Temp",
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
        text: "Global Annual Graph Test",
      },
    },
    scales: {

      Temp: {
        type: "linear",
      },
    },
  };

    return (

             <div style={{ width: "1000px" }}>
            <h3>Testidata</h3>
            
            <Line options={options} data={data}/>
         
        
        
        </div>
    );
}
    