
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';


export default function Shapes() {
    return (

< div className="flex flex-wrap gap-4 justify-start items-center">
<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
/>
<p>1</p>

<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-green-500  border-r-transparent border-b-transparent"
/>
<p>2</p>
<div
className="relative w-0 h-0 border-l-[15px]-black border-r-[15px] border-b-[26px] border-l-[15px]-purple-500 border-r-transparent border-b-purple-500"
/>
<p>3</p>

<div className='relative w-0 h-0 border-l-[15px] border-r-[15px] border-t-[26px] border-l-transparent border-r-transparent  border-t-orange-500' />




<p>4</p>
<p>5</p>
<p>6</p>

<p>original shape made by Tailwind</p>


<div className={styles.shape} /> {/* <same shape imported from home.module.css/> */}

<div className={styles.diamond} /> 
<div className={styles.triangle} /> 
<div className={styles.trapezoid} /> 

<p> same shape imported from home.module.css</p>
<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px]  border-t-[26px] border-l-transparent border-r-transparent border-b-red-500 border-t-blue-500"
/>
<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-t-[26px] border-l-transparent border-r-transparent border-b-red-500 border-t-transparent"
/>
<div className="w-20 h-20 bg-blue-500" />
<div className="w-40 h-20 bg-blue-500 rounded-lg" />
<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-t-[26px] border-l-transparent border-r-transparent border-t-blue-500 rounded-lg"
/>
<div
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-t-[26px] border-l-transparent border-r-transparent border-b-transparent border-t--500"
/>

</div>
    );
}