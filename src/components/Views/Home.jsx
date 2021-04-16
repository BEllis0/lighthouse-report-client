import React from 'react';
import DownloadReportForm from '../Forms/DownloadReportForm.jsx';
import DownloadFileList from '../Lists/DownloadFileList.jsx';

const Home = (props)  => {
    
    let {
        handleDownloadSubmit,
        onDownloadFormInputChange,
        data
    } = props;

    return (
        <div>
            <DownloadReportForm 
                handleDownloadSubmit={handleDownloadSubmit}
                onDownloadFormInputChange={onDownloadFormInputChange}
            />
            {data.length > 0 &&
                <DownloadFileList
                    data={data}
                />
            }
        </div>
    )
};

export default Home;