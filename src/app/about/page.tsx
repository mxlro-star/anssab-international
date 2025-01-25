'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ansaab International is a trusted supplier of UNHCR Family Tents, dedicated to providing high-quality shelter solutions for humanitarian needs across the Middle East and Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:grid lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to provide reliable and durable shelter solutions that meet the highest standards of quality and safety. We understand the critical nature of our products and their impact on the lives of those in need.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              <li>• Quality and Reliability in Every Product</li>
              <li>• Commitment to Humanitarian Causes</li>
              <li>• Ethical Business Practices</li>
              <li>• Customer-Centric Approach</li>
              <li>• Global Responsibility</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Company details section */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:grid lg:grid-cols-2 lg:gap-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">UK Operations</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Based in the United Kingdom, our operations team manages global logistics, quality control, and customer relations. We leverage our UK presence to ensure compliance with international standards and maintain strong relationships with humanitarian organizations.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Manufacturing Excellence</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our manufacturing facility in Pakistan combines traditional craftsmanship with modern technology to produce UNHCR Family Tents that meet rigorous quality standards. Every tent undergoes thorough quality control checks before shipment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 