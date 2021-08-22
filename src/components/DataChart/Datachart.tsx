import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Line } from "react-chartjs-2";
import { GlobalHistoryType } from "../../context/ActionTypes";
const Datachart = React.memo(({ data }: { data: GlobalHistoryType | null }) => {
  if (data === null) {
    return (
      <Box width="100%" my={5} p={4} bgColor="#1e1e1e">
        <Text
          fontSize={["lg", "xl", "4xl"]}
          textAlign="center"
          color="gray.400"
        >
          No historical Data Found....
        </Text>
      </Box>
    );
  }
  console.log("dataChart");

  const { dates, cases, deaths } = data;

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
                borderColor: "#2196f3",
                fill: true,
              },
              {
                data: deaths,
                label: "Deaths",
                borderColor: "#ff5252",
                backgroundColor: "rgba(255, 82, 82, 0.5)",
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
});

export default Datachart;
