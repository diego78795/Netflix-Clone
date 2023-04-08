import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_900Black } from '@expo-google-fonts/montserrat'

import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_900Black });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
