import { useEffect, useState } from "react"
import axios from "axios"
import Chart from 'chart.js/auto';
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";





export default function PaastoLahteet() {


const URL = 'http://localhost:3001/'


    const [tietoebc, setTietoebc] = useState ( [])
    useEffect(() => {
        axios.get(URL + 'emissionbycountry1')
        .then((response) => {
            setTietoebc(response.data)
        }).catch (error => {
            alert(error.response.data.error)
        })
    }, [])

    const [tietoebc2, setTietoebc2] = useState ( [])
    useEffect(() => {
        axios.get(URL + 'emissionbycountry2')
        .then((response) => {
            setTietoebc2(response.data)
        }).catch (error => {
            alert(error.response.data.error)
        })
    }, [])

    const dataebc = {
        padding: "4",
        datasets: [
          {
            label: "Afghanistan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 2",
            },
            pointRadius: 1,
          }, 
          {
            label: "Albania",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(158, 64, 23)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 3",
            },
            pointRadius: 1,
          }, 
          {
            label: "Algeria",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(224, 244, 4)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 4",
            },
            pointRadius: 1,
          }, 
          {
            label: "Andorra",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(181, 144, 163)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 5",
            },
            pointRadius: 1,
          }, 
          {
            label: "Angola",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(140, 131, 11)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 6",
            },
            pointRadius: 1,
          },
          {
            label: "Anguilla",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(53, 14, 22)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 7",
            },
            pointRadius: 1,
          },
          {
            label: "Antigua and Barbuda",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(81, 24, 55)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 8",
            },
            pointRadius: 1,
          },
          {
            label: "Argentina",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(134, 100, 209)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 9",
            },
            pointRadius: 1,
          },
          {
            label: "Armenia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(84, 145, 5)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 10",
            },
            pointRadius: 1,
          },
          {
            label: "Aruba",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(33, 164, 211)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 11",
            },
            pointRadius: 1,
          },
          {
            label: "Australia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(55, 158, 70)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 12",
            },
            pointRadius: 1,
          },
          {
            label: "Austria",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(100, 219, 146)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 13",
            },
            pointRadius: 1,
          },
          {
            label: "Azerbaijan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(89, 242, 209)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 14",
            },
            pointRadius: 1,
          },
          {
            label: "Bahamas",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(28, 73, 8)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 15",
            },
            pointRadius: 1,
          },
          {
            label: "Bahrain",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(255, 193, 25)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 16",
            },
            pointRadius: 1,
          },
          {
            label: "Bangladesh",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(249, 22, 246)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 17",
            },
            pointRadius: 1,
          },
          {
            label: "Barbados",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(158, 74, 152)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 18",
            },
            pointRadius: 1,
          },
          {
            label: "Belarus",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(90, 255, 81)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 19",
            },
            pointRadius: 1,
          },
          {
            label: "Belgium",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(27, 59, 173)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 20",
            },
            pointRadius: 1,
          },
          {
            label: "Belize",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(163, 83, 160)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 21",
            },
            pointRadius: 1,
          },
          {
            label: "Benin",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(34, 121, 155)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 22",
            },
            pointRadius: 1,
          },
          {
            label: "Bermuda",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(58, 173, 158)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 23",
            },
            pointRadius: 1,
          },
          {
            label: "Bhutan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(28, 35, 140)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 24",
            },
            pointRadius: 1,
          },
          {
            label: "Bonaire, Saint Eustatius and Saba",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(206, 70, 102)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 25",
            },
            pointRadius: 1,
          },
          {
            label: "Bosnia and Herzegovina",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(161, 35, 224)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 26",
            },
            pointRadius: 1,
          },
          {
            label: "Botswana",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(175, 149, 33)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 27",
            },
            pointRadius: 1,
          },
          {
            label: "Brazil",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(104, 194, 221)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 28",
            },
            pointRadius: 1,
          },
          {
            label: "British Virgin Islands",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(12, 97, 112)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 29",
            },
            pointRadius: 1,
          },
          {
            label: "Brunei Darussalam",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(119, 44, 11)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 30",
            },
            pointRadius: 1,
          },
          {
            label: "Bulgaria",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(242, 111, 4)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 31",
            },
            pointRadius: 1,
          },
          {
            label: "Burkina Faso",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(54, 7, 79)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 32",
            },
            pointRadius: 1,
          },
          {
            label: "Burundi",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(242, 43, 113)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 33",
            },
            pointRadius: 1,
          },
          {
            label: "Cambodia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(171, 232, 242)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 34",
            },
            pointRadius: 1,
          },
          {
            label: "Canada",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(114, 126, 216)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 35",
            },
            pointRadius: 1,
          },
          {
            label: "Cape Verde",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(33, 6, 68)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 36",
            },
            pointRadius: 1,
          },
          {
            label: "Central African Republic",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(134, 36, 145)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 37",
            },
            pointRadius: 1,
          },
          {
            label: "Chad",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(8, 214, 203)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 38",
            },
            pointRadius: 1,
          },
          {
            label: "Chile",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(124, 57, 91)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 39",
            },
            pointRadius: 1,
          },
          {
            label: "China",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(226, 102, 206)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 40",
            },
            pointRadius: 1,
          },
          {
            label: "Colombia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(99, 126, 168)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 41",
            },
            pointRadius: 1,
          },
          {
            label: "Comoros",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(110, 150, 30)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 42",
            },
            pointRadius: 1,
          },
          {
            label: "Congo",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(103, 255, 33)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 43",
            },
            pointRadius: 1,
          },
          {
            label: "Cook Islands",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(18, 4, 68)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 44",
            },
            pointRadius: 1,
          },
          {
            label: "Costa Rica",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(242, 58, 144)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 45",
            },
            pointRadius: 1,
          },
          {
            label: "Côte d'Ivoire",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(11, 198, 7)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 46",
            },
            pointRadius: 1,
          },
          {
            label: "Croatia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(173, 12, 159)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 47",
            },
            pointRadius: 1,
          },
          {
            label: "Cuba",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(138, 160, 117)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 48",
            },
            pointRadius: 1,
          },
          {
            label: "Curaçaoa",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(86, 28, 119)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 49",
            },
            pointRadius: 1,
          },
          {
            label: "Cyprus",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 50",
            },
            pointRadius: 1,
          },
          {
            label: "Czech Republic",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(127, 31, 117)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 51",
            },
            pointRadius: 1,
          },
          {
            label: "North Korea",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(29, 114, 55)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 52",
            },
            pointRadius: 1,
          },
          {
            label: "Democratic Republic of the Congo",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(30, 9, 38)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 53",
            },
            pointRadius: 1,
          },
          {
            label: "Denmark",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(68, 52, 10)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 54",
            },
            pointRadius: 1,
          },
          {
            label: "Djibouti",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(178, 91, 67)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 55",
            },
            pointRadius: 1,
          },
          {
            label: "Dominica",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 56",
            },
            pointRadius: 1,
          },
          {
            label: "Dominican Republic",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(16, 53, 237)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 57",
            },
            pointRadius: 1,
          },
          {
            label: "Ecuador",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(62, 143, 193)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 58",
            },
            pointRadius: 1,
          },
          {
            label: "Egypt",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(132, 160, 38)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 59",
            },
            pointRadius: 1,
          },
          {
            label: "El Salvador",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(160, 42, 12)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 60",
            },
            pointRadius: 1,
          },
          {
            label: "Equatorial Guinea",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(168, 79, 117)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 61",
            },
            pointRadius: 1,
          },
          {
            label: "Eritrea",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(178, 193, 36)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 62",
            },
            pointRadius: 1,
          },
          {
            label: "Estonia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(92, 0, 107)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 63",
            },
            pointRadius: 1,
          },
          {
            label: "Ethiopia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(134, 168, 232)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 64",
            },
            pointRadius: 1,
          },
          {
            label: "Faeroe Islands",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(229, 4, 53)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 65",
            },
            pointRadius: 1,
          },
          {
            label: "Micronesia (Federated States of)",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(84, 130, 41)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 66",
            },
            pointRadius: 1,
          },
          {
            label: "Fiji",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(74, 15, 122)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 67",
            },
            pointRadius: 1,
          },
          {
            label: "Finland",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(35, 160, 75)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 68",
            },
            pointRadius: 1,
          },
          {
            label: "France",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(33, 221, 165)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 69",
            },
            pointRadius: 1,
          },
          {
            label: "French Guiana",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(91, 255, 230)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 70",
            },
            pointRadius: 1,
          },
          {
            label: "French Polynesia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(91, 255, 230)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 71",
            },
            pointRadius: 1,
          },
          {
            label: "Gabon",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(29, 20, 127)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 72",
            },
            pointRadius: 1,
          },
          {
            label: "Gambia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(216, 39, 89)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 73",
            },
            pointRadius: 1,
          },
          {
            label: "Georgia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(45, 173, 111)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 74",
            },
            pointRadius: 1,
          },
          {
            label: "Germany",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(216, 242, 205)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 75",
            },
            pointRadius: 1,
          },
          {
            label: "Ghana",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(7, 193, 134)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 76",
            },
            pointRadius: 1,
          },
          {
            label: "Greece",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(114, 27, 98)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 77",
            },
            pointRadius: 1,
          },
          {
            label: "Greenland",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(175, 107, 170)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 78",
            },
            pointRadius: 1,
          },
          {
            label: "Grenada",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(18, 12, 56)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 79",
            },
            pointRadius: 1,
          },
          {
            label: "Guadeloupe",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(125, 75, 183)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 80",
            },
            pointRadius: 1,
          },
          {
            label: "Guatemala",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(21, 69, 99)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 81",
            },
            pointRadius: 1,
          },
          {
            label: "Guinea",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 82",
            },
            pointRadius: 1,
          },
          {
            label: "Guinea-Bissau",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 83",
            },
            pointRadius: 1,
          },
          {
            label: "Guyana",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(3, 61, 1)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 84",
            },
            pointRadius: 1,
          },
          {
            label: "Haiti",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(255, 10, 250)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 85",
            },
            pointRadius: 1,
          },
          {
            label: "Honduras",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(175, 140, 22)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 86",
            },
            pointRadius: 1,
          },
          {
            label: "Hong Kong",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 87",
            },
            pointRadius: 1,
          },
          {
            label: "Hungary",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(41, 247, 22)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 88",
            },
            pointRadius: 1,
          },
          {
            label: "Iceland",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(24, 102, 99)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 89",
            },
            pointRadius: 1,
          },
          {
            label: "India",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(55, 122, 74)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 90",
            },
            pointRadius: 1,
          },
          {
            label: "Indonesia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(155, 31, 20)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 91",
            },
            pointRadius: 1,
          },
          {
            label: "Iraq",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(168, 42, 61)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 92",
            },
            pointRadius: 1,
          },
          {
            label: "Ireland",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(133, 78, 201)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 93",
            },
            pointRadius: 1,
          },
          {
            label: "Iran",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(58, 46, 6)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 94",
            },
            pointRadius: 1,
          },
          {
            label: "Israel",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(13, 189, 229)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 95",
            },
            pointRadius: 1,
          },
          {
            label: "Italy",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(46, 96, 26)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 96",
            },
            pointRadius: 1,
          },
          {
            label: "Jamaica",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(35, 28, 45)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 97",
            },
            pointRadius: 1,
          },
          {
            label: "Japan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(124, 42, 104)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 98",
            },
            pointRadius: 1,
          },
          {
            label: "Jordan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(141, 206, 10)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 99",
            },
            pointRadius: 1,
          },
          {
            label: "Kazakhstan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(209, 237, 26)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 100",
            },
            pointRadius: 1,
          },
          {
            label: "Kenya",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(60, 21, 132)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 101",
            },
            pointRadius: 1,
          },
          {
            label: "Kiribati",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(43, 14, 11)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 102",
            },
            pointRadius: 1,
          },
          {
            label: "Kosovo",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(29, 26, 158)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 103",
            },
            pointRadius: 1,
          },
          {
            label: "Kuwait",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(29, 26, 158)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 104",
            },
            pointRadius: 1,
          },
          {
            label: "Kyrgyzstan",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(29, 26, 158)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 105",
            },
            pointRadius: 1,
          },
          {
            label: "Laos",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(226, 122, 18)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 106",
            },
            pointRadius: 1,
          },
          {
            label: "Latvia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(206, 53, 130)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 107",
            },
            pointRadius: 1,
          },
          {
            label: "Lebanon",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(102, 89, 42)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 108",
            },
            pointRadius: 1,
          },
          {
            label: "Lesotho",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(237, 143, 106)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 109",
            },
            pointRadius: 1,
          },
          {
            label: "Liberia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(239, 38, 88)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 110",
            },
            pointRadius: 1,
          },
          {
            label: "Libya",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(81, 4, 16)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 111",
            },
            pointRadius: 1,
          },
          {
            label: "Liechtenstein",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(19, 10, 28)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 112",
            },
            pointRadius: 1,
          },
          {
            label: "Lithuania",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(20, 65, 66)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 113",
            },
            pointRadius: 1,
          },
          {
            label: "Luxembourg",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(135, 80, 63)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 114",
            },
            pointRadius: 1,
          },
          {
            label: "Macao",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(256, 0, 256)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 115",
            },
            pointRadius: 1,
          },
          {
            label: "North Macedonia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(71, 145, 76)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 116",
            },
            pointRadius: 1,
          },
          {
            label: "Madagascar",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(58, 112, 39)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 117",
            },
            pointRadius: 1,
          },
          {
            label: "Malawi",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(234, 93, 180)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 118",
            },
            pointRadius: 1,
          },
          {
            label: "Malaysia",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(87, 10, 107)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 119",
            },
            pointRadius: 1,
          },
          {
            label: "Maldives",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(11, 11, 79)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 120",
            },
            pointRadius: 1,
          },
          {
            label: "Mali",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(0, 143, 239)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 121",
            },
            pointRadius: 1,
          },
          {
            label: "Malta",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(21, 35, 24)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 122",
            },
            pointRadius: 1,
          },
          {
            label: "Marshall Islands",
            data: tietoebc,
            borderWidth: 3,
            borderColor: "rgb(36, 38, 34)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 123",
            },
            pointRadius: 1,
          },
                                        /* DATABASE VAIHTUU EMISSIONBYCOUNTRY1 -> EMISSIONBYCOUNTRY2 */

          {
            label: "Martinique",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(134, 196, 49)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 2",

            },
            pointRadius: 1,
          },

