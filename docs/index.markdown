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

<section id="about-section">
<h2 id="about">About</h2>
<div class="section-intro">
    <p>This workshop is a full-day event held in conjunction with the <a href="https://ecmr2025.dei.unipd.it/" target="_blank" rel="noopener noreferrer"><strong>European Conference on Mobile Robots (ECMR) 2025</strong></a>.</p>
    <strong>Resilient SLAM in Challenging Settings: Recent Advancements, Open Problems, and Competitions</strong>
    <p>Despite decades of SLAM research, real-world deployment remains challenging, especially in perceptually degraded or structurally complex environments. This workshop aims to unite researchers across Europe to address SLAM robustness in such conditions. Topics include radar-visual-inertial fusion, low-cost sensor configurations, resilience to sensor dropouts, and architectural designs for long-term autonomy. A key goal is fostering discussion on robust SLAM backends, adaptive fusion strategies, and benchmarking under degenerative conditions.</p>
    <p>The workshop hosts:</p>
    <ul>
        <li>A <strong>SLAM competition</strong> to evaluate new methods on real datasets collected with quadruped and wheeled robots using diverse sensors.</li>
        <li>A <strong>call for papers</strong> to discuss late-breaking results and novel ideas about SLAM.</li>
    </ul>
    <p>The workshop will feature invited talks, a World Café-style discussion, poster sessions, oral presentations of contributions sent to the call for papers, and the results of the SLAM competition.</p>
</div>


<br/>
<hr>
</section>


<section id="dates-section">
<h2 id="important-dates">Important Dates</h2>
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

<section id="competition-section">
<h2 id="competition">Competition 🏆</h2>
<div class="section-intro">
    <p>The workshop hosts a SLAM challenge to benchmark algorithms on unique datasets designed to test the limits of modern localization systems, focusing on scenarios with <strong>Degenerate LiDAR</strong>, <strong>Forest Radar</strong>, and data from <strong>quadruped robots</strong>.</p>
    <p>Submissions are handled as Dockerized <strong>ROS1</strong> SLAM systems and evaluated on our competition platform.</p>

    <h3>Evaluation</h3>
    <p>Submissions are evaluated based on standard SLAM metrics:</p>
    <ul>
        <li><strong>Absolute Trajectory Error (ATE)</strong></li>
        <li><strong>Relative Pose Error (RPE)</strong></li>
    </ul>

    <h3>Datasets</h3>
    <p>Participants will have access to the following datasets, with more to be announced:</p>
</div>

<div class="dataset-grid">
    <div class="dataset-card">
        <h4>Outdoor Degenerate LiDAR</h4>
        <p>An outdoor dataset in open fields with a 3D LiDAR. Tunnel and alpine environments are upcoming </p>
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
        <p>The Viking Hill Radar Dataset, focusing on challenging navigation in tall grass.</p>
        <div class="card-footer">
            <span class="status-badge available">Available</span>
            <a href="https://github.com/kubelvla/viking_hill_tall_grass" target="_blank" class="github-button">View on GitHub</a>
        </div>
    </div>
</div>

<div class="section-intro" style="margin-top: 2rem;">
    <h3>Submission & Support</h3>
    <p>The training portions of the datasets are available now, while testing data will remain private for the final evaluation. We are currently accepting submissions for <strong>ROS1-integrated</strong> SLAM systems.</p>
    <p>Participation is open to <strong>online submission</strong>, and physical attendance at the ECMR workshop in Padova <strong>is not mandatory</strong> to compete.</p>
    <p>We encourage all participants to <a href="mailto:robotmappingws@gmail.com"><strong>contact us</strong></a> with any questions or issues that may appear. We're here to help!</p>
</div>

<div class="cta-button-wrapper">
    <a href="https://crl-slam.fel.cvut.cz/?page=1" target="_blank" class="cta-button">
        Go to Competition Platform
    </a>
</div>
<br/>
<hr>
</section>

<section id="call-for-papers-section">
<h2 id="call-for-papers">Call for Papers</h2>
<div class="section-intro">
    <p>We invite submissions of novel contributions aligned with (but not limited to) the following indicative topics:</p>
    <ul>
        <li>SLAM under perceptual degradation and degenerative scenarios</li>
        <li>Radar-based SLAM and radar-visual-inertial fusion</li>
        <li>Passive and low-cost sensor fusion for localization and mapping</li>
        <li>Architectures for failure resilience and sensor dropout handling</li>
        <li>Robust back-end optimization and front-end perception</li>
        <li>Coupling strategies in multi-sensor SLAM pipelines</li>
        <li>Benchmarks, datasets, and evaluation metrics for degraded environments</li>
    </ul>
    <p>Late-breaking results are welcome, as well as extended contributions related to ECMR submissions.</p>
    
    <p>In addition to the main paper track, we are hosting an exciting <strong>SLAM competition</strong>. This is a great opportunity to test your algorithms on challenging datasets, including scenarios with degenerative LiDAR, low-cost sensors on quadrupeds, and radar in forest environments.</p>
    <p>While we encourage competition participants to submit an accompanying paper describing their system, this is entirely voluntary. You are free to <strong>submit a paper without competing, or compete without submitting a paper</strong>. You can find all the details and access the training data in the <a href="#competition">Competition Section</a>.</p>
    <h4>Guide for Authors</h4>
    <p>Please submit an extended abstract (up to 4 pages, including references) in IEEE conference format to the workshop chairs at: 📧 <a href="mailto:robotmappingws@gmail.com">robotmappingws@gmail.com</a></p>
    <p>Submissions can include re-elaborations of recently published work. The workshop will not have archival proceedings, and all submissions will be peer-reviewed by the organizing committee based on quality, relevance, and timeliness.</p>

    <h4>Publication and Dissemination</h4>
    <p>Accepted papers will be presented during the poster session at the workshop, held in conjunction with ECMR 2025 in Padova, Italy. After the event, the posters and accompanying papers will be made available on the workshop's official website.</p>
