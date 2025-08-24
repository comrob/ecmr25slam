---
layout: event
title: ECMR Workshop 2025
logo: images/home-logo.png
permlink: /ecmr-workshop-2025
navigation: About;Important dates;Competition;Call for papers;Program;Organizers;Venue and location
logos: https://www.cvut.cz/,images/logo_ctu.jpg
contact: Vsevolod Hulchuk
contact-email: hulchvse@student.cvut.cz
---
<head>
  <link rel="stylesheet" href="assets/css/custom.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<div class="hero-section">
    <div class="hero-content">
        <h1>Resilient SLAM in Challenging Settings</h1>
        <p class="hero-subtitle">A Full-Day Workshop at ECMR 2025</p>
        <div class="hero-buttons">
            <a href="#competition" class="cta-button">Join the Competition</a>
            <a href="#call-for-papers" class="cta-button secondary">Submit a Paper</a>
        </div>
    </div>
</div>

<h2 id="about"></h2>
<section id="about-section">
    <h2>About the Workshop</h2>

    <div class="about-intro-container">
        <div class="about-text-column">
            <h3>Resilient SLAM in Challenging Settings</h3>
            <p class="subtitle">Recent Advancements, Open Problems, and Competitions</p>
            <p>Despite decades of research, deploying SLAM systems in the real world remains a major hurdle, especially in complex or perceptually-degraded conditions. This full-day workshop, held in conjunction with <strong><a href="https://ecmr2025.dei.unipd.it/" target="_blank" rel="noopener noreferrer">ECMR 2025</a></strong>, aims to unite researchers across Europe to tackle the challenges of robust localization and mapping head-on.</p>
            
            <div class="cta-button-wrapper" style="text-align: left; margin-top: 1.5rem;">
                <a href="https://ecmr2025.dei.unipd.it/" target="_blank" class="cta-button secondary">
                    <i class="fa-solid fa-house-chimney"></i> Visit Main Conference Site
                </a>
            </div>
        </div>
    </div>

    <div class="about-features-grid">
        <div class="feature-card">
            <h4><i class="fa-solid fa-trophy"></i> SLAM Competition</h4>
            <p>A competition to benchmark new methods on unique datasets from quadruped and wheeled robots.</p>
        </div>
        <div class="feature-card">
            <h4><i class="fa-solid fa-scroll"></i> Call for Papers</h4>
            <p>An opportunity to discuss late-breaking results and novel ideas about resilient SLAM.</p>
        </div>
        <div class="feature-card">
            <h4><i class="fa-solid fa-user-tie"></i> Invited Talks</h4>
            <p>Sessions with leading experts from academia and industry sharing their latest insights.</p>
        </div>
        <div class="feature-card">
            <h4><i class="fa-solid fa-comments"></i> Interactive Sessions</h4>
            <p>Engage directly with peers during poster sessions and a World Café-style discussion.</p>
        </div>
    </div>

    <br/>
    <hr>
</section>

<h2 id="important-dates"></h2>
<section id="dates-section">
<h2>Important Dates</h2>
<div class="section-intro">
    <ul class="date-list">
        <li>
            <span class="date-label">Paper submission deadline:</span>
            <span class="date-value"><strong>August 20, 2025</strong></span>
        </li>
        <li>
            <span class="date-label">Competition deadline:</span>
            <span class="date-value"><strong>August 28, 2025</strong></span>
        </li>
        <li>
            <span class="date-label">Notification of acceptance:</span>
            <span class="date-value"><strong>August 28, 2025</strong></span>
        </li>
        <li>
            <span class="date-label">Workshop Day:</span>
            <span class="date-value"><strong>September 2, 2025</strong></span>
        </li>
    </ul>
</div>

<div class="countdown-timer" id="countdown"></div>

<br/>
<hr>

</section>

<script>
  // Set the date we're counting down to (August 28, 2025)
  const countDownDate = new Date("Aug 28, 2025 23:59:59").getTime();

  // Update the count down every 1 second
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `
      <div><span>${days}</span><p>Days</p></div>
      <div><span>${hours}</span><p>Hours</p></div>
      <div><span>${minutes}</span><p>Minutes</p></div>
      <div><span>${seconds}</span><p>Seconds</p></div>
    `;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "<h3>The deadline has passed!</h3>";
    }
  }, 1000);
