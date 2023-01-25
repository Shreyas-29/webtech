import React from 'react';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


function GalleryDetail({ post }: any) {

    const getContentFragment = (index: any, text: any, obj: any, type: any) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>)
            }
        }

        switch (type) {
            case 'heading-one':
                return <h1 key={index} className="text-2xl lg:text-4xl font-semibold mb-8">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                    {item}
                </React.Fragment>)}
                </h1>
            case 'heading-two':
                return <h2 key={index} className="text-xl font-semibold my-4 mt-8">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                    {item}
                </React.Fragment>)}
                </h2>
            case 'heading-four':
                return <h4 key={index} className='text-xl font-semibold mb-4 mt-8'>
                    {modifiedText}
                </h4>
            case 'paragraph':
                return <p key={index} className="text-gray-700 font-medium my-4">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                    {item}
                </React.Fragment>)}
                </p>;
            case 'code-block':
                return (
                    <code key={index} className=' font-normal my-4 px-4 py-1 rounded-md'>
                        {modifiedText.map((item: any, i: any) => <React.Fragment key={i}  >
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                                {item}
                            </SyntaxHighlighter>
                        </React.Fragment>)}
                    </code>
                )
            case 'code':
                return (
                    <>
                        {modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                            <code key={index} className=' font-normal my-4 px-4 py-1 rounded-md font-mono'>
                                <SyntaxHighlighter language="javascript">
                                    {item}
                                </SyntaxHighlighter>
                            </code>
                        </React.Fragment>)}
                    </>
                )
            case 'image':
                return (
                    <Image
                        key={index}
                        alt='image'
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                        unoptimized
                        className='w-full h-96 object-cover object-center rounded-md my-8'
                    />
                );
            default:
                return modifiedText;
        }

    }

    return (
        <div className='lg:py-8 lg:pb-16 pb-12 mb-8 w-full border-b-2'>
            <div className="px-4 lg:px-0 ">
                <div className='mt-6'>
                    {post.content.raw.children.map((typeObj: any, index: any) => {
                        const children = typeObj.children.map((item: any, itemindex: any) => getContentFragment(itemindex, item.text, item, ''));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </div>
    )
}

export default GalleryDetail
