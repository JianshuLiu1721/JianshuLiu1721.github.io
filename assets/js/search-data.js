// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of cool projects in Pisces Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed journal and conference publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-open-positions",
          title: "Open Positions",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/positions/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-intern-started-internship-at-globus-labs",
          title: '[Intern] Started Internship at Globus Labs!',
          description: "",
          section: "News",},{id: "news-conference-attended-osdi-atc-23-in-boston-ma",
          title: '[Conference] Attended OSDI/ATC’23 in Boston, MA.',
          description: "",
          section: "News",},{id: "news-paper-our-work-μconadapter-accepted-by-socc-23",
          title: '[Paper] Our work “μConAdapter” accepted by SoCC’23!',
          description: "",
          section: "News",},{id: "news-award-student-scholarship-1200-from-socc-23-thanks",
          title: '[Award] Student Scholarship $1200 from SoCC’23, Thanks!',
          description: "",
          section: "News",},{id: "news-talk-invited-talk-of-mostream-in-parslfest2023-at-uchicago-il-video-slides",
          title: '[Talk] Invited Talk of MoStream in ParslFest2023 at UChicago, IL. video slides',
          description: "",
          section: "News",},{id: "news-conference-presented-work-μconadapter-socc-23-in-santa-cruz-ca",
          title: '[Conference] Presented work “μConAdapter” SoCC’23 in Santa Cruz, CA',
          description: "",
          section: "News",},{id: "news-paper-our-work-sync-m-attack-accepted-by-asiaccs-24-congrats-xuhang",
          title: '[Paper] Our work “Sync-M Attack” accepted by AsiaCCS’24! Congrats, Xuhang!',
          description: "",
          section: "News",},{id: "news-conference-attended-the-college-outreach-program-at-neurips-23-in-nola",
          title: '[Conference] Attended the College Outreach Program at NeurIPS’23 in NOLA.',
          description: "",
          section: "News",},{id: "news-award-our-work-sora-received-a-best-paper-award-in-middleware-23",
          title: '[Award] Our work “Sora” received a Best Paper Award in Middleware’23!',
          description: "",
          section: "News",},{id: "news-career-passed-phd-final-defense-thanks-for-all-doctoral-committee-members",
          title: '[Career] Passed PhD Final Defense. Thanks for all doctoral committee members!',
          description: "",
          section: "News",},{id: "news-career-determined-to-join-boise-state-university-as-an-assistant-professor",
          title: '[Career] Determined to join Boise State University as an Assistant Professor!',
          description: "",
          section: "News",},{id: "news-paper-our-work-grunt-attack-accepted-by-dsn-24-congrats-xuhang",
          title: '[Paper] Our work “Grunt Attack” accepted by DSN’24! Congrats, Xuhang!',
          description: "",
          section: "News",},{id: "news-award-received-lsu-5th-eecs-symposium-meritorious-awards",
          title: '[Award] Received LSU 5th EECS Symposium Meritorious Awards!',
          description: "",
          section: "News",},{id: "news-poster-our-work-from-student-interns-accepted-by-osdi-24-poster",
          title: '[Poster] Our work from student interns accepted by OSDI’24 Poster!',
          description: "",
          section: "News",},{id: "news-conference-presented-work-videoprobench-osdi-24-poster-in-san-jose-ca",
          title: '[Conference] Presented work “VideoProBench” OSDI’24 Poster in San Jose, CA!',
          description: "",
          section: "News",},{id: "news-service-serving-on-the-pc-committee-at-ipdps-25",
          title: '[Service] Serving on the PC Committee at IPDPS’25.',
          description: "",
          section: "News",},{id: "news-service-serving-on-the-tpc-committee-at-ieee-cloud-summit-25",
          title: '[Service] Serving on the TPC Committee at IEEE Cloud Summit’25.',
          description: "",
          section: "News",},{id: "news-paper-our-work-irisbench-accepted-by-hotcloudperf-25",
          title: '[Paper] Our work “IrisBench” accepted by HotCloudPerf’25!',
          description: "",
          section: "News",},{id: "news-service-serving-as-an-invited-reviewer-at-cikm-25",
          title: '[Service] Serving as an invited Reviewer at CIKM’25.',
          description: "",
          section: "News",},{id: "news-career-i-joined-the-san-diego-state-university-as-a-tenure-track-assistant-professor",
          title: '[Career] I joined the San Diego State University as a Tenure-track Assistant Professor!...',
          description: "",
          section: "News",},{id: "news-service-serving-as-the-reviewer-at-the-9th-ml-for-systems-workshop-neurips2025",
          title: '[Service] Serving as the Reviewer at The 9th ML for Systems Workshop @NeurIPS2025....',
          description: "",
          section: "News",},{id: "news-service-serving-on-the-pc-committee-at-ipdps-26",
          title: '[Service] Serving on the PC Committee at IPDPS’26.',
          description: "",
          section: "News",},{id: "news-student-dinisha-and-her-team-won-the-amazon-web-services-aws-x-cal-poly-ai-hackathon-trophy-congrats-dinisha",
          title: '[Student] Dinisha and her team won the Amazon Web Services (AWS) x Cal...',
          description: "",
          section: "News",},{id: "news-service-serving-as-project-mentor-at-innovate-4-sdsu-hackathon-register-and-hack",
          title: '[Service] Serving as Project Mentor at Innovate 4 SDSU Hackathon. Register and Hack!...',
          description: "",
          section: "News",},{id: "news-fellowship-selected-for-sdsu-weber-honors-college-research-fellow-program-spring-2026-thanks-weber-honors-college",
          title: '[Fellowship] Selected for SDSU Weber Honors College Research Fellow Program (Spring 2026). Thanks...',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-resource-management-of-web-applications",
          title: 'Resource Management of Web Applications',
          description: "03/2019 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_1/";
            },},{id: "projects-performance-evaluation-of-video-processing-systems",
          title: 'Performance Evaluation of Video Processing Systems',
          description: "06/2024 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2/";
            },},{id: "projects-navigating-dynamic-stateful-stream-processing-apps",
          title: 'Navigating Dynamic Stateful Stream Processing Apps',
          description: "12/2021 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_3/";
            },},{id: "projects-improving-ai-ml-guided-scientific-data-analytics",
          title: 'Improving AI/ML-guided Scientific Data Analytics',
          description: "05/2023 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_4/";
            },},{id: "projects-performance-analysis-of-dracena",
          title: 'Performance Analysis of Dracena',
          description: "12/2021 - 05/2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_5/";
            },},{id: "projects-integrating-dt-with-smart-city-apps",
          title: 'Integrating DT with Smart City Apps',
          description: "12/2024 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_6/";
            },},{id: "projects-ubiquitous-healthcare-with-mobile-sensing",
          title: 'Ubiquitous Healthcare with Mobile Sensing',
          description: "10/2024 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_7/";
            },},{id: "projects-ddos-attacks-of-web-systems",
          title: 'DDoS Attacks of Web Systems',
          description: "05/2019 - Present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_8/";
            },},];
