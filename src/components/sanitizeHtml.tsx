/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import DOMPurify from 'dompurify';
import { useEffect,useState } from 'react';
const sanitizeHtml = ({html} : {html: string}) => {
    const [clean, setClean] = useState<string>('');
    useEffect(() => {
        setClean(DOMPurify.sanitize(html));
    }, [html]);
    return (
        <div dangerouslySetInnerHTML={{__html: clean}} />
    );
};

export default sanitizeHtml;