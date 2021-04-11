import React, { useState, useEffect } from 'react';
import { downloadReport } from '../../api/downloadReport.js';

const DownloadReportForm = (props) => {

    const onDownloadReport = (e) => {
        e.preventDefault();
        console.log('submitting url')
        downloadReport("https://www.google.com");
    };

    return (
        <div id="downloadReportFormContainer" onSubmit={(e) => onDownloadReport}>
            <h1>Submit a URL</h1>
            <p>Returns a XLSX file with a complete breakdown of the problem files found on the submitted URL.</p>
            <form id="downloadReportForm">
                <label>URL</label>
                <input type="text" id="urlInput" />
                <input type="submit" />
            </form>
        </div>
    )
};

export default DownloadReportForm;