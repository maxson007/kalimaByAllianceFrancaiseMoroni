const DICO_URL_API="http://www.swadrii.com/orelc/api/1.0/WsFrench/viewWord/fr/";


const options ={
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
};
export function translateWordFrenchInComorian(frencWord){
    const url = `${DICO_URL_API}${frencWord}.json`;
    return fetch(url,{
        headers: {
            Accept: 'application/json'}
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