</script>

<h2 id="competition"></h2>
<section id="competition-section">
    <div class="competition-hero">
        <div class="hero-overlay"></div>
        <img src="images/slam_challenge_banner_v2.png" alt="Robots in a challenging outdoor environment" class="hero-background">
        <div class="hero-content">
            <h2>Competition 🏆</h2>
            <p>Benchmark your SLAM systems in the challenging environments.</p>
            <a href="https://crl-slam.fel.cvut.cz/?page=1" target="_blank" class="cta-button">
                Go to Competition Platform
            </a>
        </div>
    </div>

    <div class="competition-details">
        <div class="feature-card">
            <h3><i class="fa-brands fa-docker"></i> A Novel Evaluation Approach</h3>
            <p>This competition uses a unique <strong>server-side evaluation</strong>. You submit your entire <strong>Dockerized ROS1 SLAM system</strong>, and we run it on our servers against private test data.</p>
        </div>
        <div class="feature-card">
            <h3><i class="fa-solid fa-globe"></i> Participation & Deadline</h3>
            <p>Participation is open globally (no travel required). The deadline for the workshop competition is <strong>August 28, 2025</strong>. The platform will remain open for benchmarking afterward.</p>
        </div>
        <div class="feature-card">
            <h3><i class="fa-solid fa-chart-simple"></i> Evaluation Metrics</h3>
            <p>Submissions are evaluated using standard metrics, including <strong>Absolute Trajectory Error (ATE)</strong> and <strong>Relative Pose Error (RPE)</strong>.</p>
        </div>
    </div>

    <div class="section-intro" style="text-align: center; margin-top: 2rem;">
        <h3><i class="fa-solid fa-database"></i> Available Datasets</h3>
    </div>

    <div class="dataset-grid">
        <div class="dataset-card">
            <h4>Outdoor Degenerate LiDAR</h4>
            <p>Open fields with a 3D LiDAR. Tunnel and alpine environments are upcoming.</p>
            <div class="card-footer">
                <span class="status-badge available">Available</span>
                <a href="https://github.com/comrob/CRL25DEG_dataset" target="_blank" class="github-button">View on GitHub</a>
            </div>
        </div>
        <div class="dataset-card">
            <h4>Indoor Quadruped</h4>
            <p>An indoor dataset from a quadruped robot with RGB-D and motion capture ground truth.</p>
            <div class="card-footer">
                <span class="status-badge integrating">Integrating</span>
                <a href="https://github.com/aislabunimi/IAS_IRIM_AIS_dataset" target="_blank" class="github-button">View on GitHub</a>
            </div>
        </div>
        <div class="dataset-card">
            <h4>Viking Hill Radar</h4>
            <p>Focusing on challenging navigation in tall grass.</p>
            <div class="card-footer">
                <span class="status-badge available">Available</span>
                <a href="https://github.com/kubelvla/viking_hill_tall_grass" target="_blank" class="github-button">View on GitHub</a>
            </div>
        </div>
    </div>
    <div class="dataset-contribution-prompt">
        <p><strong>Want to host your own dataset?</strong> We invite researchers to propose and host new challenging datasets on our platform. <a href="mailto:robotmappingws@gmail.com">Contact us for details!</a></p>
    </div>
    <br/>
    <hr>
</section>

