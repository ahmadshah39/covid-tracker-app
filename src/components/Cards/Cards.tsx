import { useEffect } from "react";
import InfoCard from "./InfoCard/InfoCard";
import { Grid, Text, HStack } from "@chakra-ui/react";
import { FaGlobeAmericas, FaHeart, FaSkullCrossbones } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { useGlobalContext } from "../../context/GlobalState";
const Cards = () => {
  const { global, getGlobalData } = useGlobalContext();
  useEffect(() => {
    getGlobalData();
    // eslint-disable-next-line
  }, []);

  if (global === null) {
    return <h4>loading...</h4>;
  }

  const {
    updated,
    cases,
    todayCases,
    deaths,
    recovered,
    todayRecovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
    population,
    activePerOneMillion,
    recoveredPerOneMillion,
    affectedCountries,
  } = global;
  const data = [
    {
      title: "Total Cases",
      total: cases,
      today: `+${todayCases} Case Today`,
      perMill: `${casesPerOneMillion} cases per million`,
      colorText: "#ff5252",
      iconColor: "#ffffff",
      colorBorder: "#424242",
      iconName: FaGlobeAmericas,
    },
    {
      title: "Active Cases",
      total: active,
      today: `${critical} Critical`,
      perMill: `${activePerOneMillion} active per million`,
      colorText: "#ff5252",
      iconColor: "#2196f3",
      colorBorder: "#2196f3",
      iconName: RiSurgicalMaskFill,
    },
    {
      title: "Recovered",
      total: recovered,
      today: `+${todayRecovered} recovered today`,
      perMill: `${recoveredPerOneMillion} per million`,
      colorText: "#4caf50",
      iconColor: "#4caf50",
      colorBorder: "#4caf50",
      iconName: FaHeart,
    },
    {
      title: "Deaths",
      total: deaths,
      today: "",
      perMill: `${deathsPerOneMillion} per million`,
      colorText: "#ff5252",
      iconColor: "#ff5252",
      colorBorder: "#ff5252",
      iconName: FaSkullCrossbones,
    },
  ];
  return (
    <>
      <HStack py={1} width="100%" justifyContent="space-between">
        <Text fontSize="4xl" color="gray.200">
          World Population
        </Text>
        <Text fontSize="4xl" color="gray.200">
          {population}
        </Text>
      </HStack>
      <Grid
        width="100%"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "null",
          "repeat(4, 1fr)",
        ]}
        gap={5}
      >
        {data.map((item) => (
          <InfoCard key={item.title} data={item} />
        ))}
      </Grid>
    </>
  );
};

export default Cards;
