import circleBottomRight from '@/../public/assets/statistics-ellipse-bottom-right.png';
import circleTopLeft from '@/../public/assets/statistics-ellipse-top-left.png';
import Image from 'next/image';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function ColorfulBackgroundCard(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={`relative [background:linear-gradient(90deg,_#ffc8ca,_#feebec)] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.05)_inset] overflow-hidden ${props.className}`}>
      <div className="z-[1] relative">{props.children}</div>

      {/* Background shapes */}
      <Image
        src={circleBottomRight}
        className="absolute right-0 bottom-0 z-0"
        alt="circle"
      />
      <Image
        src={circleTopLeft}
        className="absolute left-0 top-0 z-0"
        alt="circle"
      />
    </div>
  );
}
