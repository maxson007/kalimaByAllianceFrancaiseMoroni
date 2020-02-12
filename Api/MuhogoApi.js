const API_PROD_URL = 'http://muhogo.wanidev.fr/api';

//get theme http://muhogo.wanidev.fr/api/themes?page=1

const options ={
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
};
export function getThemeFromApi(page=1){
    const url = `${API_PROD_URL}/themes?page=${page}`;
    //console.log(url);
    return fetch(url,{
        headers: {
            Accept: 'application/json'}
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getActivityByIdTheme(idTheme){
    const url = `${API_PROD_URL}/activites?theme=${idTheme}`;
    return fetch(url,{
        headers: {
            Accept: 'application/json'}
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getExerciseByIdActivity(idActivity){
    const url = `${API_PROD_URL}/exercises?activite=${idActivity}`;
    return fetch(url,{
        headers: {
            Accept: 'application/json'}
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