<h2 id="call-for-papers"></h2>
<section id="call-for-papers-section">
    <h2>Call for Papers & Speakers</h2>

    <div class="cfp-container">

        <div class="cfp-topics-column">
            <h3><i class="fa-solid fa-lightbulb"></i> Submission Topics</h3>
            <p>We invite submissions of novel contributions (up to 4 pages) on topics including, but not limited to:</p>
            <ul>
                <li>3D LiDAR-centered SLAM under perceptual degradation</li>
                <li>Radar-based SLAM and sensor fusion</li>
                <li>Passive and low-cost localization</li>
                <li>Architectures for failure resilience</li>
                <li>Robust back-end optimization</li>
                <li>Benchmarks, datasets, and metrics</li>
            </ul>
            <p>Late-breaking results and extended abstracts of recent work are welcome.</p>
        </div>

        <div class="cfp-submission-info-column">
            <h3><i class="fa-solid fa-file-arrow-up"></i> Author Guidelines</h3>
            <p>Submit an extended abstract (up to 4 pages, incl. references) in IEEE conference format to our chairs.</p>
            
            <h4><i class="fa-solid fa-person-chalkboard"></i> Presentation & Publication</h4>
            <p>Accepted papers will be presented in a dual format: an oral presentation (15 minutes) and a poster session in Padova. For authors presenting remotely, we are happy to accommodate the <strong>online presentation</strong> (talk only).</p>
            <p>The workshop will not have archival proceedings, and accepted papers will be made available on the workshop website.</p>
            
            <div class="cta-button-wrapper">
                <a href="mailto:robotmappingws@gmail.com?subject=ECMR Workshop 2025 - Paper Submission" class="cta-button">
                    Submit Your Paper
                </a>
            </div>
        </div>
    </div>

    <div class="speaker-call-prompt">
        <h3><i class="fa-solid fa-star"></i> Call for Invited Speakers</h3>
        <p>Are you a senior researcher or industry expert with significant experience in robust SLAM? We invite you to share your work as an invited speaker. Both in-person and online talks (30 minutes) are feasible. Please contact us to propose a talk.</p>
        <div class="cta-button-wrapper">
             <a href="mailto:robotmappingws@gmail.com?subject=ECMR Workshop 2025 - Speaker Proposal" class="cta-button secondary">
                Propose a Talk
            </a>
        </div>
    </div>
    
    <br/>
    <hr>
</section>

<h2 id="program"></h2>
<section id="program-section">
<h2>Program</h2>
<div class="section-intro">
<p>Full-day schedule with keynotes, technical sessions, and competitions: <strong>September 2, 2025</strong></p>

<ul class="date-list">
    <li class="event-speech">
        <span class="date-label"><strong>09:00–09:10</strong></span>
        <span class="date-value">Welcome & Introduction</span>
    </li>
    <li class="event-speech">
        <span class="date-label"><strong>09:10–10:10</strong></span>
        <span class="date-value">Invited Speakers Session 1</span>
    </li>
    <li class="event-poster">
        <span class="date-label"><strong>10:10–11:00</strong></span>
        <span class="date-value">Poster & Competition Session 1 + Coffee</span>
    </li>
    <li class="event-speech">
        <span class="date-label"><strong>11:00–13:00</strong></span>
        <span class="date-value">Presentations of Accepted Papers</span>
    </li>
    <li class="event-break">
        <span class="date-label"><strong>13:00–14:00</strong></span>
        <span class="date-value">Lunch Break</span>
    </li>
    <li class="event-speech">
        <span class="date-label"><strong>14:00–15:30</strong></span>
        <span class="date-value">Invited Speakers Session 2</span>
    </li>
    <li class="event-poster">
        <span class="date-label"><strong>15:30–16:15</strong></span>
        <span class="date-value">Poster & Competition Session 2 + Coffee</span>
    </li>
    <li class="event-speech">
        <span class="date-label"><strong>16:15–17:15</strong></span>
        <span class="date-value">World Café Discussion</span>
    </li>
    <li class="event-speech">
        <span class="date-label"><strong>17:15–17:30</strong></span>
        <span class="date-value">Closing Remarks</span>
    </li>
</ul>
</div>

<br/>


