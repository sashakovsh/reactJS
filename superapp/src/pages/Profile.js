import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible, changeCheckBox, updateName } from "../store/profile/actions";
import { profile } from "../store/profile/selectors";

const Profile = () => {
    const { showName, name } = useSelector(profile);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    const setShowName = useCallback( () => {
        dispatch(changeVisible);
    }, [dispatch]);
    const setCheckBox = useCallback( () => {
        dispatch(changeCheckBox);
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const saveName = () => {
        dispatch(updateName(value))
    }

    return (
        <div>
            <h1>Profile</h1>
            <Button onClick={setShowName} variant="contained">Show Name</Button>
            <blockquote style={{height: '50px'}}>{showName && <h3>{name}</h3>}</blockquote>
            <FormControlLabel control={<Checkbox onClick={setCheckBox} />} label="Нажми меня" />
            <TextField
                name="name"
                label="name"
                value={value}
                onChange={handleInput}
            >
            </TextField>
            <Button onClick={saveName}>Сохранить</Button>
        </div>
    )
}

export default Profile;