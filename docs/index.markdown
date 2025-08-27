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

<section id="program-section">
<h2 id="program">Program</h2>
<div class="section-intro">
<p>Full-day schedule with keynotes, technical sessions, and competitions: <strong>September 2, 2025</strong></p>

<p><strong><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKTBlQfFsy7Ry1iLaIIFlKDZww0W6he26UZ_iveERtk5A_Ps7fyLiS-Diam5fnhLhh99U1VO7eT7Yw/pubhtml?gid=764812166&single=true" target="_blank">View the detailed schedule here.</a></strong></p>

<ul class="date-list">
    <li class="event-speech event-organization">
        <div>
            <span class="date-label"><strong>09:00–09:10</strong></span>
            <span class="date-value">Welcome</span>
        </div>
    </li>
    <li class="event-speech event-invited">
        <div>
            <span class="date-label"><strong>09:10–10:15</strong></span>
            <span class="date-value">Invited Speakers 1</span>
        </div>
        <div class="schedule-speakers">
            {% assign speaker = site.data.speakers | where: "id", "speaker-artan" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="9:10-9:40 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
            {% assign speaker = site.data.speakers | where: "id", "speaker-giammarino" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="9:40-10:15 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
        </div>
    </li>
    <li class="event-speech event-organization">
        <div>
            <span class="date-label"><strong>10:15–10:30</strong></span>
            <span class="date-value">Competition Presentation</span>
        </div>
        <div class="schedule-speakers">
            <img class="speaker-avatar" src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQE5MzRZjq0poQ/profile-displayphoto-shrink_800_800/B4EZR1EgpCHMAg-/0/1737130904524?e=1756339200&v=beta&t=qO6kKkLkiYI-hRuQ-_dbHWKujQ8G5imRT7r8Unh5Ljw' | absolute_url }}" alt="Vsevolod Hulchuk">
        </div>
    </li>
    <li class="event-break event-coffee">
        <div>
            <span class="date-label"><strong>10:30–11:00</strong></span>
            <span class="date-value">Coffee Break</span>
        </div>
    </li>
    <li class="event-speech event-invited">
        <div>
            <span class="date-label"><strong>11:00–11:40</strong></span>
            <span class="date-value">Invited Speaker 2</span>
        </div>
        <div class="schedule-speakers">
            {% assign speaker = site.data.speakers | where: "id", "speaker-saska" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="11:00-11:40 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
        </div>
    </li>
    <li class="event-speech event-accepted">
        <div>
            <span class="date-label"><strong>11:40–13:00</strong></span>
            <span class="date-value">Accepted Papers</span>
        </div>
    </li>
    <li class="event-break lunch">
        <div>
            <span class="date-label"><strong>13:00–14:00</strong></span>
            <span class="date-value">Lunch Break</span>
        </div>
    </li>
    <li class="event-speech event-invited">
        <div>
            <span class="date-label"><strong>14:00–15:30</strong></span>
            <span class="date-value">Invited Speakers 3</span>
        </div>
        <div class="schedule-speakers">
            {% assign speaker = site.data.speakers | where: "id", "speaker-frosi" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="14:00-14:30 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
            {% assign speaker = site.data.speakers | where: "id", "speaker-dharmadhikari" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="14:30-15:00 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
            {% assign speaker = site.data.speakers | where: "id", "speaker-laconte" | first %}
            <a href="#{{ speaker.id }}" data-tooltip="15:00-15:30 - {{ speaker.name }}: '{{ speaker.topic }}'">
                <img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}">
            </a>
        </div>
    </li>
    <li class="event-poster coffee">
        <div>
            <span class="date-label"><strong>15:30–16:15</strong></span>
            <span class="date-value">Coffee Break & Poster Session</span>
        </div>
    </li>
    <li class="event-poster event-networking">
        <div>
            <span class="date-label"><strong>16:15–16:50</strong></span>
            <span class="date-value">World Cafe Discussion</span>
        </div>
    </li>
    <li class="event-speech event-organization">
        <div>
            <span class="date-label"><strong>16:50–17:05</strong></span>
            <span class="date-value">Closing Remarks</span>
        </div>
    </li>
</ul>
</div>

<br/>

<h3>Invited speakers</h3>
<div class="image-info-grid small">
    {% for speaker in site.data.speakers %}
    <div id="{{ speaker.id }}" class="image-info-card">
        <img src="{{ speaker.image | absolute_url }}">
        <div class="card-content">
            <strong>{{ speaker.name }} 
                {% if speaker.online %}
                <span class="online-badge">online</span>
                {% endif %}
            </strong>
            <span class="affiliation">{{ speaker.affiliation }}</span>
            <i>Topic: "{{ speaker.topic }}"</i>
            
            {% if speaker.abstract %}
            <button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button>
            <div class="abstract-content" style="display:none;">
                <p>{{ speaker.abstract }}</p>
            </div>
            {% endif %}
        </div>
    </div>
    {% endfor %}
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
