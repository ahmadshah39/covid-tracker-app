import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../context/GlobalState";
const Datachart = () => {
  const { globalHistory, getHistoricalGlobalData } = useGlobalContext();
  useEffect(() => {
    getHistoricalGlobalData();
    // eslint-disable-next-line
  }, []);

  if (globalHistory === null) {
    return <h4>loading....</h4>;
  }
  const { dates, cases, deaths, recovered } = globalHistory;

  return (
    <>
      <Box width="100%" my={5} p={4} bgColor="#1e1e1e">
        <Line
          data={{
            labels: dates,
            datasets: [
              {
                data: cases,
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: deaths,
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
              {
                data: recovered,
                label: "Recovered",
                borderColor: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                fill: true,
              },
            ],
          }}
          width={600}
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </Box>
    </>
  );
};

export default Datachart;
