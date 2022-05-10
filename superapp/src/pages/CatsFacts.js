import { Button, CircularProgress, Container, List, ListItem } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllFacts } from "../store/api/actions";
import { selectCatsFacts, selectCatsFactsError, selectCatsFactsLoading } from "../store/api/selectors";

const CatsFacts = () => {
  const dispatch = useDispatch();
  const cats = useSelector(selectCatsFacts);
  const error = useSelector(selectCatsFactsError);
  const loading = useSelector(selectCatsFactsLoading);

  const requestCatFact = async () => {dispatch(getAllFacts())} ;

  useEffect( () =>  {
    requestCatFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const renderCats = useCallback((cats) => <ListItem key={cats._id}>{cats.text || 'No description'}</ListItem>, []);

  if(loading) {
    return <CircularProgress />
  }
  if(error) {
    return (
      <div>
        <h2>ошибка запроса</h2>
        <Button onClick={requestCatFact} variant="contained">Повторить запрос</Button>
      </div>
    )
  }
  return (
    <Container maxWidth="sm">
      <List>
        {cats.map(renderCats)}
      </List>
    </Container>
  ) 
};

export default CatsFacts;