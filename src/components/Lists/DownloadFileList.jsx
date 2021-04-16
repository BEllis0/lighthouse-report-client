import React from 'react';

const DownloadfileList = props => {
    
    let {
        data
    } = props;
    
    return (
        <div>
            <div className="downloadFileHeaders">
                <p>Date</p>
                <p>Name</p>
                <p>Download Link</p>
            </div>
            {data.map((file, i) => {
                return (
                    <div key={i} className="downloadFileContainer">
                        <p>{file.date}</p>
                        <p>file name</p>
                        <a href={file.url} download="fileexample">Download</a>
                    </div>
                )
            })}
        </div>
    )
};

export default DownloadfileList;