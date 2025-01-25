'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const specifications = [
  { name: 'Dimensions', value: '4.0 x 6.4 meters (outer tent)' },
  { name: 'Center Height', value: '2.4 meters' },
  { name: 'Wall Height', value: '1.8 meters' },
  { name: 'Total Area', value: '25.6 square meters' },
  { name: 'Material', value: 'Cotton/Polyester blend, waterproof' },
  { name: 'Wind Resistance', value: 'Up to 80 km/h' },
  { name: 'Water Resistance', value: '≥ 40 hPa (400mm)' },
  { name: 'UV Resistance', value: 'Maximum protection factor' },
];

const features = [
  'Double-fly with ground sheet',
  'Fire retardant to international standards',
  'Rot-proof and water-resistant',
  'Suitable for hot and cold climates',
  'Easy to set up and maintain',
  'Includes all necessary poles and pegs',
  'Reinforced attachment points',
  'Multiple ventilation options',
];

export default function Products() {
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
              UNHCR Family Tents
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our tents are designed and manufactured to meet UNHCR standard specifications, providing safe and comfortable shelter for families in need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product details */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src="/images/tent-specs.jpg"
              alt="UNHCR Family Tent Specifications"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {specifications.map((spec) => (
                <div key={spec.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{spec.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg bg-white px-6 py-4 shadow-sm"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 