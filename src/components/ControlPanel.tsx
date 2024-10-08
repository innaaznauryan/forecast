import { useState } from "react";
import { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from 'react-redux';
import { setTempFormat } from '../store/tempFormatSlice';
import { setSearch } from "../store/searchSlice";
import "./controlPanel.scss"

const ControlPanel = () => {
    const dispatch: AppDispatch = useDispatch();
    const tempFormat = useSelector((state: RootState) => state.tempFormat.tempFormat);

    const [searchQueary, setSearchQuery] = useState("");

    const handleTempFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTempFormat(event.target.value));
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch(searchQueary);
        }
    }

    const handleSearch = (value: string) => {
        dispatch(setSearch(value));
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="tempFormat">
                    <span className="tempFormat-component">
                        <label htmlFor="celsius">Celsius</label>
                        <input
                            type="radio"
                            name="tempFormat"
                            id="celsius"
                            value="celsius"
                            checked={tempFormat === 'celsius'}
                            onChange={handleTempFormatChange}
                        />
                    </span>
                    <span className="tempFormat-component">
                        <label htmlFor="farenheit">Fahrenheit</label>
                        <input
                            type="radio"
                            name="tempFormat"
                            id="farenheit"
                            value="farenheit"
                            checked={tempFormat === 'farenheit'}
                            onChange={handleTempFormatChange}
                        />
                    </span>
                </div>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search for a City" 
                        value={searchQueary} 
                        onInput={handleInput}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </nav>
    );
}

export default ControlPanel;