<h3>Invited speakers</h3>
<div class="image-info-grid small">
    <div class="image-info-card">
        <img src="{{ 'https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/8860/10778592/10912745/saska-3547296-small.gif' | absolute_url }}">
        <div class="card-content">
            <strong>Martin Saska</strong>
            <span class="affiliation">Czech Technical University in Prague</span>
            <i>Topic: "Long-term UAV deployment in challenging GNSS-denied conditions"</i>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://airlab.deib.polimi.it/wp-content/uploads/2025/05/MatteoFrosi.png' | absolute_url }}">
        <div class="card-content">
            <strong>Matteo Frosi</strong>
            <span class="affiliation">Politecnico di Milano</span>
            <i>Topic: "Beyond Vision: Radar-based SLAM for Robust Localization and Mapping"</i>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/C4D03AQFt9_rXg6b_dQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1597151083827?e=1758758400&v=beta&t=4fRVqllLxSsaRiyW_LRDH_uu8opVHg28fbcAwqhdfTM' | absolute_url }}">
        <div class="card-content">
            <strong>Johann Laconte</strong>
            <span class="affiliation">French National Institute for Agriculture, Food, and Environment (INRAE)</span>
            <i>Topic: "Towards Robust and Resilient SLAM for Field Robotics"</i>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQGpPqYM_m7Blg/profile-displayphoto-shrink_800_800/B4EZWBYSjmHUAc-/0/1741632385313?e=1756944000&v=beta&t=AJks70QtbTCRZt54pP9Lc2FlsAFVwx3FdoPGujWXrPg' | absolute_url }}">
        <div class="card-content">
            <strong>Luca Di Giammarino <span class="online-badge">online</span></strong>
            <span class="affiliation">Sapienza University of Rome</span>
            <i>Topic: "Active Perception and Mapping: Learning to Localize in Space and Time"</i>
            <button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button>
            <div class="abstract-content" style="display:none;">
                <p>This talk explores recent advances at the intersection of geometry, learning, and probabilistic modeling for robot localization and mapping. We present four complementary approaches that tackle key challenges in active perception: Gaussian splatting for real-time LiDAR odometry, continuous-time pose estimation via Gaussian belief propagation, and learning-based strategies for viewpoint selection in active localization. Together, these works push the boundaries of how autonomous systems perceive, move, and map the world, efficiently and intelligently, in both space and time.</p>
            </div>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4D03AQFvYNBWBYZeOg/profile-displayphoto-shrink_800_800/B4DZUQ2ig.HwAc-/0/1739744488368?e=1758758400&v=beta&t=XtqcQmLyfSZFG_jkmZR-KSh3ykaFKV-tEs28OEP6Ijo' | absolute_url }}">
        <div class="card-content">
            <strong>Mihir Dharmadhikari <span class="online-badge">online</span></strong>
            <span class="affiliation">Norwegian University of Science and Technology (NTNU)</span>
            <i>Topic: "Resilient Multi-modal Perception"</i>
            <button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button>
            <div class="abstract-content" style="display:none;">
                <p>The talk discusses methods for resilient localization and mapping - enabling autonomy functionalities - in GPS-denied and visually-degraded environments. Experiences from field deployments, including the winning run in the DARPA Subterranean Challenge are presented.</p>
            </div>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D5603AQGjUHX9MRCTvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720620910006?e=1758758400&v=beta&t=HFtPZEOZdiFCovy-gkNRqOZ3K__okTh_0cD7Qd-3ml0' | absolute_url }}">
        <div class="card-content">
            <strong>Unal Artan <span class="online-badge">online</span></strong>
            <span class="affiliation">Örebro University</span>
            <i>Topic: "An unsupervised approach to map quality assessment"</i>
            <button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button>
            <div class="abstract-content" style="display:none;">
                <p>Maps are widely used in the robotics community for localization and path planning and the ability to identify incorrect or inaccurate regions of a map is an area of active research interest. For large environments, manual edits of the map can be very time consuming and a tool which can assist a map editor is needed. In this talk I will talk about the efforts we have taken to apply deep learning tools to create a tool that could be used to assist in evaluating the quality of a produced map (e.g., 2D occupancy grid map or 2D ndt map). The tool (autoencoder) uses only a given map as input to be independent of the underlying mapping algorithm. Where current methods for map quality assessment rely on ground-truth or labelled information for training classifiers, both of which can be difficult to obtain. Results from different environments will be providing highlighting the tools ability to identify regions with sparse data, clutter, and misregistrations. Possible future directions with the research will be shared.</p>
            </div>
        </div>
    </div>
</div>


<br/>
<hr>

</section>

