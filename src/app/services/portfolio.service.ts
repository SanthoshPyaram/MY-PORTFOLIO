import { Injectable, signal } from '@angular/core';
import { Project, SkillCategory, SkillItem, Certification, Achievement, Education, SocialProfile } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly developerName = 'Santhosh Reddy Pyaram';
  readonly registrationNo = '24MIC7312';
  readonly institution = 'VIT-AP UNIVERSITY';
  readonly course = 'SWE3004 FRONTEND DESIGN AND TESTING';
  readonly role = 'Integrated M.Tech in Computer Science & Engineering | Software Developer';
  readonly email = 'santhoshpyaram@gmail.com';
  readonly phone = '+91 7287954409';
  readonly location = 'Bondaladinne, Tadipatri, Anantapur, Andhra Pradesh, India';
  readonly githubRepo = 'https://github.com/SanthoshPyaram/MY-PORTFOLIO.git';

  // Active selected project for modal viewing
  selectedProject = signal<Project | null>(null);

  readonly socialProfiles: SocialProfile[] = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pyaram-santhosh',
      icon: 'bi-linkedin',
      colorClass: 'text-info',
      title: 'LinkedIn: pyaram-santhosh'
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/SanthoshPyaram/',
      icon: 'bi-code-slash',
      colorClass: 'text-warning',
      title: 'LeetCode Profile'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/SanthoshPyaram',
      icon: 'bi-github',
      colorClass: 'text-primary',
      title: 'GitHub Profile'
    },
    {
      platform: 'Phone',
      url: 'tel:7287954409',
      icon: 'bi-telephone-fill',
      colorClass: 'text-success',
      title: 'Call Santhosh'
    },
    {
      platform: 'Email',
      url: 'mailto:santhoshpyaram@gmail.com',
      icon: 'bi-envelope-at-fill',
      colorClass: 'text-primary',
      title: 'Email Santhosh'
    }
  ];

  readonly educationList: Education[] = [
    {
      degree: 'Integrated M.Tech in Computer Science & Engineering',
      institution: 'VIT-AP UNIVERSITY',
      period: '2024 – 2029',
      score: '9.68 / 10 CGPA',
      scoreType: 'Current CGPA',
      scoreBadgeClass: 'bg-success',
      status: 'Currently Pursuing',
      streamOrFocus: 'Computer Science & Software Engineering',
      details: 'Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Database Management Systems, Web Technologies, Computer Networks, Operating Systems, Discrete Mathematics.'
    },
    {
      degree: 'Higher Secondary Education / Intermediate (Class XI – XII)',
      institution: 'Narayana Junior College',
      period: '2022 – 2024',
      score: '982 / 1000 (98.2%)',
      scoreType: 'Intermediate Score',
      scoreBadgeClass: 'bg-primary',
      status: 'Completed',
      streamOrFocus: 'MPC (Mathematics, Physics, Chemistry)',
      details: 'Mathematics, Physics, Chemistry (MPC) with rigorous analytical problem-solving foundation.'
    },
    {
      degree: 'Secondary School Certificate (SSC / Class X)',
      institution: 'APRSOE Kodigenahalli',
      period: '2022',
      score: '589 / 600 (98.17%)',
      scoreType: 'SSC Score',
      scoreBadgeClass: 'bg-info',
      status: 'Completed',
      streamOrFocus: 'General Sciences & Mathematics',
      details: 'General Sciences, Mathematics, English Communication, and Foundational Information Technology.'
    }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      subtitle: 'Core Languages',
      icon: 'bi-terminal-split',
      items: [
        { name: 'Java', icon: 'bi-cup-hot', iconColor: 'text-warning', status: 'Proficient', statusClass: 'status-core', percentage: 75 },
        { name: 'Python', icon: 'bi-filetype-py', iconColor: 'text-info', status: 'Proficient', statusClass: 'status-core', percentage: 70, progressBarClass: 'progress-cyan' },
        { name: 'Data Structures & Algo', icon: 'bi-braces', iconColor: 'text-primary', status: 'Proficient', statusClass: 'status-core', percentage: 72 }
      ]
    },
    {
      title: 'Frontend',
      subtitle: 'UI & Modern Frameworks',
      icon: 'bi-window-stack',
      items: [
        { name: 'HTML5 & CSS3', icon: 'bi-filetype-html', iconColor: 'text-danger', status: 'Core Tech', statusClass: 'status-core', percentage: 85 },
        { name: 'JavaScript (ES6+)', icon: 'bi-filetype-js', iconColor: 'text-warning', status: 'Core Tech', statusClass: 'status-core', percentage: 75, progressBarClass: 'progress-cyan' },
        { name: 'TypeScript & Angular', icon: 'bi-filetype-tsx', iconColor: 'text-primary', status: 'Core Framework', statusClass: 'status-core', percentage: 80, progressBarClass: 'progress-cyan' },
        { name: 'Bootstrap 5', icon: 'bi-bootstrap-fill', iconColor: 'text-primary', status: 'Responsive Grid', statusClass: 'status-core', percentage: 85 },
        { name: 'React', icon: 'bi-atom', iconColor: 'text-info', status: 'Familiar', statusClass: 'status-practicing', percentage: 60, progressBarClass: 'progress-amber' }
      ]
    },
    {
      title: 'Backend & Storage',
      subtitle: 'Server & Databases',
      icon: 'bi-server',
      items: [
        { name: 'Node.js & Express', icon: 'bi-node-plus-fill', iconColor: 'text-success', status: 'REST APIs', statusClass: 'status-practicing', percentage: 65 },
        { name: 'MongoDB', icon: 'bi-database', iconColor: 'text-success', status: 'NoSQL', statusClass: 'status-core', percentage: 70, progressBarClass: 'progress-cyan' },
        { name: 'SQL / SQL Server', icon: 'bi-table', iconColor: 'text-info', status: 'Relational', statusClass: 'status-core', percentage: 72 }
      ]
    }
  ];

  readonly ecsSkills: SkillItem[] = [
    { name: 'Embedded Systems', icon: 'bi-cpu', iconColor: 'text-info', status: 'ECS Core', statusClass: 'status-core', percentage: 75, progressBarClass: 'progress-cyan' },
    { name: 'IoT Fundamentals', icon: 'bi-broadcast', iconColor: 'text-primary', status: 'Connected Tech', statusClass: 'status-core', percentage: 70, progressBarClass: 'progress-cyan' },
    { name: 'Sensor-Based Systems', icon: 'bi-activity', iconColor: 'text-warning', status: 'Sensing', statusClass: 'status-core', percentage: 72, progressBarClass: 'progress-amber' },
    { name: 'Hardware-Software Integration', icon: 'bi-motherboard', iconColor: 'text-success', status: 'Integration', statusClass: 'status-core', percentage: 74, progressBarClass: 'progress-cyan' },
    { name: 'Assistive Technology', icon: 'bi-universal-access', iconColor: 'text-info', status: 'Accessibility', statusClass: 'status-practicing', percentage: 70, progressBarClass: 'progress-cyan' },
    { name: 'Environmental Technology', icon: 'bi-wind', iconColor: 'text-success', status: 'Clean Tech', statusClass: 'status-practicing', percentage: 68, progressBarClass: 'progress-cyan' }
  ];

  readonly softSkills: { name: string; icon: string; colorClass: string }[] = [
    { name: 'Problem Solving', icon: 'bi-puzzle-fill', colorClass: 'text-warning' },
    { name: 'Team Collaboration', icon: 'bi-people', colorClass: 'text-info' },
    { name: 'Analytical Thinking', icon: 'bi-graph-up-arrow', colorClass: 'text-success' },
    { name: 'Adaptability & Rapid Learning', icon: 'bi-arrow-repeat', colorClass: 'text-primary' },
    { name: 'Time Management', icon: 'bi-clock-history', colorClass: 'text-danger' },
    { name: 'Communication Skills', icon: 'bi-chat-left-dots-fill', colorClass: 'text-cyan' }
  ];

  readonly projects: Project[] = [
    {
      id: 'agriculture',
      title: 'Smart Agriculture System',
      subtitle: 'Data-driven crop analytics and market price prediction platform',
      category: 'Agri-Tech Platform',
      categoryBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      typeBadge: 'Academic Project',
      description: 'A data-driven agriculture project that explores crop information, farmer data, market prices, supply and demand, storage, transportation, weather, and price prediction to support agricultural decision-making.',
      image: 'assets/project-agriculture.jpg',
      tags: ['Python', 'MongoDB', 'Data Analysis', 'Prediction Models', 'IoT Analytics'],
      modalId: 'projectModalAgriculture',
      overview: 'A data-driven agriculture project that explores crop information, farmer data, market prices, supply and demand, storage, transportation, weather, and price prediction to support agricultural decision-making.',
      capabilities: [
        { title: 'Crop & Soil Analytics', description: 'Tracks soil moisture, environmental temperature, and nutrient metrics.' },
        { title: 'Price Forecasting', description: 'Utilizes historical crop pricing trends to forecast seasonal market value peaks.' },
        { title: 'Cold Storage & Logistics', description: 'Simulates transit routes and warehouse capacity utilization for harvested yields.' },
        { title: 'Farmer Decision Support', description: 'Presents clear recommendations on planting schedules and optimal selling cycles.' }
      ],
      technologies: [
        { name: 'Python', badgeClass: 'bg-primary-subtle text-primary' },
        { name: 'MongoDB', badgeClass: 'bg-success-subtle text-success' },
        { name: 'Data Analysis', badgeClass: 'bg-info-subtle text-info' },
        { name: 'Prediction Models', badgeClass: 'bg-warning-subtle text-warning' }
      ]
    },
    {
      id: 'coopnex',
      title: 'COOPNEX — Cooperative Services Platform',
      subtitle: 'Full-stack cooperative services and verified tradesperson marketplace',
      category: 'Marketplace Platform',
      categoryBadgeClass: 'bg-primary-subtle text-primary border border-primary-subtle',
      typeBadge: 'Full-Stack Concept',
      description: 'A digital cooperative services marketplace concept designed to connect workers, service providers, and customers through service discovery, worker profiles, booking, scheduling, and cooperative administration.',
      image: 'assets/project-coopnex.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      modalId: 'projectModalCoopnex',
      overview: 'A digital cooperative services marketplace concept designed to connect workers, service providers, and customers through service discovery, worker profiles, booking, scheduling, and cooperative administration.',
      capabilities: [
        { title: 'Verified Worker Directory', description: 'Showcase certified cooperative tradespeople with skills, verified ratings, and transparent fees.' },
        { title: 'Automated Booking & Dispatch', description: 'Customers select available date/time slots with automated allocation.' },
        { title: 'Fair Cooperative Revenue Distribution', description: 'Transparent fee split allocating majority payout directly to workers alongside cooperative welfare funds.' },
        { title: 'Society Admin Portal', description: 'Real-time dashboard monitoring active bookings, member welfare metrics, and user feedback.' }
      ],
      technologies: [
        { name: 'HTML5', badgeClass: 'bg-danger-subtle text-danger' },
        { name: 'CSS3', badgeClass: 'bg-primary-subtle text-primary' },
        { name: 'JavaScript', badgeClass: 'bg-warning-subtle text-warning' },
        { name: 'React', badgeClass: 'bg-info-subtle text-info' },
        { name: 'Node.js', badgeClass: 'bg-success-subtle text-success' },
        { name: 'MongoDB', badgeClass: 'bg-success-subtle text-success' }
      ]
    },
    {
      id: 'smart-shoes',
      title: 'Smart Shoes for Blind Persons',
      subtitle: 'Assistive embedded technology for real-time obstacle detection',
      category: 'Embedded Systems / Assistive Technology',
      categoryBadgeClass: 'bg-info-subtle text-info border border-info-subtle',
      typeBadge: 'ECS Project',
      description: 'An assistive-technology project designed to help visually impaired individuals detect obstacles and navigate their surroundings more safely.',
      image: 'assets/project-smart-shoes.jpg',
      tags: ['Embedded Systems', 'Sensor-Based Systems', 'Hardware-Software Integration', 'Assistive Technology', 'Obstacle Detection'],
      modalId: 'projectModalSmartShoes',
      overview: 'An assistive-technology project designed to help visually impaired individuals detect obstacles and navigate their surroundings more safely.',
      capabilities: [
        { title: 'Sensor-Based Obstacle Detection', description: "Real-time detection of ground-level and knee-level obstacles in the user's path." },
        { title: 'Surroundings Navigation', description: 'Assists visually impaired users in navigating physical spaces with enhanced confidence and safety.' },
        { title: 'Hardware-Software Integration', description: 'Seamless link between embedded sensors and navigational response mechanisms.' },
        { title: 'Assistive Technology', description: 'Dedicated human-centric design focused on accessibility and mobility independence.' }
      ],
      technologies: [
        { name: 'Embedded Systems', badgeClass: 'bg-info-subtle text-info' },
        { name: 'Sensor-Based Systems', badgeClass: 'bg-primary-subtle text-primary' },
        { name: 'Hardware-Software Integration', badgeClass: 'bg-warning-subtle text-warning' },
        { name: 'Assistive Technology', badgeClass: 'bg-success-subtle text-success' },
        { name: 'Obstacle Detection', badgeClass: 'bg-secondary-subtle text-light' }
      ]
    },
    {
      id: 'air-purifier',
      title: 'Smart Air Purification System',
      subtitle: 'Intelligent environmental sensing and automated indoor air quality control',
      category: 'Embedded Systems / Environmental Technology',
      categoryBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      typeBadge: 'ECS Project',
      description: 'An engineering project focused on improving indoor air quality through a smart air-purification system.',
      image: 'assets/project-air-purifier.jpg',
      tags: ['Embedded Systems', 'IoT Fundamentals', 'Sensor-Based Systems', 'Hardware-Software Integration', 'Environmental Technology'],
      modalId: 'projectModalAirPurifier',
      overview: 'An engineering project focused on improving indoor air quality through a smart air-purification system.',
      capabilities: [
        { title: 'Indoor Air Quality Monitoring', description: 'Continuous real-time sensing of indoor air quality and ambient conditions.' },
        { title: 'Automated Air Purification', description: 'Dynamic activation and regulation of air purification based on sensor readings.' },
        { title: 'IoT Fundamentals & Embedded Logic', description: 'Environmental sensing loop integrating microcontroller logic with automated filtration.' },
        { title: 'Environmental Technology', description: 'Engineered to create healthier indoor living and working environments.' }
      ],
      technologies: [
        { name: 'Embedded Systems', badgeClass: 'bg-success-subtle text-success' },
        { name: 'IoT Fundamentals', badgeClass: 'bg-info-subtle text-info' },
        { name: 'Sensor-Based Systems', badgeClass: 'bg-primary-subtle text-primary' },
        { name: 'Hardware-Software Integration', badgeClass: 'bg-warning-subtle text-warning' },
        { name: 'Environmental Technology', badgeClass: 'bg-success-subtle text-success' }
      ]
    }
  ];

  readonly achievements: Achievement[] = [
    {
      title: '100% Attendance Award (Academic Year 2024–2025)',
      badge: 'University Honor',
      badgeClass: 'bg-warning-subtle text-warning border border-warning-subtle',
      icon: 'bi-award-fill',
      iconBoxStyle: 'color: #f59e0b; border-color: rgba(245,158,11,0.4); background: rgba(245,158,11,0.15);',
      description: 'Conferred the prestigious 100% Attendance Award for the academic year 2024–2025 by VIT-AP University during the 8th University Day Celebrations, recognizing exceptional consistency, discipline, and commitment to academic excellence.',
      tags: ['100% Attendance', 'VIT-AP University', 'Academic Excellence', 'Discipline & Consistency'],
      image: 'assets/award-attendance.jpg'
    },
    {
      title: 'Smart India Hackathon (SIH)',
      badge: 'National Hackathon',
      badgeClass: 'bg-primary-subtle text-primary border border-primary-subtle',
      icon: 'bi-trophy-fill',
      description: "Selected participant in India's premier nationwide open innovation initiative. Collaborated with a multidisciplinary team to ideate, architect, and prototype a software solution targeting a critical real-world national problem statement.",
      tags: ['Problem Analysis', 'Rapid Prototyping', 'Team Collaboration', 'Jury Evaluation']
    },
    {
      title: 'Inter-College Tech Fest & Project Innovation Expo',
      badge: 'Project Exhibition',
      badgeClass: 'bg-info-subtle text-info border border-info-subtle',
      icon: 'bi-lightbulb-fill',
      iconBoxStyle: 'color: #38bdf8; border-color: rgba(6,182,212,0.4); background: rgba(6,182,212,0.15);',
      description: 'Showcased technical prototype and presented architecture diagrams to a panel of engineering faculty and industry reviewers. Recognized for innovative application of software systems to everyday operational challenges.',
      tags: ['Software Architecture', 'Live Demonstration', 'Technical Presentation']
    }
  ];

  readonly certifications: Certification[] = [
    {
      title: 'Blockchain Hashgraph & Hedera Certificate',
      issuer: 'Hedera Hashgraph Developer Program',
      badge: 'Blockchain',
      badgeClass: 'cert-badge-hedera',
      icon: 'bi-link-45deg',
      description: 'Mastery of Hedera Consensus Service (HCS), Token Service (HTS), smart contracts, and distributed ledger fundamentals.'
    },
    {
      title: 'Python for Data Science & Problem Solving',
      issuer: 'Professional Technical Certification',
      badge: 'Python & DSA',
      badgeClass: 'bg-primary-subtle text-primary border border-primary-subtle',
      icon: 'bi-filetype-py',
      description: 'Advanced Python paradigms, computational complexity analysis, data structures, and algorithmic implementation.'
    },
    {
      title: 'Database Management & SQL Specialist',
      issuer: 'Relational Database Program',
      badge: 'Database',
      badgeClass: 'bg-success-subtle text-success border border-success-subtle',
      icon: 'bi-database-check',
      description: 'Comprehensive schema design, SQL querying, transactional integrity (ACID), normalization, and database indexing.'
    }
  ];

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    if (typeof window !== 'undefined') {
      const modalElement = document.getElementById(project.modalId);
      if (modalElement && (window as any).bootstrap) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }
}

