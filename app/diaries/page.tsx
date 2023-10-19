'use client';
import { Image } from '@nextui-org/react';

const diaries = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function Diaries() {
  return (
    <div className="h-screen w-full flex flex-wrap justify-evenly">
      {diaries.map((idx) => (
        <div className="w-1/3" key={idx}>
          <Image
            // isZoomed
            isBlurred
            width={220}
            src="https://ik.imagekit.io/psb/paweldiaries/pd_chDh3F_WZZ.png"
            alt="NextUI Album Cover"
            className="border-2 m-2"
          />
        </div>
      ))}
    </div>
  );
}
