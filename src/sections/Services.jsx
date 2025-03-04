import React from "react";
import ServiceCard from "../component/ServiceCard";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { FaUsersGear } from "react-icons/fa6";
import { TbPhotoEdit } from "react-icons/tb";
import { MdOutlineCreateNewFolder } from "react-icons/md";

function Services() {
  return (
    <section className="bg-indigo-50">
      <div id="services" className="width section">
        <h2 className="subtitle">Our Services</h2>
        <div id="service-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<ChartBarIcon className="size-8" color="indigo" />}
            title="Organic Growth"
            desc="Skyrocket your Instagram & TikTok presence with authentic followers!
            Experience the magic of organic growth and watch your audience expand,
            naturally."
          />
          <ServiceCard
            icon={<FaUsersGear size={28} color="indigo" />}
            title="Strategic Engagement"
            desc="Turn likes into loyalty! Elevate your Instagram & TikTok engagement and create a buzz with strategies that truly resonate with your audience."
          />
          <ServiceCard
            icon={<TbPhotoEdit size={28} color="indigo" />}
            title="Media Editing"
            desc="Our expert editors work magic on your images and videos, ensuring every piece of content is polished, professional, and perfectly suited to your social media strategy."
          />
          <ServiceCard
            icon={<MdOutlineCreateNewFolder size={28} color="indigo" />}
            title="Content Creation"
            desc="Unleash creativity that captivates! Tailored, stunning Instagram content designed to make your brand shine and your followers stick around for more."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
