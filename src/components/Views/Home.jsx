import React from 'react';
import DownloadReportForm from '../Forms/DownloadReportForm.jsx';

const Home = (props)  => {
    
    let {
        handleDownloadSubmit,
        onDownloadFormInputChange
    } = props;

    return (
        <div>
            <DownloadReportForm 
                handleDownloadSubmit={handleDownloadSubmit}
                onDownloadFormInputChange={onDownloadFormInputChange}
            />
        </div>
    )
};

export default Home;