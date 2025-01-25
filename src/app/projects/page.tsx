'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Emergency Response in Yemen',
    description: 'Rapid deployment of 1,000 family tents in response to humanitarian crisis, providing shelter to displaced communities.',
    image: '/images/yemen-project.jpg',
    stats: {
      tents: '1,000 units',
      timeline: '45 days',
      beneficiaries: '6,000+ people',
    },
  },
  {
    title: 'Sudan Relief Program',
    description: 'Strategic distribution of family tents across multiple regions, supporting international aid efforts.',
    image: '/images/sudan-project.jpg',
    stats: {
      tents: '1,500 units',
      timeline: '60 days',
      beneficiaries: '9,000+ people',
    },
  },
  {
    title: 'Syrian Refugee Support',
    description: 'Long-term shelter solution program in collaboration with international NGOs, providing safe housing for displaced families.',
    image: '/images/syria-project.jpg',
    stats: {
      tents: '2,000 units',
      timeline: '90 days',
      beneficiaries: '12,000+ people',
    },
  },
];

export default function Projects() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Projects</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how our UNHCR Family Tents have made a difference in humanitarian missions across the Middle East and Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project details */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">{project.description}</p>

                {/* Project stats */}
                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <dt className="text-sm font-medium text-gray-500">Tents Deployed</dt>
                    <dd className="mt-1 text-2xl font-semibold text-gray-900">
                      {project.stats.tents}
                    </dd>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                    <dd className="mt-1 text-2xl font-semibold text-gray-900">
                      {project.stats.timeline}
                    </dd>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <dt className="text-sm font-medium text-gray-500">People Helped</dt>
                    <dd className="mt-1 text-2xl font-semibold text-gray-900">
                      {project.stats.beneficiaries}
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Contact us to discuss how we can support your humanitarian mission with our high-quality UNHCR Family Tents.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 