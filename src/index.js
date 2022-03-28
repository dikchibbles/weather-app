import { getLocationJson } from "./findLocationJson";
import addStatsToPage from "./pageManipulation";

let data = getLocationJson('Tehran');

addStatsToPage(data)

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        let searchInput = document.querySelector('#search').value.trim();
        let newData = getLocationJson(searchInput);
        addStatsToPage(newData);
    }
})







