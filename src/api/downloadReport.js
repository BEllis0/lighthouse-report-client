import axios from 'axios';
export function downloadReport(url) {
    return new Promise((resolve, reject) => {
        let requestDownload = axios.get(`https://lighthouse-report-files.herokuapp.com/api/reports/all?url=${url}`)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
};