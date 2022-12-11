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
        label: "Vuosittainen globaali",
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
        label: "Kuukausittainen globaali",
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
        label: "Vuosittainen Pohjoinen pallonpuolisko",
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
        label: "Kuukausittainen Pohjoinen pallonpuolisko",
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
        label: "Vuosittainen Eteläinen pallonpuolisko",
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
        label: "Kuukausittainen Eteläinen pallonpuolisko",
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
        label: "Pohjoisen pallonpuoliskon 2000 vuoden rekonstruktio",
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
        label: "Mauna Loan vuosittainen CO2 miljoonasosa",
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
        label: "Mauna Loan kuukausittainen CO2 miljoonasosa",
        data: tietomlm,
        borderWidth: 2,
        borderColor: "rgb(255, 255, 0)",
        parsing: {
          xAxisKey: "COL 1",
          yAxisKey: "COL 2",
        },
        pointRadius: 1,
      },
      {
        label: "Antarktican jääkairausmittaus CO2 miljoonasosa ~ 1000 vuodelta",
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
      {
        label: "Jääkairaus DE08 mittaukset",
        data: tietoant,
        hidden: true,
        borderWidth: 2,
        borderColor: "rgb(255, 0, 0)",
        parsing: {
          xAxisKey: "COL 3",
          yAxisKey: "COL 4",
        },
        pointRadius: 1,
      },
      {
        label: "Jääkairaus DE08-2 mittaukset",
        data: tietoant,
        hidden: true,
        borderWidth: 2,
        borderColor: "rgb(0, 255, 0)",
        parsing: {
          xAxisKey: "COL 5",
          yAxisKey: "COL 6",
        },
        pointRadius: 1,
      },
      // V10
      {
        label: "Ihmiskunnan historian tapahtumia",
        data: tietoant,
        hidden: true,
       // drawLine: false,
        pointBorderColor: "rgb(0, 255, 0)",
       parsing: {
          xAxisKey: "COL 7",
          yAxisKey: "COL 8",
      },

       //  pointRadius: 5,

     /*  annotation:{
        annotations:{
          History:{
            data: tietoant,
            xValue: "COL 7",
            yValue: "COL 8",
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
          }
        }
       }*/
      },
    ],
  };

  const data3 = {
    datasets: [
      {
        label: "Vostokin jääkairaus CO2 mittaus",
        data: tietovic,
        borderWidth: 3,
        borderColor: "rgb(25, 8, 160)",
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
        label: "Jääkairausmittaukset CO2 tasoista 800 tuhannelta vuodelta",
        data: tietoicy,
        borderWidth: 2,
        borderColor: "rgb(232, 45, 20)",
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
        label: "Lämpötilan muutos",
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
        label: "CO2 Pitoisuus",
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
        text: "Lämpötilapoikkeuksia tammikuusta 1850 eteenpäin",
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
        text: "CO2 mittauksia Mauna Loasta ja Antarkticalta",
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
        text: "Vostokin jääkairausmittaus CO2 tasoista 417160 - 2342 vuosilta ",
      },
    },
    scales: {
      xAxis: {
        min:2100,
        max:418000,
        reverse:true,
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
        text: "Etelämantereen jääkairauksen mittauksien CO2 tasot 800 tuhannelta vuodelta",
      },
    },
    scales: {
      xAxis: {
        min:-100,
        max:810000,
        reverse:true,
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
        text: "Maailman lämpötilan evoluutio kahdelta miljoonalta vuodelta",
      },
    },
    scales: {
   
      x: {
        reverse:true,
        type: "linear",
        min:1000,
        max:2000000,

      },
      temp: {

       type: 'linear',
        position:'left',

      },
      co2:{
        beginAtZero:true,
        type: 'linear',
        
       position:'right',

      }
    },
  };

    return (

             <div style={{ width: "1200px" }}>
            <h3>(1) Lämpötilatiedot</h3>
            <div>
            <Line options={options1} data={data1}/>
            <hr/>
            <p>Tässä kuvaajassa piirretään lämpötilapoikkeuksia ja -mittauksia eri puolilta maapalloa.</p>
            <div>
            </div>
            <div>
            <b>(1.1)</b> 
            <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/"> Linkki lämpötilamittauksien dataan</a>
            </div>
            <div>
            <b>(1.2)</b> 
            <a href="https://www.nature.com/articles/nature03265"> Linkki tutkimukseen 2000 vuoden lämpötilarekonstruktiosta</a>
            </div>
            <hr/>
            </div>
            <div class="tila">
            <h3>(2) Hiilidioksidipitoisuudet</h3>
            <Line options={options2} data={data2}/>
            <hr/>
            <div>
            Tässä kuvaajassa piirretään ilman hiilidioksidipitoisuuksia mitattuina Mauna Loalta ja Antarkticalta.
            Mittaukset Mauna Loalta otettiin noin 3400 metrin korkeudella ilmamassasta ja ne kuvaavat vuosia 1958-2022, kun taas Antarktican mittaukset kuvaavat vuosia 1010-1975 ja ne toteuttiin jääkairauksilla
            </div>
            <b>(2.1)</b>
            <a href="https://gml.noaa.gov/ccgg/trends/data.html"> Linkki Mauna Loan hiilidioksididataan</a>
            <div>
            <b>(2.1)</b>
            <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"> Linkki hiilidioksidimittaustutkimuksen kuvaukseen</a>
            </div>
            
            <b>(2.2)</b>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat"> Linkki Antarktican jääkairauksen mittausdataan</a>
            
            
            <div>
            <b>(2.2)</b>
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html"> Linkki Antarktican jääkairauksen mittauksien kuvaukseen</a>
            </div>
            </div>
            <hr/>
            <div class="tila">
              <h3>(3) Jääkairausmittaukset</h3>
            <Line options={options3} data={data3}/>
            <hr/>
            <div>
            
              Tässä kuvaajassa piirretään Vostokin jääkairauksista saaduista CO2 arvoista vuosilta -417160 - 2342
              </div>
              <div>
              <b>(3.1)</b>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2"> Linkki Vostokin jääkairauksen mittausdataan</a>
            </div>
            <b>(3.1)</b>
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html"> Linkki Vostokin jääkairauksen mittauksien kuvauksiin</a>
            </div>
            <hr/>
            <div class="tila">
            <Line options={options4} data={data4}/>
            <hr/>
              Tässä kuvaajassa piirretään etelämantereella tehdyistä jääkairauksista saaduista hiilidioksidiarvoista käyrät noin 800 tuhannen vuoden ajalta
              <div>
              <b>(3.2)</b>
            <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt"> Linkki etelämantereen jääkairauksen mittausdataan</a>
            </div>
            <b>(3.2)</b>
            <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975"> Linkki etelämantereen jääkairauksen mittauksien kuvauksiin</a>
            </div>
            <hr/>
            <h3>Hiilidioksidipitoisuuden ja lämpötilan muutoksia</h3>
            <div class="tila">
            <Line options={options5} data={data5}/>
            <hr/>
            Tässä kuvaajassa piirretään lämpötilan muutokset n. 2 miljoonan vuoden ajalta ja hiilidioksidipitoisuuden muutoksia n. 800 tuhannen vuoden ajalta
            <div>
            <b>(3.3)</b>
            <a href="http://carolynsnyder.com/publications.php"> Linkki lämpötilan ja hiilidioksidipitoisuuksien muutoksien dataan</a>
            </div>
            <b>(3.3)</b>
            <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf"> Linkki lämpötilan ja hiilidioksidipitoisuuksien muutoksien datan/tutkimuksen kuvaukseen</a>
            <hr/>
            </div>
            <div>
              
               <p class="i"><b>(1.1)</b> Morice, C.P., J.J. Kennedy, N.A. Rayner, J.P. Winn, E. Hogan, R.E. Killick, R.J.H. Dunn, T.J. Osborn, P.D. Jones and I.R. Simpson (in press) An updated assessment of near-surface temperature change from 1850: the HadCRUT5 dataset. Journal of Geophysical Research (Atmospheres) doi:10.1029/2019JD032361</p> Test
              
            </div>
            <div>
              
               <p class="i"><b>(1.2)</b> Anders Moberg, Dmitry M. Sonechkin, Karin Holmgren, Nina M. Datsenko, Wibjörn Karlén (2005) 2,000-Year Northern Hemisphere Temperature Reconstruction. IGBP PAGES/World Data Center for Paleoclimatology Data Contribution Series # 2005-019. NOAA/NGDC Paleoclimatology Program, Boulder CO, USA. </p>
              
            </div>
            <div>
              
               <p class="i"><b>(2.1)</b> Dr. Pieter Tans, NOAA/GML (gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (scrippsco2.ucsd.edu/).</p>

            </div>
            <div>
              
               <p class="i"><b>(2.2)</b> D.M. Etheridge, L.P. Steele, R.L. Langenfelds, R.J. Francey, J.-M. Barnola and V.I. Morgan. 1998. Historical CO2 records from the Law Dome DE08, DE08-2, and DSS ice cores. In Trends: A Compendium of Data on Global Change. Carbon Dioxide Information Analysis Center, Oak Ridge National Laboratory, U.S. Department of Energy, Oak Ridge, Tenn., U.S.A</p>
            
            </div>
            <div>
              
               <p class="i"><b>(3.1)</b> Barnola, J.-M., D. Raynaud, C. Lorius, and N.I. Barkov. 2003. Historical CO2 record from the Vostok ice core. In Trends: A Compendium of Data on Global Change. Carbon Dioxide Information Analysis Center, Oak Ridge National Laboratory, U.S. Department of Energy, Oak Ridge, Tenn., U.S.A.</p>
            
            </div>
            <div>
              
               <p class="i"><b>(3.2)</b> Bereiter, B., S. Eggleston, J. Schmitt, C. Nehrbass-Ahles, T. F. Stocker, H. Fischer, S. Kipfstuhl, J. Chappellaz. 2015. Revision of the EPICA Dome C CO2 record from 800 to 600 kyr before present. Geophysical Research Letters, 42(2), 542-549. doi: 10.1002/2014GL061957</p>
            
            </div>
            
            <div class="pohja">
              
               <p class="i"><b>(3.3)</b> Snyder, C. Evolution of global temperature over the past two million years. Nature 538, 226–228 (2016). https://doi.org/10.1038/nature19798</p>
            
            </div>
        </div>
    );
}
    