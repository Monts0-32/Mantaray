import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="font-body text-accent text-xs tracking-[0.4em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-primary text-4xl md:text-6xl mt-3 mb-4">
            Contact Us
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed max-w-lg">
            Ready to discuss your next structural project? Reach out to our team directly.
          </p>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  office: "Head Office",
                  address: "14 Blueprint Lane, Canary Wharf",
                  city: "London E14 5AB",
                  phone: "+44 (0) 20 7946 0958",
                },
                {
                  office: "Northern Division",
                  address: "Steel House, Victoria Gateway",
                  city: "Manchester M1 2WD",
                  phone: "+44 (0) 161 496 0231",
                },
                {
                  office: "Fabrication Works",
                  address: "Unit 7, Anvil Industrial Estate",
                  city: "Birmingham B6 7EU",
                  phone: "+44 (0) 121 368 0174",
                },
              ].map((loc) => (
                <div
                  key={loc.office}
                  className="pb-8 border-b md:border-b-0 md:border-r border-border last:border-0 md:pr-10"
                >
                  <div className="font-heading font-bold text-primary text-lg mb-2">
                    {loc.office}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={15}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-muted-foreground text-sm">
                        {loc.address}
                        <br />
                        {loc.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={15} className="text-accent flex-shrink-0" />
                      <span className="font-body text-muted-foreground text-sm">
                        {loc.phone}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-border">
              <Mail size={15} className="text-accent" />
              <span className="font-body text-primary text-sm font-medium">
                enquiries@mantarayltd.co.uk
              </span>
            </div>
          </motion.div>
      </div>
    </section>
  );
}