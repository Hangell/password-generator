import Home from "@screens/Home/Home";
import {useFonts} from "expo-font";

export default function App() {
    const [loaded] = useFonts({
        Glitch: require('@assets/fonts/Glitch.otf'),
    });

    if (!loaded) return null;
    return <Home />;
}
