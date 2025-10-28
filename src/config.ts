export const siteConfig = {
  name: "Matthew F. McEneaney",
  title: "Physicist | Data Scientist | ML Engineer",
  description: "Portfolio website of Matthew F. McEneaney",
  accentColor: "#1d4ed8",
  social: {
    email: "mfmceneaney@gmail.com",
    linkedin: "https://www.linkedin.com/in/matthew-mceneaney-618b4a127",
    github: "https://github.com/mfmceneaney",
  },
  aboutMe:
    "PhD candidate in experimental nuclear physics and aspiring data scientist / ML engineer with 5 years experience in data analysis, machine learning, technical writing and speaking, and software project management. Published domain-adversarial GNN approach for physics event classification. Developed fast python I/O interface for custom data format and generic spin asymmetry analysis framework implementing advanced statistical methods showcasing software management and data analysis skills. Eager to apply analytical expertise to develop data-driven solutions as a scientist or engineer.",
  skills: ["Python", "C++", "Java", "Groovy", "bash", "SQL", "Docker", "Singularity", "Apptainer", "ROOT", "matplotlib", "numpy", "pandas", "PyTorch", "PyTorch Geometric", "optuna"],
  projects: [
    {
      name: "HIPOPy : UpROOT-like I/O interface for CLAS12 HIPO files",
      description:
        "Fast python library for CLAS12 data",
      link: "https://github.com/mfmceneaney/hipopy/?ref=devportfolio",
      skills: ["python"],
    },
    {
      name: "SAGA : Spin Asymmetry Generic Analysis",
      description:
        "Framework for generic spin asymmetry analyses implementing solutions for complex multi-dimensional binning, resonance background corrections, bin migration corrections, and much more.",
      link: "https://github.com/mfmceneaney/saga/?ref=devportfolio",
      skills: ["python", "C++", "bash", "Docker", "Singularity", "Apptainer", "ROOT", "matplotlib", "numpy", "pandas"],
    },
    {
      name: "lambdaml : ML algorithms for Lambda hyperon identification with CLAS12",
      description:
        "Machine learning pipelines implementing domain-adversarial, contrastive adaptation, and Transfer of Imbalance-Tolerant Knowledge (TIToK) domain adaption approaches and for training and deploying a GNN physics event classifier.",
      link: "https://github.com/mfmceneaney/lambdaml/?ref=devportfolio",
      skills: ["python", "C++", "bash", "SQL", "Docker", "Singularity", "Apptainer", "matplotlib", "numpy", "PyTorch", "PyTorch Geometric", "optuna"],
    },
    {
      name: "clas12-analysis : Process HIPO events and store particle kinematics in ROOT Trees",
      description:
        "Tool to select any final state topology and compute and store particle kinematics, momenta, and detector level information in ROOT Trees.",
      link: "https://github.com/mfmceneaney/clas12-analysis/?ref=devportfolio",
      skills: ["java", "groovy", "bash", "Docker", "Singularity", "Apptainer"],
    },
    {
      name: "clas12-timelines : Detector and physics monitoring timelines for CLAS12",
      description:
        "Framework for data quality monitoring",
      link: "https://github.com/JeffersonLab/clas12-timeline/?ref=devportfolio",
      skills: ["java", "groovy", "bash"],
    },
  ],
  experience: [
    {
      company: "Duke University",
      title: "Graduate Research Assistant",
      dateRange: "Aug 2020 - Present",
      bullets: [
        "In the process of publishing the most precise measurement of Lambda spin transfer, with statistical uncertainties reduced by a factor of 2.2 compared to the next most precise measurement.",
        "Demonstrated that target fragmentation mechanism dominates the current fragmentation mechanism for Lambda production by a factor of 4.9",
        "Collaborated with theory colleagues to demonstrate that a proposed experiment with a transversely polarized target would reduce current theoretical uncertainties by a factor of 2 and alleviate tension between two competing sets of theory predictions.  This finding was a major driver in the approval of the experiment by an external panel of field experts.",
        "Developed a generic framework for spin asymmetry analyses with maximum likelihood fitting and other advanced statistical methods, cutting time spent configuring new asymmetry measurements by over half.",
        "Oversaw one undergraduate research student, providing effective guidance for him to implement a machine learning approach to vertex reconstruction.",
        "Implemented new user-requested features for the CLAS12 quality assurance database, providing necessary functionality and improved efficiency.",
        "Implemented, presented, and published a domain adversarial approach to domain adaptation using Graph Neural Networks (GNNs), improving signal yield by a factor of 1.95 in simulation.",
        "Created a fast and intuitive python I/O interface for the CLAS12 data format which was a factor of 22.8 times faster than the existing python libraries.  This package has been extensively used for machine learning projects at CLAS12.",
      ],
    },
    {
      company: "Duke University",
      title: "Graduate Teaching Assistant",
      dateRange: "Aug 2020 - May 2022",
      bullets: [
        "Oversaw online lab sessions and hosted online office hours, providing clear directions and effective teaching via the Socratic method.",
        "Efficiently graded student tests and homework, providing fair and constructive critiques.",
      ],
    },
  ],
  education: [
    {
      school: "Duke University",
      degree: "PhD, Phyiscs",
      dateRange: "2020 - 2026",
      achievements: [
        "3.89 GPA",
        "Mary Creason Memorial Award for Undergraduate Teaching (Fall 2021)",
      ],
    },
    {
      school: "College of William & Mary",
      degree: "Bachelors of Science, Physics",
      dateRange: "2016 - 2020",
      achievements: [
        "Graduated Summa Cum Laude (3.91 GPA) with honors",
        "Inducted into PBK Honor Society",
        "Dean's List all semesters",
      ],
    },
  ],
};
