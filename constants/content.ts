import { profile } from "console"
import image from "next/image"
import { text } from "stream/consumers"
import style from "styled-jsx/style"
 

// import foodKit from '../assets/images/foodKit.svg'
export const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' }, 
  { text: 'Events', href: '/events' },
  { text: 'Contact Us', href: '/contact' },
   
   
  
]

export const content = {
  home: {
    one: {
      left: {
        h2: {
          dangerouslySetInnerHTML: 'Agresar <br/> <span> Foundation </span>',
        },
        p: {
          dangerouslySetInnerHTML:
            'At Agresar, we believe every small act of kindness matters. We bring people together, turning individual effort into real, meaningful change for those who need it most.',
        },
        
      },
      right: {
        img: {
          src: '/assets/home/one/Untitled.png',
          alt: 'homeright',
           width: 2500, 
         height: 2580,
        },
      },
    },
    two: {
      left: { img: { 
        src: '/assets/home/five/kids.png',
         alt: 'homeTwoLeft...', 
         width: 1800, 
         height: 1280, 
        }, 
      },
      right: {
        h2: 'About Us',
        h3: 'Founded in May 2017',
        p: `Agresar Foundation started with a simple belief — small efforts, when united, can change the world around us. We work on education, poverty, and the environment, bringing the right people together to drive real change. Our team of young, self-driven individuals don't just show up — they give everything they have.`,
      },
       
     hyperlink: {
       
          text: 'Know More',
         
        href: '/about',
        img: {
          src: '/assets/home/eight/leftArrow.svg',
          alt: 'leftArrow',
          height: 16,
          width: 16,
        },
      },


    },
    three: {
      h2: 'Our Numbers',
      cards: [
        {
          h1: 11000,
          p: {
            dangerouslySetInnerHTML: 'Food Kit <br/> Donation',
          },
          icon: {
            src: '/foodKit.svg',
            alt: 'foodKit',
            height: 116,
            width: 116,
          },
        },
        {
          h1: 800,
          p: {
            dangerouslySetInnerHTML: 'Tree <br/> Plantation',
          },
          icon: {
            src: '/plantation.svg',
            alt: 'plantation',
            height: 116,
            width: 116,
          },
        },
        {
          h1: 2948,
          p: {
            dangerouslySetInnerHTML: 'Student <br/> Scholarship',
          },
          icon: {
            src: '/scholarship.svg',
            alt: 'scholarship',
            height: 116,
            width: 116,
          },
        },
      ],
    },
    four: {
      logo: {
        src: '/assets/home/four/beekbe.png',
        alt: 'beekbe',
        height: 500,
        width: 304,
      },
      h2: 'WHAT IS बे एके बे ?',
      p: 'At Agresar Foundation, learning is not limited to classrooms. Our initiative "Be Eke Be" celebrates National Mathematics Day observed on the birth anniversary of the legendary Dr. Srinivasa Ramanujan, bringing the joy of numbers to life through competitions, wall paintings, and interactive sessions. With one simple goal: to remove fear and build curiosity among students.',
      button: {
        type: 'secondary',
        text: 'Know More',
      },
    },
    five: {
      h2: 'Our Work',
      left: {
        accordions: [
          {
            title: 'Education & Scholarship',
            content:
              'We support students from economically weaker sections through financial assistance, scholarships, and access to quality education. From study forums to night schools, we ensure no child is ever deprived of the opportunity to learn.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Environment',
            content:
              'Through plantation drives, waste management, and awareness campaigns, we work towards building a cleaner, more sustainable future. Because small steps taken today are the foundation of a healthier tomorrow.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Ambulance Services',
            content:
              'We provide timely ambulance services to ensure no medical emergency goes unattended — reaching those who need urgent care the most, especially in areas where help is not always available.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Covid-2019 Relief Work',
            content:
              'When COVID-19 brought the world to a halt, Agresar stood where it was needed most — distributing food supplies, medical kits, and protective gear to communities that had nowhere else to turn.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Cash Donation',
            content:
              'We believe every contribution, big or small, has the power to change a life. Through donation drives and campaigns, we channel collective generosity towards healthcare, education, and essential needs for families in distress.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
        ],
      },
      right: {
        img: {
          src: '/assets/home/five/right.png',
          alt: 'homeFiveRight',
          height: 500,
          width: 496,
        },
      },
    },
    six: {},
    seven: {
      h2: 'Our other wings',
      cards: [
        {
          src: '/assets/home/seven/eSthree.png',
          alt: 'eSthree',
          height: 120,
          width: 204,
        },
        {
          src: '/assets/home/seven/nFirst.png',
          alt: 'nFirst',
          height: 42,
          width: 254,
        },
      ],
    },
    eight: {
      h2: 'What they say about us.',
      h4: 'The pillar of development, Honorable Union Minister Shri Nitinji Gadkari, extended his best wishes to Agresar Foundations "Be Ek Be" program. He acknowledged the work of Agresar Foundation volunteers, appreciated their efforts, and expressed support for our upcoming projects.',
      cards: [
        {
          review:
            'Grateful for the opportunity to be part of Agresar foundation journey. Their work empowering women through E-stree, promoting education truly stands out.',
          profile: {
            name: 'Minakshi Rokade',
            image: {
              src: '/assets/home/eight/quotes.png',
              alt: '',
            },
          },
        },
        {
          review:
            'I am very happy to be in Agresar Foundation. Sometimes it feels like this is our family, not an NGO and this is our second family. Best team work. We do a lot of activities here and all these activities are appreciated. We enjoy every moment of this organization.#agresar foundation.',
          profile: {
            name: 'Mona Bhandekar',
            image: {
              src: '/assets/home/eight/quotes.png',
              alt: '',
            },
          },
        },
        {
          review:
            'Agresar Foundation is working so much hard to improve the society welfare and to develop a good social environment. It also helps students, child and also works for women empowerment ❤️..!!! Proud to be a part of this team and family as well!',
          profile: {
            name: 'Rushika Londhe',
            image: {
              src: '/assets/home/eight/quotes.png',
              alt: '',
            },
          },
        },
      ],
    },
    nine: {
      h2: 'Share your kindness. Spread hope.',
      p: 'Every small act of giving creates a world of change for someone who needs it most.',
      button: {
        type: 'secondary',
        text: 'Donate',
        prefix: {
          src: '/assets/home/nine/donate.svg',
          alt: 'donate',
        },
      },
    },
    ten: {
      h2: 'Donation Drive with Milaap',
      left: {
        img: {
          src: '/assets/home/ten/left.png',
          alt: 'homeTenLeft',
          height: 585,
          width: 456,
        },
      },
      right: {
        h3: 'Agresar foundation Needs your support for Education of Children',
        p: `'Even the left hand should not know when you're giving something from the right hand'- the wise words of Piyush's aai have stuck with him since he was just a child. That was this 30-year-old’s guiding force behind establishing Agresar Foundation - an NGO that has been working tirelessly to solve the challenges pertaining to education, poverty and environment.<br/> <br/> Piyush recalls how despite having a well-paying job, he had an overwhelming urge to work for the society that just wouldn't let him sleep at night. He gathered 5 of his childhood friends and started clothing donation drives, study forums, night schools and cultural events, all funded from their own pockets.`,
        button: {
          type: 'primary',
          text: 'Donate',
          width: '215px',
          height: '68px',
          prefix: {
            src: '/assets/home/nine/donate.svg',
            alt: 'donate',
          },
          donationText: 'Need',
          donationAmount: '₹15,83,000',
        },
      },
    },
  },
  about: {
    one: {
      left: {
        h2: {
          dangerouslySetInnerHTML: 'About',
        },
        p: {
          dangerouslySetInnerHTML:
            'Agresar Foundation is built on the belief that meaningful change begins when people choose to take responsibility for the world around them. What started as a small group of friends pooling their own resources has grown into a dedicated movement — addressing real challenges in education, poverty, and the environment with consistency and heart. We do not wait for the right moment or the right resources. We work with what we have, where we are, for those who need it most.',
        },
      },
      right: {
        img: {
          src: '/assets/about/one/right.png',
          alt: 'aboutright',
          height: 576,
          width: 916,
        },
      },
    },
    two: {
      section1: {
        h2: 'What we do ?',
        p: 'Over the years, Agresar Foundation has worked consistently towards building a society where no one is left behind. From clothing donation drives and night schools to cultural programs and health initiatives, every effort has been aimed at creating real, lasting impact. Our goal is not just to help — but to empower individuals to build a better future for themselves.',
      },
      section2: {
        h2: 'Our Values',
        p: 'At Agresar, our work is guided by strong values that define who we are and how we serve. We believe in Transparency — being open, honest, and accountable in everything we do. Every action is driven by a Helping Hand — a genuine intent to support and uplift others. Honesty sits at the core of all our efforts, without exception. And through Curiosity & Growth, we constantly learn, adapt, and grow to serve better every day. These values are not just words, they are reflected in every initiative we undertake.',
        img: {
          src: '/assets/about/two/banner.png',
          alt: 'aboutTwoBanner',
          height: 487,
          width: 772,
        },
        cards: [
          {
            img: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            h3: 'Always be transparent',
          },
          {
            img: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            h3: 'Helping Hand',
          },
          {
            img: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            h3: 'Honesty',
          },
          {
            img: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            h3: 'Be Curious',
          },
        ],
      },
    },
    three: {
      h2: 'Our Journey So far',
      journey: [
        {
          year: '2017',
          content:
            'It all began in 2017, when a group of young individuals decided that waiting for change was not an option. Agresar Foundation was established with a simple yet powerful vision — that meaningful social impact does not always require grand gestures. Sometimes, all it takes is small, consistent efforts and the will to show up.',
        },
        {
          year: '2018',
          content:
            'By 2018, Agresar had expanded its footprint into rural areas, with a sharper focus on financial literacy, entrepreneurship, and social empowerment. Under the "Be Eke Be" initiative, the foundation ran dedicated training programs for women-led self-help groups — equipping them to manage their finances, access microloans, and build their own income through sustainable work. Health and hygiene interventions were introduced this year as well, with awareness programs on menstrual health and sanitation reaching communities that had rarely had access to such conversations before. Agresar also collaborated with local stakeholders to set up village enterprises, ensuring community members had real pathways to sustainable livelihoods. 2018 was the year that truly shaped Agresar and its identity a foundation committed to building self-reliant rural communities driven by grassroots leadership.',
        },
        {
          year: '2019',
          content:
            'Agresar intensified its women’s empowerment initiatives in 2019 by expanding the “Be Eke Be” program, which had begun demonstrating tangible impact. Women participants who were running their own small businesses, including poultry farming, tailoring, and local handicraft production, backed by Agresar’s mentorship and financial support. The foundation also launched a farmer-led initiative to promote organic farming techniques and water conservation methods, improving agricultural resilience. Moreover, skill development programs were extended to rural youth, equipping them with vocational skills that increased employability. Agresar’s holistic approach strengthened community structures, allowing rural individuals to achieve economic independence.',
        },
        {
          year: '2020',
          content:
            '2020 was a year no one saw coming. When COVID-19 disrupted livelihoods and essential services, Agresar did not wait — quickly mobilizing relief efforts and distributing food supplies, hygiene kits, and medical aid to affected families. The "Be Eke Be" initiative rose to the moment as women-led self-help groups stepped up to produce masks and sanitizers, generating income while contributing to public health efforts. Digital learning programs were launched to ensure rural children did not fall behind on their education. Even in the hardest year, Agresar communities showed what they were made of — resilient, resourceful, and refusing to give up.',
        },
        {
          year: '2021',
          content:
            'By 2021, as the world began to recover, Agresar shifted focus toward rebuilding stronger and smarter. The "Be Eke Be" movement evolved to include digital financial literacy — helping rural women access and manage bank accounts, digital payments, and credit facilities with confidence. Rural youth were trained in computer skills, opening new doors in an increasingly digital economy. Agresar also deepened its commitment to sustainable agriculture by introducing climate-resilient farming techniques that gave farmers better tools to face an uncertain future. Mobile medical camps were launched this year as well, bringing essential healthcare directly to underserved communities that had long been overlooked. 2021 was not just about recovery — it was about building back better.',
        },
        {
          year: '2022',
          content:
            '2022 saw Agresar go deeper — into communities, into sustainability, and into creating change that would last. The "Be Eke Be" initiative helped establish more women-led enterprises this year, ranging from dairy farming to small-scale retail businesses, giving more families a stable source of income. Climate-smart agricultural practices were introduced as well, equipping farmers with practical knowledge on organic pest control, soil conservation, and water management. Waste management drives and afforestation projects were launched across several villages, working towards restoring ecological balance one community at a time. Perhaps most significantly, 2022 marked Agresar first steps into policy advocacy — engaging directly with local governments to push for systemic changes in rural development. The work was no longer just on the ground. It was reaching the rooms where decisions are made.',
        },
        {
          year: '2023',
          content:
            'By 2023, the “Be Eke Be” initiative had become a model for grassroots economic empowerment, demonstrating significant improvements in women’s financial independence and community resilience. Agresar scaled up its impact assessment framework, analyzing data to refine and enhance its programs. Training modules were updated to align with evolving industry needs, ensuring that rural youth and women had access to relevant skill-building opportunities. The foundation also strengthened its advocacy efforts, engaging policymakers and stakeholders to promote inclusive development policies. Digital platforms were introduced to improve training accessibility and streamline financial inclusion efforts, reinforcing Agresar’s commitment to innovation and long-term sustainability.',
        },
      ],
    },
    five: {
      h3: 'Our Team',
      p: "We know you'll like them as much as we do",
      cards: [
        {
          img: {
            src: '/assets/about/five/card.png',
            alt: 'card',
            height: 400,
            width: 400,
          },
          height: 400,
          width: 400,
          name: 'Piyush Kulkarni',
          designation: 'Founder',
        },
        {
          img: {
            src: '/assets/about/five/card.png',
            alt: 'card',
            height: 400,
            width: 400,
          },
          height: 400,
          width: 400,
          name: 'Piyush Kulkarni',
          designation: 'Founder',
        },
      ],
    },
  },
  events: {
    one: {
      left: {
        h2: {
          dangerouslySetInnerHTML: 'Events',
        },
        p: {
          dangerouslySetInnerHTML:
            'At Agresar Foundation, every event is an opportunity to create awareness, inspire change, and bring people together for something that truly matters. Because when people unite with a shared purpose, real impact does not just happen, it stays.',
        },
      },
      right: {
        img: {
          src: '/assets/about/one/right.png',
          alt: 'aboutright',
          height: 576,
          width: 716,
        },
      },
    },
     three: { left: { h3: 'Education & Scholarship', p: 'Education has always been at the heart of Agresar Foundation. We believe that access to quality education can transform not just individual lives, but entire communities. Through scholarships, study resources, and learning platforms, we support students from economically weaker sections — because financial limitations should never stand between a child and their future.', }, 
     right: { 
      img: { src: '/assets/events/six/item-5.jpg',
         alt: 'eventsTwoRight', 
       height: 450,
width: 450,

     }, 
    },
  },
  six: { left: { h3: 'WHAT IS बे एके बे ?', p: ' "Be Eke Be" is one of our most unique and impactful initiatives, organized every year on National Mathematics Day to honor the legacy of the great Indian mathematician Dr. Srinivasa Ramanujan. Designed to make mathematics engaging, enjoyable, and accessible, this initiative moves away from traditional learning and focuses on activity-based approaches that spark curiosity and remove the fear of numbers. Through mathematics competitions, quizzes, expert guidance sessions, wall painting, and creative design contests, we create an experience where students do not just learn mathematics — they fall in love with it.', }
  , right: { img: { src: '/assets/events/four/beekbe.png', alt: 'eventsTwoRight',  
   height: 450,
width: 450,

     }, 
    },
  },
     
    
     
    
    seven: {
      h3: 'Come Join our Volunteer',
      p: `We're always looking for great Volunteers`,
      button: {
        type: 'secondary',
        text: 'Apply Now',
        width: '151px',
        height: '48px',
      },
      img: {
        src: '/assets/events/five/volunteer.png',
        alt: 'volunteer',
        height: 241,
        width: 241,
      },
    },
  },
  contact: {
    one: {
      section1: {
        h2: 'Contact Us',
        img: {
          src: '/assets/contact/one/left.png',
          alt: 'contactOneLeft',
          height: 636,
          width: 378,
        },
      },
      section2: {
        contacts: [
          {
            icon: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            text: '413, Opposite Bangde Dairy, Umred Road, Siraspeth',
          },
          {
            icon: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            text: '+91 7030000203',
          },

          {
            icon: {
              src: '/foodKit.svg',
              alt: 'foodKit',
              height: 116,
              width: 116,
            },
            text: 'agresar.foundation@gmail.com',
          },
        ],
      },
    },
  },
  footer: {
    logo: {
      src: '/logo.svg',
      alt: 'logo',
      width: 182,
      height: 114,
    },
    social: [
      {
        src: '/assets/footer/insta.svg',
        alt: 'insta',
        height: 34,
        width: 34,
      },
      {
        src: '/assets/footer/fb.svg',
        alt: 'fb',
        height: 34,
        width: 34,
      },
      {
        src: '/assets/footer/twitter.svg',
        alt: 'twitter',
        height: 34,
        width: 34,
      },
    ],
    columns: [
      {
        title: 'Contact',
        links: [
          {
            withIcon: true,
            icon: {
              src: '/assets/footer/location.svg',
              alt: 'location',
              width: 24,
              height: 24,
            },
            text: '413, Opposite Bangde Dairy, Umred Road, Siraspeth, Nagpur',
          },
          {
            withIcon: true,
            icon: {
              src: '/assets/footer/email.svg',
              alt: 'email',
              width: 24,
              height: 24,
            },
            text: 'agresar.foundation@gmail.com',
          },
          {
            withIcon: true,
            icon: {
              src: '/assets/footer/phone.svg',
              alt: 'phone',
              width: 24,
              height: 24,
            },
            text: '+919960244888',
          },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          {
            text: 'Home',
            href: '/',
          },
          {
            text: 'About Us',
            href: '/about',
          },
          {
            text: 'Events',
            href: '/events',
          },
          {
            text: 'Contact Us',
            href: '/contact',
          },
        ],
      },

      {
        title: 'Programs',
        links: [
          {
            text: 'Environment',
            href: '/environment',
          },
          {
            text: 'Education',
            href: '/education',
          },
        ],
      },
    ],
    iframe: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4776584434862!2d79.10449447587858!3d21.133381080542147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1525145a53f%3A0x6bd3d36bcdd80df!2sAgresar%20Foundation!5e0!3m2!1sen!2sin!4v1682788369012!5m2!1sen!2sin',
      width: '284',
      height: '222',
      style: { border: 0, borderRadius: '22px' },
    },
    bottom: {
      left: [
        {
          text: `Copyright © ${new Date().getFullYear()} Agresar Foundation`,
          href: '',
        },
      ],
      right: [
        { text: 'Terms of use', href: '' },
        {
          text: 'Privacy Policy',
          href: '',
        },
      ],
    },
  },
  'be-ek-be': {
    one: {
      left: {
        h2: 'बे एके बे',
        p: 'Agresar is an attempt to bring structure to random act of kindness.',
      },
      right: {
        img: {
          src: '/assets/be-ek-be/one/beEkBe.png',
          alt: 'beEkBeRight',
          height: 586,
          width: 577,
        },
      },
    },
    two: {
      h2: 'WHAT IS बे एके बे ?',
      p: '"Be Eke Be" was born from one simple observation — mathematics is a subject most students fear, not because it is hard, but because it was never made interesting. Agresar Foundation decided to change that by creating an entire campaign around making numbers feel exciting, accessible, and worth celebrating. The campaign launched with branded "Be Eke Be" T-shirts sold across Nagpur. The response was overwhelming — people from all parts of the city bought and wore them with pride. It was Agresar first step in turning mathematics awareness into a street level movement. 38 schools from across Nagpur participated in this one of a kind competition. Students competed in table recitation with enormous energy, taking home custom designed "Be Eke Be" trophies. The event was held at South Central Zone Cultural Centre, Nagpur.',
      
    },
    three: {
      h2: 'Number of participants',
      cards: [
        {
          h1: 7000,
          p: {
            dangerouslySetInnerHTML: 'Year 2019',
          },
          icon: {
            src: '/foodKit.svg',
            alt: 'foodKit',
            height: 116,
            width: 116,
          },
        },
        {
          h1: 5000,
          p: {
            dangerouslySetInnerHTML: 'Year 2020',
          },
          icon: {
            src: '/plantation.svg',
            alt: 'plantation',
            height: 116,
            width: 116,
          },
        },
        {
          h1: 8000,
          p: {
            dangerouslySetInnerHTML: 'Year 2021',
          },
          icon: {
            src: '/scholarship.svg',
            alt: 'scholarship',
            height: 116,
            width: 116,
          },
        },
      ],

      p: 'Youth volunteers conduct free evening tuitions covering Maths, Science and Social Science along with hands on computer training. Students also receive notebooks, course books and study material — all provided at no cost.',
      img: {
        src: '/assets/be-ek-be/three/banner.png',
        alt: 'beEkBeThree',
        height: 487,
        width: 772,
      },
    },
    four: {
      h2: 'Work',
      cards: [
        {
          bg: '/assets/home/six/item-1.png',
          profile: {
            src: '/assets/home/six/logo.svg',
            alt: 'profile',
            height: 62,
            width: 62,
          },
          p: '',
        },
      ],
    },
  },
  donationModal: {
    header: {
      text1: 'Help Us to Make Bigger Impact!',
      text2: 'Please take a moment to Donate!!',
    },
    content: {
      left: {
        img: {
          src: '/assets/donation/qr.png',
          alt: 'qr',
          height: 289,
          width: 289,
        },
      },
      right: {
        h3: 'Bank Details',
        bankDetails: [
          {
            name: 'Account Name',
            value: 'Agresar Foundation',
          },
          {
            name: 'Account Number',
            value: '640101010050689',
          },
          {
            name: 'IFSC Code',
            value: 'UBIN0564010',
          },
          {
            name: 'Bank Name',
            value: 'Union Bank of India',
          },
        ],
      },
    },
  },
}
