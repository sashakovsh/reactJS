import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible, changeCheckBox } from "../store/profile/actions";

const Profile = () => {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback( () => {
        dispatch(changeVisible);
    }, [dispatch]);
    const setCheckBox = useCallback( () => {
        dispatch(changeCheckBox);
    }, [dispatch]);

    return (
        <div>
            <h1>Profile</h1>
            <Button onClick={setShowName} variant="contained">Show Name</Button>
            <blockquote style={{height: '50px'}}>{showName && <h3>{name}</h3>}</blockquote>
            <FormControlLabel control={<Checkbox onClick={setCheckBox} />} label="Нажми меня" />
        </div>
    )
}

export default Profile;