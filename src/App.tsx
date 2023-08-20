import React, {useState} from "react";
import "./App.css";
import RadioButton from "./components/RadioButton";
import shockedSfx from "./sounds/shocked.mp3";
import useSound from "use-sound";

const App = () => {
    const [play] = useSound(shockedSfx)
    const [radio1, setRadio1] = useState(false)
    const [radio2, setRadio2] = useState(false)
    const [radio3, setRadio3] = useState(false)

    const handleChange1 = () => {
        setRadio1(!radio1)
        if (radio2 && radio3) {
            play()
            if (Math.random() < 0.5) {
                setRadio2(false)
            } else {
                setRadio3(false)
            }
        }
    }

    const handleChange2 = () => {
        setRadio2(!radio2)
        if (radio1 && radio3) {
            play()
            if (Math.random() < 0.5) {
                setRadio1(false)
            } else {
                setRadio3(false)
            }
        }
    }

    const handleChange3 = () => {
        setRadio3(!radio3)
        if (radio1 && radio2) {
            play()
            if (Math.random() < 0.5) {
                setRadio1(false)
            } else {
                setRadio2(false)
            }
        }
    }

    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col gap-4">
                <RadioButton
                    id="radio-1"
                    name="Kerja di Startup"
                    checked={radio1}
                    onChange={handleChange1}/>
                <RadioButton
                    id="radio-2"
                    name="Gaji Besar"
                    checked={radio2}
                    onChange={handleChange2}/>
                <RadioButton
                    id="radio-3"
                    name="Anti Layoff"
                    checked={radio3}
                    onChange={handleChange3}/>
            </div>
        </div>
    );
};

export default App;