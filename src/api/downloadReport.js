import axios from 'axios';
export function downloadReport(url) {
    return new Promise((resolve, reject) => {
        let requestDownload = axios({
            url: `https://lighthouse-report-files.herokuapp.com/api/reports/all?url=${url}`,
            responseType: 'blob'
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
};