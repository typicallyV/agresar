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
            'Agresar is an attempt to bring structure <br/> to random act of kindness.',
        },
        button: {
          type: 'primary',
          text: 'Know More',
        },
      },
      right: {
        img: {
          src: '/assets/home/one/right.png',
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
        p: `Agresar Foundation brings to the fore, pertinent issues that plague
        the society and collaborates with enablers to bring about a change.
        The foundation is run by self-driven, socially accountable and
        morally balanced youth who wish to give their bit and more to the
        society.`,
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
      p: 'At Agresar Foundation, we celebrate the National Mathematics day on a Birth Anniversary of the great Indian mathematician Dr. Srinivasa Ramanujan. He was elected as a fellow at Trinity College, Cambridge and made a great contribution in the field of mathematics.',
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
              'Agresar Foundation has supported underpriviledged students by providing scholarships and financial aid for their education. The foundation focuses on ensuring access to quality education, particularly for economically disadvantaged students.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Environment',
            content:
              'Agresar Foundation actively engages in environmental conservation efforts, including afforestation programs, waste management initiatives, and awareness campaigns to promote sustainability.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Ambulance Services',
            content:
              'Agresar Foundation operates ambulance services to provide timely medical assistance to those in need. This initiative ensures access to emergency healthcare, especially in remote areas.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Covid-2019 Relief Work',
            content:
              'During the Covid-19 pandemic, Agresar Foundation played a crucial role in relief efforts by distributing food supplies, medical kits, and protective gear to affected communities.',
            openIcon: '/AccordianOpen.svg',
            closeIcon: '/AccordianClose.svg',
          },
          {
            title: 'Cash Donation',
            content:
              'Agresar Foundation facilitates direct financial assistance to individuals and families in distress, supporting healthcare, education, and other essential needs through cash donations.',
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
      h2: 'Share your love, and give hope to those in need',
      p: 'your contribution and generous support is very much appreciated.',
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
            'Agresar Foundation brings to the fore, pertinent issues that plague the society and collaborates with enablers to bring about a change. The foundation is run by self-driven, socially accountable and morally balanced youth who wish to give their bit and more to the society.',
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
        p: 'Agresar has been working rigorously for the upliftment of underprivileged people society since the beginning. We have organised many events like cloth donation camps, study forums, cultural events and we are willing to do more.',
      },
      section2: {
        h2: 'Our Values',
        p: 'Agresar Foundation brings to the fore, pertinent issues that plague the society and collaborates with enablers to bring about a change. The foundation is run by self-driven, socially accountable and morally balanced youth who wish to give their bit and more to the society. Agresar Foundation brings to the fore, pertinent issues that plague the society and collaborates with enablers to bring about a change. The foundation is run by self-driven, socially accountable and morally balanced youth who wish to give their bit and more to the society.',
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
            'Agresar Foundation brings to the fore, pertinent issues that plague the society and collaborates with enablers to bring about a change. The foundation is run by self-driven, socially accountable and morally balanced youth who wish to give their bit and more to the society.',
        },
        {
          year: '2018',
          content:
            'By 2018, Agresar expanded its footprint in rural areas, emphasizing financial literacy, entrepreneurship, and social empowerment under the “Be Eke Be” initiative. The foundation conducted intensive training programs for women-led SHGs, enabling them to manage finances, access microloans, and establish income-generating activities. Health and hygiene interventions were also introduced, with awareness programs on menstrual health and sanitation. In addition, Agresar collaborated with local stakeholders to set up village enterprises, ensuring that community members had access to sustainable livelihood opportunities. This year reinforced Agresar’s vision of self-reliant rural communities driven by grassroots leadership.',
        },
        {
          year: '2019',
          content:
            'Agresar intensified its women’s empowerment initiatives in 2019 by expanding the “Be Eke Be” program, which had begun demonstrating tangible impact. Women participants url their own small businesses, including poultry farming, tailoring, and local handicraft production, backed by Agresar’s mentorship and financial support. The foundation also launched a farmer-led initiative to promote organic farming techniques and water conservation methods, improving agricultural resilience. Moreover, skill development programs were extended to rural youth, equipping them with vocational skills that increased employability. Agresar’s holistic approach strengthened community structures, allowing rural individuals to achieve economic independence.',
        },
        {
          year: '2020',
          content:
            'The COVID-19 pandemic presented unprecedented challenges in 2020, disrupting livelihoods and essential services. In response, Agresar quickly mobilized relief efforts, distributing food supplies, hygiene kits, and medical aid to affected families. The “Be Eke Be” initiative played a crucial role in crisis response, as women-led SHGs stepped up to produce masks and sanitizers, generating income while contributing to public health efforts. Agresar also facilitated digital learning programs to prevent education loss among rural children. Despite the setbacks caused by the pandemic, the foundation’s adaptive strategies ensured that communities remained resilient and continued progressing toward self-sufficiency.',
        },
        {
          year: '2021',
          content:
            'As recovery efforts gained momentum in 2021, Agresar strengthened its core programs, with a renewed emphasis on digital literacy and entrepreneurship. The “Be Eke Be” movement evolved to incorporate digital financial literacy, helping rural women access and manage bank accounts, digital payments, and credit facilities. Rural youth were trained in computer skills, enhancing their employability in an increasingly digital economy. Agresar also reinforced its focus on sustainable agriculture by introducing new climate-resilient farming techniques. Healthcare access was expanded through mobile medical camps, ensuring that underserved communities received essential medical care.',
        },
        {
          year: '2022',
          content:
            'In 2022, Agresar deepened its commitment to environmental sustainability and rural entrepreneurship. The “Be Eke Be” initiative facilitated the establishment of more women-led enterprises, ranging from dairy farming to small-scale retail businesses. Agresar also introduced climate-smart agricultural practices, equipping farmers with knowledge on organic pest control, soil conservation, and water management. Waste management and afforestation projects were launched in several villages to promote ecological balance. The foundation further expanded its outreach by conducting policy advocacy, engaging with local governments to drive systemic changes in rural development.',
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
            'Agresar is an attempt to bring structure to random act of kindness.',
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
     three: { left: { h3: 'Education & Scholarship', p: 'Agresar Foundation brings to the fore, pertinent issues that plague the society and collaborates with enablers to bring about a change. The foundation is run by self-driven, socially accountable and morally balanced youth who wish to give their bit and more to the society.', }, 
     right: { 
      img: { src: '/assets/events/six/item-5.jpg',
         alt: 'eventsTwoRight', 
       height: 450,
width: 450,

     }, 
    },
  },
  six: { left: { h3: 'WHAT IS बे एके बे ?', p: ' t Agresar Foundation, we celebrate the National Mathematics day on a Birth Anniversary of the great Indian mathematician Dr. Srinivasa Ramanujan. He was elected as a fellow at Trinity College, Cambridge and made a great contribution in the field of mathematics. Some of his well known contributions are Complex Analysis, Number Theory, Infinite Series Continued Fraction, etc.Agresar Foundation organizes an event named बे एके बे every year. Under an umbrella of the बे एके बे event we carry out various competitions, expert guest guidance lectures, etc. to increase the curiosity of students as well as spread mathematical awareness among the general public', }
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
      p: 'At Agresar Foundation, we celebrate the National Mathematics day on a Birth Anniversary of the great Indian mathematician Dr. Srinivasa Ramanujan. He was elected as a fellow at Trinity College, Cambridge and made a great contribution in the field of mathematics. Some of his well known contributions are Complex Analysis, Number Theory, Infinite Series Continued Fraction, etc. <br/> Agresar Foundation organizes an event named बे एके बे every year. Under an umbrella of the बे एके बे event we carry out various competitions, expert guest guidance lectures, etc. to increase the curiosity of students as well as spread mathematical awareness among the general public.',
      
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

      p: 'At Agresar Foundation, we celebrate the National Mathematics day on a Birth Anniversary of the great Indian mathematician Dr. Srinivasa Ramanujan. He was elected as a fellow at Trinity College, Cambridge and made a great contribution in the field of mathematics. Some of his well known contributions are Complex Analysis, Number Theory, Infinite Series Continued Fraction, etc. <br/> Agresar Foundation organizes an event named बे एके बे every year. Under an umbrella of the बे एके बे event we carry out various competitions, expert guest guidance lectures, etc. to increase the curiosity of students as well as spread mathematical awareness among the general public.',
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
