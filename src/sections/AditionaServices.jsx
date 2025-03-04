import React from 'react'
import ServiceCard from '../component/ServiceCard'
import { FaServicestack } from 'react-icons/fa'

function AditionaServices() {
  return (
    <section className='bg-yellow-50'>
        <div className='width section'>
            <h2 className='subtitle'>Aditional Services</h2>
            <div id="aditional-service" className='flex flex-col justify-between gap-8'>
                <ServiceCard icon={<FaServicestack size={28} color='indigo' />} title="Frontend (UI/UX) Development" desc="
                Pixel Perfect responsive ui/ux design to increse your sale
                " />
                <ServiceCard icon={<FaServicestack size={28} color='indigo' />} title="Frontend (UI/UX) Development" desc="
                Pixel Perfect responsive ui/ux design to increse your sale
                " />
                <ServiceCard icon={<FaServicestack size={28} color='indigo' />} title="Frontend (UI/UX) Development" desc="
                Pixel Perfect responsive ui/ux design to increse your sale
                " />
            </div>
        </div>
    </section>
  )
}

export default AditionaServices