import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { getJetourServices } from "../config/firestoreHelpers";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getJetourServices();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
