'use client'

interface iconStarProps {
    count: number;
    width: number;
    color: string;
}

const IconStar: React.FC<iconStarProps> = ({count, width, color}) => {
    return (
        <div className="flex">
            {
                [...Array(count)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width={width}
                        height={width}
                        viewBox="0 0 48 48"
                        className="mr-0.5"
                        >
                        <g id="icon_bintang" transform="translate(0)">
                            <path
                            id="Path_2524"
                            data-name="Path 2524"
                            d="M35.683,47.474,24,40.293,12.317,47.474c-2.444,1.482-4.55-.388-3.87-2.852l3.1-14.087-10.8-9.81a2.572,2.572,0,0,1,1.509-4.355l13.967-1.181L21.66,1.5A2.3,2.3,0,0,1,24,0a2.3,2.3,0,0,1,2.34,1.5l5.436,13.693,13.967,1.181a2.572,2.572,0,0,1,1.509,4.355l-10.8,9.81,3.1,14.087c.681,2.464-1.425,4.335-3.87,2.852Z"
                            fill={color}
                            fillRule="evenodd"
                            />
                        </g>
                    </svg>
                ))
            }
        </div>
    );
}

export default IconStar