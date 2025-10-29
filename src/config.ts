export const siteConfig = {
  name: "Matthew McEneaney",
  title: "Physicist | Data Scientist | ML Engineer",
  description: "Portfolio website of Matthew McEneaney",
  accentColor: "#1d4ed8",
  social: {
    email: "mfmceneaney@gmail.com",
    linkedin: "https://www.linkedin.com/in/matthew-mceneaney-618b4a127",
    github: "https://github.com/mfmceneaney",
  },
  aboutMe:
    "I am a PhD candidate in experimental nuclear physics at Duke University and an aspiring data scientist / ML engineer with 5 years experience in data analysis, machine learning, technical writing and speaking, and software project management. Some highlights from my time at Duke include publishing a domain-adversarial GNN approach for physics event classification, implementing a fast python I/O interface for a custom data format, and developing a generic spin asymmetry analysis framework implementing advanced statistical methods.  I am eager to apply my analytical expertise to develop data-driven solutions as a scientist or engineer.",
  skills: ["Python", "C++", "Java", "Groovy", "bash", "SQL", "Docker", "Singularity", "Apptainer", "ROOT", "matplotlib", "numpy", "pandas", "PyTorch", "PyTorch Geometric", "Flask", "optuna"],
  projects: [
    {
      name: "HIPOPy : UpROOT-like I/O interface for CLAS12 HIPO files",
      description:
        "This project arose out of necessity for an ML project I was working on.  I needed a fast python library for reading and writing data with the CLAS12 binary file format HIPO, and the existing library was outdated and clunky.  I used pybind11 to expose C++ classes and methods in python, and then created the interface on top of that.  The interface allows for fast batching and globbing large sets of files and has helped myself and many others to quickly implement ML projects.  It also boasts a speed boost by a factor 22.8 compared to the old python libraries.",
      link: "https://github.com/mfmceneaney/hipopy/?ref=devportfolio",
      skills: ["python"],
    },
    {
      name: "SAGA : Spin Asymmetry Generic Analysis",
      description:
        "I found myself constantly rewriting the same analysis code and so one day decided to expand it into a generalizable framework.  This framework implements solutions in C++ ROOT for complex multi-dimensional binning, maximum likelihood fits for distinguishing signal and background mass spectra and extracting asymmetries, and much more.  It also includes python libraries for configuring jobs to run with SLURM, applying bin migration corrections, and plotting binned results in a systematic way.  All told, this has saved me over half the time I would have spent writing new analysis code and configuring job submissions.  Installation is made easy via a container image.",
      link: "https://github.com/mfmceneaney/saga/?ref=devportfolio",
      skills: ["python", "C++", "bash", "Docker", "Singularity", "Apptainer", "ROOT", "matplotlib", "numpy", "pandas"],
    },
    {
      name: "lambdaml : ML algorithms for Lambda hyperon identification with CLAS12",
      description:
        "This project expands on the domain adversarial GNN approach for event classification that I developed and published.  It implements machine learning pipelines for domain-adversarial, contrastive adaptation, and Transfer of Imbalance-Tolerant Knowledge (TIToK) domain adaption approaches in training via PyTorch and standard python libraries such as numpy and matplotlib.  The GNN event classifier approach is able to improve signal yield by a factor of 1.95 in simulation.  Hyperparameter optimization studies may be run via Optuna and the results are stored in an SQL database.  The project also allows one to deploy trained GNN event classifier via Flask and is available as a container image.",
      link: "https://github.com/mfmceneaney/lambdaml/?ref=devportfolio",
      skills: ["python", "bash", "SQL", "Docker", "Singularity", "Apptainer", "matplotlib", "numpy", "PyTorch", "PyTorch Geometric", "Flask", "optuna"],
    },
    {
      name: "clas12-analysis : Process HIPO events and store particle kinematics in ROOT Trees",
      description:
        "This tool, similar to SAGA, arose out of the realization that I was always rewriting the same event selection code for physics analyses. This tool is written in groovy and uses a JNI bridge developed by a colleague to write data to C++ ROOT.  It can select any final state topology desired from physics events and compute and store particle kinematics, momenta, and detector level information in ROOT Trees.  Installation is made easy through distribution as a container image.  This tool has saved me countless hours writing event selection code for new analyses.",
      link: "https://github.com/mfmceneaney/clas12-analysis/?ref=devportfolio",
      skills: ["java", "groovy", "bash", "Docker", "Singularity", "Apptainer"],
    },
    {
      name: "clas12-timelines : Detector and physics monitoring timelines for CLAS12",
      description:
        "This project is a framework of java and groovy libraries run with bash scripts for a data quality assurance database developed by a postdoc in our group, and to which I have contributed several key features.  Recently, I implemented a CSV reader for taking in data from an outside source in the case it had been corrupted.  I also tracked down and fixed a bug in timeline creation when computing interquartile ranges that resulted in a factor of 100 times faster speed.",
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
        "Achieved, presented and now publishing the most precise measurement of Λ spin transfer, with statistical uncertainties reduced by a factor of 2.2 compared to the next most precise measurement.",
        "Collaborated with theory colleagues at Shandong University to demonstrate that the target fragmentation mechanism dominates the current fragmentation mechanism for Λ production by a factor of 4.9.",
        "Collaborated with theory colleagues at Temple University to demonstrate that a proposed experiment with a transversely polarized target would reduce current theoretical uncertainties by a factor of 2 and alleviate tension between two competing sets of predictions.  This was a major driver in experiment approval by an external panel of field experts.",
        "Developed a generic framework for spin asymmetry analyses with maximum likelihood fitting and other advanced statistical methods, cutting time spent configuring new asymmetry measurements by over half.",
        "Oversaw one undergraduate research student, providing effective guidance for him to implement a machine learning approach to vertex reconstruction.",
        "Implemented new user-requested features for the CLAS12 quality assurance database, providing necessary functionality and improved efficiency.",
        "Implemented, presented, and published a domain adversarial approach to domain adaptation using Graph Neural Networks (GNNs) for event classification, improving signal yield by a factor of 1.95 in simulation.",
        "Created a python I/O package for CLAS12 data which was a factor of 22.8 times faster than the existing python libraries.  This package has been extensively used for machine learning projects at CLAS12.",
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
        "3.89/4.00 GPA",
        "Mary Creason Memorial Award for Undergraduate Teaching (Fall 2021)",
      ],
    },
    {
      school: "College of William & Mary",
      degree: "Bachelors of Science, Physics",
      dateRange: "2016 - 2020",
      achievements: [
        "Graduated Summa Cum Laude (3.91/4.00 GPA) with honors",
        "Inducted into PBK Honor Society",
        "Dean's List all semesters",
      ],
    },
  ],
};
