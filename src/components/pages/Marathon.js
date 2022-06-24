import React from 'react';
import '../../App.css';
import Cards from '../Cards';

export default function Marathon() {

    // const URL_REGEX = '/https:\/\/([\w.-]+\.)?figma.com\/(file|proto)'

    // findFigmaAttachments = (attachments) => {
    //     const docs = {}
    //     attachments.forEach((attachment) => {
    //         const match = attachment.url.match(URL_REGEX)
    //         const key = `${attachment.url}`
    //         const doc = {
    //             url: '/embed?embed_host=matthewztan&url=${attachment.url}',
    //             src: attachment.url,
    //             id: attachment.id,
    //         }
    //         docs[key] = doc;
    //     }
    //     this.setState({docs})
    // }

    // render() {
    //     const figmaDocs = Object.keys(this.state.docs).map((key) => {
    //         const doc = this.state.docs[key]
    //         return (
    //         <div key={doc.src}>
    //             <iframe src={doc.url} />
    //         </div>
    //         );
    //     })

    //     return (
    //         {figmaDocs}
    //     );
    // }

    return(
        <>
            {/* <html>
            <head>
                <style>
                    #content {
                        width: 800px;
                        margin: auto;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                </style>
            </head>
            <body>
                <div id="content">
                    <iframe 
                    style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                    width="800" 
                    height="450" 
                    src="https://www.figma.com/embed?embed_host=matthewztan&url=https%3A%2F%2F
                        www.figma.com%2Ffile%2FqQnfQJbF7wA45J47RFxxTw%2FSD-Hacks-2022---User-Flow%3Fnode-id%3D0%253A1" 
                    allowfullscreen
                    >
                    </iframe>
                </div>
            </body>
            </html> */}
            <h1 className='art'>ART</h1>
            <Cards />
        </>
    );
}