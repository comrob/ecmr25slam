---
layout: event
title: ECMR Workshop 2025
logo: images/logo.svg
permlink: /ecmr-workshop-2025
navigation: About;Important dates;Competition;Call for papers;Program;Organizers
logos: https://www.cvut.cz/,images/logo_ctu.jpg
contact: Vsevolod Hulchuk
contact-email: hulchvse@student.cvut.cz
---
<h1>Resilient SLAM in Challenging Settings - ECMR 2025</h1>

<br/>
<hr>

<h2 id="about">About</h2>
<div class="section-intro">
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

<h2 id="important-dates">Important Dates</h2>
<div class="section-intro">
    <ul class="date-list">
        <li>
            <span class="date-label">Paper submission deadline:</span>
            <span class="date-value"><strong>August 20, 2025</strong></span>
        </li>
        <li>
            <span class="date-label">Competition deadline:</span>
            <span class="date-value"><strong>August 19, 2025</strong></span>
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
<br/>

<br/>
<hr>

<h2 id="competition">Competition 🏆</h2>
<div class="section-intro">
<p>The workshop hosts a SLAM benchmarking competition featuring datasets with radar, multispectral imagery (NDVI, thermal), and low-cost sensors on both quadruped and wheeled robots.</p>

<h3>Evaluation</h3>
<p>Submissions will be evaluated based on the following metrics:</p>
<ul>
    <li><strong>Absolute Trajectory Error (ATE)</strong></li>
    <li><strong>Relative Pose Error (RPE)</strong></li>
    <li>Dockerized ROS pipelines will be evaluated via the <strong>CodaBench</strong> platform.
        <ul>
            <li>
                Evaluation code is available on GitHub: <a href="https://github.com/comrob/slam-bench">comrob/slam-bench</a>
            </li>
        </ul>
    </li>
</ul>

<h3>Datasets</h3>
<p>Participants will have access to the following datasets:</p>
<ul>
<li>An outdoor dataset in forest, tunnel, and alpine environments with radar and GNSS.<br/> 
    <a href="https://github.com/comrob/CRL25DEG_dataset">comrob/CRL25DEG_dataset</a>
</li>
<li>An indoor dataset from a quadruped robot with RGB-D and motion capture ground truth.<br/>
    <a href="https://github.com/aislabunimi/IAS_IRIM_AIS_dataset">aislabunimi/IAS_IRIM_AIS_dataset</a>
</li>
<li>The Viking Hill Radar Dataset.<br/>
    <a href="https://github.com/kubelvla/viking_hill_tall_grass">kubelvla/viking_hill_tall_grass</a>
</li>
</ul>

<p>Training datasets will be released approximately three months before the workshop. The testing data will remain hidden and used for final evaluation after the submission deadline.</p>
<p>The official competition website is under construction. In the meantime, you can test your SLAM system on the training portions of the datasets using the links above.</p>
</div>

<br/>
<hr>

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

    <h4>Important Dates – Extended Submission</h4>
    <ul>
        <li>📅 Submission deadline: <strong>20 August 2025</strong></li>
        <li>📩 Notification of acceptance: <strong>28 August 2025</strong></li>
    </ul>
    <p>If you require early notification to help plan your ECMR participation, please indicate this in your submission email.</p>

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

<h2 id="program">Program</h2>
<div class="section-intro">
<p>Full-day schedule with keynotes, technical sessions, and competitions: <strong>02. 09. 2025</strong></p>
<ul>
<li><strong>09:00–09:10</strong> — Welcome & Introduction</li>
<li><strong>09:10–10:10</strong> — Invited Speakers Session 1</li>
<li><strong>10:10–11:00</strong> — Poster & Competition Session 1 + Coffee</li>
<li><strong>11:00–13:00</strong> — Presentations of Accepted Papers</li>
<li><strong>13:00–14:00</strong> — Lunch Break</li>
<li><strong>14:00–15:30</strong> — Invited Speakers Session 2</li>
<li><strong>15:30–16:15</strong> — Poster & Competition Session 2 + Coffee</li>
<li><strong>16:16–17:15</strong> — World Café Discussion</li>
<li><strong>17:15–17:30</strong> — Closing Remarks</li>
</ul>
</div>

