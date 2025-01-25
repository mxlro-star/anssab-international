'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent quality standards.',
  },
  {
    name: 'UNHCR Approved',
    description: 'Meeting all specifications and standards set by UNHCR for family tents.',
  },
  {
    name: 'Environmental Standards',
    description: 'Commitment to sustainable manufacturing practices and environmental responsibility.',
  },
  {
    name: 'Social Compliance',
    description: 'Adherence to international labor standards and ethical workplace practices.',
  },
];

const facilities = [
  {
    title: 'Manufacturing Plant',
    description: 'State-of-the-art facility spanning over 50,000 square feet with modern machinery.',
  },
  {
    title: 'Quality Control',
    description: 'Dedicated quality control department with rigorous testing protocols.',
  },
  {
    title: 'Storage Capacity',
    description: 'Climate-controlled warehouses capable of storing thousands of tents.',
  },
  {
    title: 'Logistics Hub',
    description: 'Strategic location with excellent connectivity for global shipping.',
  },
];

export default function Supplier() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Manufacturing Excellence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our manufacturing facility in Pakistan combines traditional craftsmanship with modern technology to produce high-quality UNHCR Family Tents.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Facility overview */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {/* Facility image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src="/images/factory.jpg"
              alt="Manufacturing Facility"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Facility description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              World-Class Manufacturing
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our facility in Pakistan is equipped with state-of-the-art machinery and staffed by skilled craftsmen with decades of experience in tent manufacturing. We maintain rigorous quality control standards throughout the production process.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {facilities.map((facility) => (
                <div key={facility.title} className="relative">
                  <dt className="font-semibold text-gray-900">{facility.title}</dt>
                  <dd className="mt-2 text-gray-600">{facility.description}</dd>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Certifications & Standards
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our manufacturing facility maintains the highest standards of quality and compliance, ensuring every tent meets international specifications.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
                >
                  <dt className="font-semibold text-gray-900">{cert.name}</dt>
                  <dd className="mt-2 text-sm text-gray-600">{cert.description}</dd>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quality commitment */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Commitment to Quality
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every tent undergoes thorough quality control checks at multiple stages of production. Our commitment to excellence ensures that each tent meets the highest standards of durability and reliability.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 