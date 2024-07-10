import { SVGProps } from 'react'

export default function Computer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.906 13.5V9.134c0-.612-.496-1.109-1.109-1.109H2.202c-.612 0-1.108.497-1.108 1.109V13.5m8.942-13H3.963a.784.784 0 0 0-.784.784v3.599c0 .433.351.784.784.784h6.073a.784.784 0 0 0 .784-.784V1.284A.784.784 0 0 0 10.036.5M7 5.667v2.358m-5.906 2.187h11.813"
      />
    </svg>
  )
}
