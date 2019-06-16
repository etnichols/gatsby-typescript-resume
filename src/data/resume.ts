import { Section } from '../@types/resume.d.ts'

const data: Resume = {
  sections: [
    {
      title: 'Work experience',
      entries: [
        {
          title: 'Lifeguard',
          company: 'Round Hill Pool',
          link: "https://roundhillclub.org/pool",
          duration: {
            start: 'June 2018',
            end: 'Present',
          },
          description:
            'Maintain constant surveillance of patrons in the facility. Act immediately and appropriately to secure safety of patrons in the event of emergency. Provides emergency care and treatment as required until the arrival of emergency medical services. Work the snack bar during breaks.',
        },
        {
          title: 'Web developer',
          company: 'Creative Industries, LLC',
          duration: {
            start: 'May 2016',
            end: 'May 2018',
          },
          description:
            'Created a very interesting application that solved a serious supply chain management problem for client, increasing supply chain efficiency by 38%. Diagnosed and fixed multiple legacy system issues, organized company soccer league on Tuesday nights.',
        },
        {
          title: 'Yoga instructor',
          company: 'Unlimited Yin, LLC',
          duration: {
            start: 'September 2013',
            end: 'February 2015',
          },
          description:
            'Taught weekly classes at the yoga studio, including, but not limited to: anusara, ashtanga, bikram, hatha, hot yoga, iyengar restorative and vinyasa.',
        },
        {
          title: 'Astronaut',
          company: 'NASA',
          duration: {
            start: 'July 1969',
            end: 'August 1970',
          },
          description:
          'Organized and execute the first crewed mission to the Moon. Developed flight plans, coordinated with other astronauts, steered the ship. Demonstrated creative thinking in order to overcome GPS-issues on the spacecraft during the mission.',
        },
      ],
    },
    {
      title: 'Honors and Awards',
      entries: [
        {
          description: [
            'National Honors Society (2012-2014)',
            '2012 TIME Magainze Volunteer of the Year',
            '1st Place - 2011 FIRST Robotics Midwest Regional Competition',
            '2nd Place - 2007 Northwest Middle School Spelling Bee'
          ],
        },
      ],
    },
    {
      title: 'Education',
      entries: [
        {
          company: 'M.S., Computer Science',
          title: 'University of the Great Plains',
          duration: {
            start: 'May 2018',
            end: 'May 2019',
          },
          description: 'GPA: 2.718 / 4.00',
        },
        {
          company: 'B.S., Graphic Design',
          title: 'Northwill College',
          duration: {
            start: 'Aug 2013',
            end: 'May 2017',
          },
          description: 'GPA: 3.14 / 4.00',
        },
      ],
    },
    {
      title: 'Projects',
      entries: [
        {
          title: 'Bicycle-powered XBox',
          duration: {
            start: 'March 2019',
            end: 'Present',
          },
          description:
            'Design and develop a patented bicycle powered XBox so I can work out while I play Fortnite.',
        },
        {
          title: 'Personal Blog',
          link: 'https://www.theblogstarter.com/',
          duration: {
            start: 'November 2017',
            end: 'January 2018',
          },
          description:
            "Write a variety of stories of varying quality on a variety of topics. Occasionally, make memes.",
        },
        {
          title: 'Lemonade stand',
          duration: {
            start: 'May 2012',
            end: 'September 2012',
          },
          description:
            'Ran a successful lemonade stand for several months using organic, hyper-local ingredients from family-owned farms, with a 500% net profit.',
        },
      ],
    },
  ],
}

export default data
