import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import statisticscards from './statisticscards';
// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};
export default function Sales() {
  return (
    <div>

      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-semibold">Sales</h2>
        <div className="grid grid-cols-3 gap-4">
          {statisticscards.map((card, index) => (
            <div
              key={index}
              className={`p-4 bg-${card.color}-200 rounded-lg shadow-md`}
            >
              <card.icon className="w-8 h-8 text-gray-800" />
              <div className="mt-2">
                <p className="text-sm text-gray-600">{card.title}</p>
                <p className="text-lg font-semibold">{card.value}</p>
              </div>
              <div className={`mt-2 text-sm ${card.footer.color}`}>
                <span>{card.footer.value}</span> {card.footer.label}
              </div>
            </div>
          ))}
        </div>
      </div>




      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <Square3Stack3DIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              OverAll Sales
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Overall sales madeded in the last year.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  )
}
