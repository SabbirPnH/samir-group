"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import '../../app/globals.css'; 

const brand = [
    { id: 1, image: "/img/01.png" },
    { id: 2, image: "/img/02.png" },
    { id: 3, image: "/img/03.png" },
    { id: 4, image: "/img/04.png" },
    { id: 5, image: "/img/01.png" },
    { id: 6, image: "/img/04.png" },
    { id: 7, image: "/img/02.png" },
    { id: 8, image: "/img/03.png" },
    { id: 9, image: "/img/02.png" },
];

export default function Barnd() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ overflow: 'hidden' }}
        >
            <Marquee
                speed={50}
                pauseOnHover={isHovered}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {brand.map((item) => (
                    <div className='h-[80px] w-[100px] lg:h-[160px] lg:w-[200px] cursor-pointer' key={item.id} style={{ margin: '0 10px' }}>
                        <Image
                            src={item.image}
                            width={500}
                            height={500}
                            alt={`brand-${item.id}`}
                            layout="intrinsic"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}