</div>

<div class="cta-button-wrapper">
    <a href="mailto:robotmappingws@gmail.com?subject=ECMR Workshop 2025 - Submission" class="cta-button">
        Submit Your Paper
    </a>
</div>


<br/>
<hr>

</section>

<section id="program-section">
<h2 id="program">Program</h2>
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
        <span class="date-label"><strong>16:16–17:15</strong></span>
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
            <i>Topic: Long-term UAV deployment in challenging GNSS-denied conditions</i>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://airlab.deib.polimi.it/wp-content/uploads/2025/05/MatteoFrosi.png' | absolute_url }}">
        <div class="card-content">
            <strong>Matteo Frosi</strong>
            <span class="affiliation">Politecnico di Milano</span>
            <i>Topic: Beyond Vision: Radar-based SLAM for Robust Localization and Mapping</i>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQGpPqYM_m7Blg/profile-displayphoto-shrink_800_800/B4EZWBYSjmHUAc-/0/1741632385313?e=1756944000&v=beta&t=AJks70QtbTCRZt54pP9Lc2FlsAFVwx3FdoPGujWXrPg' | absolute_url }}">
        <div class="card-content">
            <strong>Luca Di Giammarino <span class="online-badge">online</span></strong>
            <span class="affiliation">Sapienza University of Rome</span>
            <i>Topic: Active Perception and Mapping: Learning to Localize in Space and Time</i>
            <button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button>
            <div class="abstract-content" style="display:none;">
                <p>This talk explores recent advances at the intersection of geometry, learning, and probabilistic modeling for robot localization and mapping. We present four complementary approaches that tackle key challenges in active perception: Gaussian splatting for real-time LiDAR odometry, continuous-time pose estimation via Gaussian belief propagation, and learning-based strategies for viewpoint selection in active localization. Together, these works push the boundaries of how autonomous systems perceive, move, and map the world, efficiently and intelligently, in both space and time.</p>
            </div>
        </div>
    </div>
    <div class="image-info-card">
        <img src="{{ 'images/placeholder.jpg' | absolute_url }}">
        <div class="card-content">
            <strong>To be announced</strong>
        </div>
    </div>
</div>


<br/>
<hr>

</section>

<section id="organizers-section">
<h2 id="organizers">Organizers</h2>
<br/>

<div class="image-info-grid small">
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQE5MzRZjq0poQ/profile-displayphoto-shrink_800_800/B4EZR1EgpCHMAg-/0/1737130904524?e=1756339200&v=beta&t=qO6kKkLkiYI-hRuQ-_dbHWKujQ8G5imRT7r8Unh5Ljw' | absolute_url }}">
        <div class="card-content">
            <strong>Vsevolod Hulchuk</strong>
            <span class="affiliation">CTU in Prague</span>
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
        <img src="{{ 'https://d2gjqh9j26unp0.cloudfront.net/profilepic/d060e44c62b00db17a5c2c49df3c7790' | absolute_url }}">
        <div class="card-content">
            <strong>Martin Magnusson</strong>
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

<section id="venue-and-location-section">
<h2 id="venue-and-location">Venue and location</h2>
<div class="section-intro">
    <p>
        The workshop will be held at:
        <br>
        <strong>Palazzo della Salute</strong>
        <br>
        Via S. Francesco, 90
        <br>
        I-35121 Padua (Italy)
    </p>
    <p>
        <a href="https://www.google.com/maps/search/?api=1&query=Palazzo+della+Salute,Via+S.+Francesco,90,Padua,Italy" target="_blank" rel="noopener noreferrer">
            Open in Google Maps
        </a>
    </p>

    <div style="border-radius: 8px; overflow: hidden; margin-top: 15px;">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1746355862447!2d11.877135669477912!3d45.40581789663544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda50d451f411%3A0x712672e59eeb4c53!2sPalazzo%20della%20Salute!5e0!3m2!1sen!2scz!4v1753197851752!5m2!1sen!2scz" 
       height="450"
       width="100%"
       style="border:0;" 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
</div>

<br/>
