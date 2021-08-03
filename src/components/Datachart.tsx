import { Box, Heading } from "@chakra-ui/react";
import {Line} from "react-chartjs-2";
const Datachart = () => {
    return (
        <Box  p={4} bgColor="#1e1e1e">
            <Heading color='#ffffff'>
                Linear
            </Heading>
        <Box position="relative" height="30vh" width="100%" >
        <Line
        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }}
        width={600}
        height={400}
        options={{
            maintainAspectRatio: false,
            responsive:true,
        }}
            />
            </Box>
        </Box>
    )
}

export default Datachart