{
            label: "Mauritania",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(35, 178, 173)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 3",

            },
            pointRadius: 1,
          },

          {
            label: "Mauritius",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(17, 73, 35)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 4",

            },
            pointRadius: 1,
          },

          {
            label: "Mayotte",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(9, 117, 117)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 5",

            },
            pointRadius: 1,
          },

          {
            label: "Mexico",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(252, 148, 152)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 6",

            },
            pointRadius: 1,
          },

          {
            label: "Mongolia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(142, 8, 39)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 7",

            },
            pointRadius: 1,
          },

          {
            label: "Montenegro",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(0, 64, 226)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 8",

            },
            pointRadius: 1,
          },

          {
            label: "Montserrat",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(14, 59, 91)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 9",

            },
            pointRadius: 1,
          },

          {
            label: "Morocco",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(103, 188, 120)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 10",

            },
            pointRadius: 1,
          },

          {
            label: "Mozambique",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(35, 178, 173)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 11",

            },
            pointRadius: 1,
          },

          {
            label: "Myanmar",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(119, 9, 20)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 12",

            },
            pointRadius: 1,
          },

          {
            label: "Namibia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(41, 219, 133)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 13",

            },
            pointRadius: 1,
          },

          {
            label: "Nauru",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(165, 56, 114)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 14",

            },
            pointRadius: 1,
          },

          {
            label: "Nepal",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(1, 142, 48)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 15",

            },
            pointRadius: 1,
          },

          {
            label: "Netherlands",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(119, 9, 20)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 16",

            },
            pointRadius: 1,
          },

          {
            label: "New Caledonia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(175, 58, 35)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 17",

            },
            pointRadius: 1,
          },

          {
            label: "New Zealand",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(91, 27, 71)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 18",

            },
            pointRadius: 1,
          },

          {
            label: "Nicaragua",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(17, 105, 214)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 19",

            },
            pointRadius: 1,
          },

          {
            label: "Niger",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(16, 211, 201)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 20",

            },
            pointRadius: 1,
          },

          {
            label: "Nigeria",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(91, 27, 71)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 21",

            },
            pointRadius: 1,
          },

          {
            label: "Niue",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(111, 42, 130)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 22",

            },
            pointRadius: 1,
          },

          {
            label: "Norway",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(5, 47, 63)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 23",

            },
            pointRadius: 1,
          },

          {
            label: "Occupied Palestian Territory",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(186, 171, 13)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 24",

            },
            pointRadius: 1,
          },

          {
            label: "Oman",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(177, 255, 22)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 25",

            },
            pointRadius: 1,
          },

          {
            label: "Pakistan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(143, 13, 219)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 26",

            },
            pointRadius: 1,
          },

          {
            label: "Palau",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(63, 211, 110)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 27",

            },
            pointRadius: 1,
          },

          {
            label: "Panama",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(48, 6, 35)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 28",

            },
            pointRadius: 1,
          },

          {
            label: "Papua New Guinea",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(48, 6, 35)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 29",

            },
            pointRadius: 1,
          },

          {
            label: "Paraguay",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(198, 73, 142)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 30",

            },
            pointRadius: 1,
          },

          {
            label: "Peru",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(155, 10, 63)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 31",

            },
            pointRadius: 1,
          },

          {
            label: "Philippines",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(188, 39, 47)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 32",

            },
            pointRadius: 1,
          },

          {
            label: "Bolivia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(56, 193, 58)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 33",

            },
            pointRadius: 1,
          },

          {
            label: "Poland",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(4, 94, 158)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 34",

            },
            pointRadius: 1,
          },
          {
            label: "Portugal",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(140, 70, 121)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 35",

            },
            pointRadius: 1,
          },

          {
            label: "Qatar",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(92, 122, 11)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 36",

            },
            pointRadius: 1,
          },

          {
            label: "Cameroon",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(92, 122, 11)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 37",

            },
            pointRadius: 1,
          },

          {
            label: "South Korea",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(104, 145, 221)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 38",

            },
            pointRadius: 1,
          },

          {
            label: "Moldova",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(221, 124, 151)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 39",

            },
            pointRadius: 1,
          },

          {
            label: "South Sudan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(145, 99, 155)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 40",

            },
            pointRadius: 1,
          },

          {
            label: "Sudan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(145, 81, 188)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 41",

            },
            pointRadius: 1,
          },

          {
            label: "Réunion",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(170, 30, 25)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 42",

            },
            pointRadius: 1,
          },

          {
            label: "Romania",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(247, 216, 12)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 43",

            },
            pointRadius: 1,
          },

          {
            label: "Russian Federation",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(193, 106, 148)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 44",

            },
            pointRadius: 1,
          },

          {
            label: "Rwanda",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(70, 73, 175)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 45",

            },
            pointRadius: 1,
          },

          {
            label: "Saint Helena",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(31, 47, 130)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 46",

            },
            pointRadius: 1,
          },

          {
            label: "Saint Lucian",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(133, 212, 252)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 47",

            },
            pointRadius: 1,
          },

          {
            label: "Sint Marteen",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(166, 77, 198)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 48",

            },
            pointRadius: 1,
          },

          {
            label: "Samoa",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(145, 249, 9)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 49",

            },
            pointRadius: 1,
          },

          {
            label: "Sao Tome and Principe",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(214, 95, 244)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 50",

            },
            pointRadius: 1,
          },

          {
            label: "Saudi Arabia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(138, 10, 155)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 51",

            },
            pointRadius: 1,
          },

          {
            label: "Senegal",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(142, 47, 138)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 52",

            },
            pointRadius: 1,
          },

          {
            label: "Serbia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(71, 10, 46)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 53",

            },
            pointRadius: 1,
          },

          {
            label: "Seychelles",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(181, 76, 177)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 54",

            },
            pointRadius: 1,
          },

          {
            label: "Sierra Leone",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(43, 88, 117)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 55",

            },
            pointRadius: 1,
          },

          {
            label: "Singapore",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(158, 42, 18)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 56",

            },
            pointRadius: 1,
          },

          {
            label: "Slovakia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(87, 178, 149)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 57",

            },
            pointRadius: 1,
          },
          {
            label: "Slovenia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(221, 19, 174)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 58",

            },
            pointRadius: 1,
          },

          {
            label: "Solomon Islands",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(12, 209, 156)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 59",

            },
            pointRadius: 1,
          },

          {
            label: "Somalia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(109, 17, 29)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 60",

            },
            pointRadius: 1,
          },

          {
            label: "South Africa",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(131, 255, 48)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 61",

            },
            pointRadius: 1,
          },

          {
            label: "Spain",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(181, 112, 43)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 62",

            },
            pointRadius: 1,
          },

          {
            label: "Sri Lanka",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(198, 77, 184)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 63",

            },
            pointRadius: 1,
          },

          {
            label: "Saint Kitts and Nevis",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(217, 137, 244)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 64",

            },
            pointRadius: 1,
          },

          {
            label: "Sain Pierre and Miquelon",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(114, 198, 45)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 65",

            },
            pointRadius: 1,
          },

          {
            label: "Saint Vincent and the Grenadines",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(184, 234, 58)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 66",

            },
            pointRadius: 1,
          },

          {
            label: "Suriname",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(103, 190, 252)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 67",

            },
            pointRadius: 1,
          },

          {
            label: "Swaziland",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(92, 6, 94)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 68",

            },
            pointRadius: 1,
          },

          {
            label: "Sweden",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(188, 35, 163)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 69",

            },
            pointRadius: 1,
          },

          {
            label: "Switzerland",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(170, 39, 102)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 70",

            },
            pointRadius: 1,
          },

          {
            label: "Syria",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(133, 226, 27)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 71",

            },
            pointRadius: 1,
          },

          {
            label: "Taiwan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(244, 7, 27)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 72",

            },
            pointRadius: 1,
          },

          {
            label: "Tajikistan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(183, 33, 48)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 73",

            },
            pointRadius: 1,
          },

          {
            label: "Thailand",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(8, 13, 53)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 74",

            },
            pointRadius: 1,
          },

          {
            label: "Timor-Leste",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(171, 249, 137)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 75",

            },
            pointRadius: 1,
          },

          {
            label: "Togo",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(244, 7, 27)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 76",

            },
            pointRadius: 1,
          },

          {
            label: "Tonga",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(168, 237, 7)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 77",

            },
            pointRadius: 1,
          },

          {
            label: "Trinidad and Tobago",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(23, 65, 193)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 78",

            },
            pointRadius: 1,
          },

          {
            label: "Tunisia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(11, 104, 19)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 79",

            },
            pointRadius: 1,
          },

          {
            label: "Turkey",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(79, 6, 214)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 80",

            },
            pointRadius: 1,
          },

          {
            label: "Turkmenistan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(175, 167, 42)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 81",

            },
            pointRadius: 1,
          },

          {
            label: "Turks and Caicos Islands",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(113, 186, 57)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 82",

            },
            pointRadius: 1,
          },

          {
            label: "Tuvalu",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(39, 194, 209)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 83",

            },
            pointRadius: 1,
          },

          {
            label: "Uganda",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(186, 65, 141)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 84",

            },
            pointRadius: 1,
          },

          {
            label: "Ukraine",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(18, 31, 181)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 85",

            },
            pointRadius: 1,
          },

          {
            label: "United Arab Emirates",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(178, 99, 3)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 86",

            },
            pointRadius: 1,
          },

          {
            label: "United Kindom",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(39, 194, 209)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 87",

            },
            pointRadius: 1,
          },

          {
            label: "Tanzania",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(220, 110, 234)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 88",

            },
            pointRadius: 1,
          },

          {
            label: "USA",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(69, 193, 193)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 89",

            },
            pointRadius: 1,
          },

          {
            label: "Uruguay",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(15, 216, 62)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 90",

            },
            pointRadius: 1,
          },

          {
            label: "Uzbekistan",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(3, 31, 33)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 91",

            },
            pointRadius: 1,
          },
          
          {
            label: "Vanuatu",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(188, 143, 30)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 92",

            },
            pointRadius: 1,
          },

          {
            label: "Venezuela",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(150, 66, 40)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 93",

            },
            pointRadius: 1,
          },

          {
            label: "Viet Nam",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(93, 182, 183)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 94",

            },
            pointRadius: 1,
          },

          {
            label: "Wallis and Futuna Islands",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(237, 28, 184)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 95",

            },
            pointRadius: 1,
          },

          {
            label: "Yemen",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(13, 14, 56)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 96",

            },
            pointRadius: 1,
          },

          {
            label: "Zambia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(170, 183, 25)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 97",

            },
            pointRadius: 1,
          },

          {
            label: "Zimbabwe",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(50, 171, 252)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 98",

            },
            pointRadius: 1,
          },

          {
            label: "KP Annex B",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(72, 67, 168)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 99",

            },
            pointRadius: 1,
          },

          {
            label: "Non KP Annex B",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(2, 41, 114)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 100",

            },
            pointRadius: 1,
          },

          {
            label: "OECD",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(163, 152, 37)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 101",

            },
            pointRadius: 1,
          },

          {
            label: "Non-OECD",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(66, 13, 81)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 102",

            },
            pointRadius: 1,
          },

          {
            label: "EU27",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(27, 130, 15)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 103",

            },
            pointRadius: 1,
          },

          {
            label: "Africa",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(26, 110, 244)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 104",

            },
            pointRadius: 1,
          },

          {
            label: "Asia",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(0, 219, 175)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 105",

            },
            pointRadius: 1,
          },

          {
            label: "Central America",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(137, 132, 232)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 106",

            },
            pointRadius: 1,
          },

          {
            label: "Europe",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(13, 8, 38)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 107",

            },
            pointRadius: 1,
          },

          {
            label: "Middle East",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(32, 214, 192)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 108",

            },
            pointRadius: 1,
          },

          {
            label: "North America",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(0, 219, 175)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 109",

            },
            pointRadius: 1,
          },

          {
            label: "Oceania",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(249, 54, 47)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 110",

            },
            pointRadius: 1,
          },

          {
            label: "South America",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(36, 0, 183)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 111",

            },
            pointRadius: 1,
          },

          {
            label: "Bunkers",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(29, 77, 109)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 112",

            },
            pointRadius: 1,
          },

          {
            label: "Statistical Difference",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(214, 87, 132)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 113",

            },
            pointRadius: 1,
          },

          {
            label: "World",
            data: tietoebc2,
            borderWidth: 3,
            borderColor: "rgb(36, 0, 183)",
            parsing: {
              xAxisKey: "COL 1",
              yAxisKey: "COL 114",

            },
            pointRadius: 1,
          },



        ],
      };
  


      const optionsebc = {
        responsive: true,
        plugins: {
          Chart: {
            padding: {
              top: 30,
            }
          },
          legend: {
          
            position: "bottom",
        
            padding:20,
            title: {
              display: true,
            },
         
          },
          title: {
            display: true,
            text: "Emissions by country",
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "year",
            },
          },
          yAxis: {
            type: "linear",
          },
        },
      };
   


    return (
      <div style={{ width: "1200px" }}>
            <h3>Maiden Päästöt</h3>
            <div>
            <Line options={optionsebc} data={dataebc}/>
        </div>
        </div>
        
        
    )
}