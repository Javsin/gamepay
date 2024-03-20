'use client'
export default function ErrorBoundary({
        error,
    } : {
        error: Error
    }) 
{
    return (
        <div>
            <h1>Something went wrong.</h1>
            <pre style={{whiteSpace: 'pre-wrap'}}>{error.message}</pre>
        </div>
    );
}