<h3>Invited speakers</h3>
<div class="image-info-grid small">
    <div class="image-info-card">
        <img src="{{ 'https://airlab.deib.polimi.it/wp-content/uploads/2025/05/MatteoFrosi.png' | absolute_url }}">                
        <strong>Matteo Frosi</strong> Politecnico di Milano<br>
        <i>Topic: Beyond Vision: Radar-based SLAM for Robust Localization and Mapping</i>
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQGpPqYM_m7Blg/profile-displayphoto-shrink_800_800/B4EZWBYSjmHUAc-/0/1741632385313?e=1756944000&v=beta&t=AJks70QtbTCRZt54pP9Lc2FlsAFVwx3FdoPGujWXrPg' | absolute_url }}">                
        <strong>Luca Di Giammarino (online)</strong>Sapienza University of Rome<br>
        <i>Topic: Active Perception and Mapping: Learning to Localize in  Space and Time</i>
    </div>
    <div class="image-info-card">
        <img src="{{ 'images/placeholder.jpg' | absolute_url }}">                
        <strong>To be announced</strong>
    </div>
</div>

<br/>
<hr>

<h2 id="organizers">Organizers</h2>

<h3>Main organizer</h3>
<div class="image-info-grid">
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQE5MzRZjq0poQ/profile-displayphoto-shrink_800_800/B4EZR1EgpCHMAg-/0/1737130904524?e=1756339200&v=beta&t=qO6kKkLkiYI-hRuQ-_dbHWKujQ8G5imRT7r8Unh5Ljw' | absolute_url }}">                
        <strong>Vsevolod Hulchuk</strong>
CTU in Prague
    </div>
</div>

<h3>Co-organizers</h3>
<div class="image-info-grid small">
    <div class="image-info-card">
        <img src="{{ 'https://d2gjqh9j26unp0.cloudfront.net/profilepic/d060e44c62b00db17a5c2c49df3c7790' | absolute_url }}">                
        <strong>Martin Magnusson</strong> 
Örebro University, Sweden
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://intranet.fel.cvut.cz/cz/vv/doktorandi/success-stories/kubelka-vladimir.jpg' | absolute_url }}">                
        <strong>Vladimír Kubelka</strong> 
Örebro University, Sweden
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://backends.it.ntnu.no/user-profile-service/rest/files/9f9c50f3-1be4-3823-a318-e8e53ab77d85' | absolute_url }}">                
        <strong>Konstantinos Alexis</strong> NTNU
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://apps.unimi.it/ws/chiedove/media/image/matteo_luperto' | absolute_url }}">                
        <strong>Matteo Luperto</strong> 
University of Milano, Italy
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://dyumanaditya.github.io/assets/img/prof_pic_square.jpg' | absolute_url }}">                
        <strong>Dyuman Aditya</strong> 
Ecole Centrale de Nantes, France
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://acris.aalto.fi/ws/portalfiles/portal/76318204/Aalto_University_Professor_Tomasz_Kucner_02_11_2021_by_Jaakko_Kahilaniemi_2_Croped_Shrinked.jpg' | absolute_url }}">                
        <strong>Tomasz Kucner</strong> 
Aalto University, Finland
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/C5603AQEQNmWXEiw2xg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1575420051107?e=2147483647&v=beta&t=2GYNTpoL-0PcFxd1f58ebz0JF_9MRFNVfmlFM9aLnno' | absolute_url }}">                
        <strong>Piotr Kicki</strong> 
Poznan University of Technology, Poland
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://loop.frontiersin.org/images/profile/1009756/203' | absolute_url }}">                
        <strong>Rudolf Szadkowski</strong> 
CTU in Prague
    </div>
    <div class="image-info-card">
        <img src="{{ 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=436,fit=crop,trim=97.2;0;493.2;0/mk30aZBrbGhJDjV5/milos_pragr_960-mv09EaQxO9hkX858.jpg' | absolute_url }}">                
        <strong>Miloš Prágr</strong> 
CTU in Prague
    </div>
</div>