<h2 id="organizers"></h2>
<section id="organizers-section">
    <h2>Organizers</h2>

    <div class="image-info-grid">
        <div class="image-info-card">
            <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQE5MzRZjq0poQ/profile-displayphoto-shrink_800_800/B4EZR1EgpCHMAg-/0/1737130904524?e=1756339200&v=beta&t=qO6kKkLkiYI-hRuQ-_dbHWKujQ8G5imRT7r8Unh5Ljw' | absolute_url }}">
            <div class="card-content">
                <div>
                    <strong>Vsevolod Hulchuk</strong>
                    <span class="organizer-badge">Primary Organizer</span>
                    <p class="affiliation">CTU in Prague</p>
                </div>
                <a href="mailto:hulchvse@student.cvut.cz?subject=ECMR%20SLAM%20Workshop%20-%20contact%20organizers" class="contact-button">
                    <i class="fa-solid fa-envelope"></i> Contact
                </a>
            </div>
        </div>

        <div class="image-info-card">
            <img src="{{ 'https://apps.unimi.it/ws/chiedove/media/image/matteo_luperto' | absolute_url }}">
            <div class="card-content">
                <strong>Matteo Luperto</strong>
                <span class="affiliation">University of Milano, Italy</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://dyumanaditya.github.io/assets/img/prof_pic_square.jpg' | absolute_url }}">
            <div class="card-content">
                <strong>Dyuman Aditya</strong>
                <span class="affiliation">Ecole Centrale de Nantes, France</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://intranet.fel.cvut.cz/cz/vv/doktorandi/success-stories/kubelka-vladimir.jpg' | absolute_url }}">
            <div class="card-content">
                <strong>Vladimír Kubelka</strong>
                <span class="affiliation">Örebro University, Sweden</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://loop.frontiersin.org/images/profile/1009756/203' | absolute_url }}">
            <div class="card-content">
                <strong>Rudolf Szadkowski</strong>
                <span class="affiliation">CTU in Prague</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://d2gjqh9j26unp0.cloudfront.net/profilepic/d060e44c62b00db17a5c2c49df3c7790' | absolute_url }}">
            <div class="card-content">
                <strong>Martin Magnusson</strong>
                <span class="affiliation">Örebro University, Sweden</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=436,fit=crop,trim=97.2;0;493.2;0/mk30aZBrbGhJDjV5/milos_pragr_960-mv09EaQxO9hkX858.jpg' | absolute_url }}">
            <div class="card-content">
                <strong>Miloš Prágr</strong>
                <span class="affiliation">CTU in Prague</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://backends.it.ntnu.no/user-profile-service/rest/files/9f9c50f3-1be4-3823-a318-e8e53ab77d85' | absolute_url }}">
            <div class="card-content">
                <strong>Konstantinos Alexis</strong>
                <span class="affiliation">NTNU</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://acris.aalto.fi/ws/portalfiles/portal/76318204/Aalto_University_Professor_Tomasz_Kucner_02_11_2021_by_Jaakko_Kahilaniemi_2_Croped_Shrinked.jpg' | absolute_url }}">
            <div class="card-content">
                <strong>Tomasz Kucner</strong>
                <span class="affiliation">Aalto University, Finland</span>
            </div>
        </div>
        <div class="image-info-card">
            <img src="{{ 'https://media.licdn.com/dms/image/v2/C5603AQEQNmWXEiw2xg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1575420051107?e=2147483647&v=beta&t=2GYNTpoL-0PcFxd1f58ebz0JF_9MRFNVfmlFM9aLnno' | absolute_url }}">
            <div class="card-content">
                <strong>Piotr Kicki</strong>
                <span class="affiliation">Poznan University of Technology, Poland</span>
            </div>
        </div>
    </div>
    <br/>
    <hr>
</section>

<h2 id="venue-and-location"></h2>
<section id="venue-and-location-section">
    <h2>Venue and Location</h2>

    <div class="venue-container">
        <div class="venue-column venue-text">
            <h3>Workshop Location</h3>
            <p>
                <strong>Palazzo della Salute</strong><br>
                Via S. Francesco, 90<br>
                I-35121 Padua (Italy)
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=Palazzo+della+Salute,Via+S.+Francesco,90,Padua,Italy" target="_blank" rel="noopener noreferrer" class="ctgit push
            a-button">
                <i class="fa-solid fa-map-location-dot"></i> Open in Google Maps
            </a>
        </div>

        <div class="venue-column venue-map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1746355862447!2d11.877135669477912!3d45.40581789663544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda50d451f411%3A0x712672e59eeb4c53!2sPalazzo%20della%20Salute!5e0!3m2!1sen!2scz!4v1753197851752!5m2!1sen!2scz" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</section>
