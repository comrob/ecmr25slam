---
layout: event
title: ECMR Workshop 2025
logo: images/logo.svg
permlink: /ecmr-workshop-2025
navigation: About;Call for papers;Important dates;Program;Competition;Organizers
logos: https://www.cvut.cz/,images/logo_ctu.jpg
contact: Vsevolod Hulchuk
contact-email: hulchvse@student.cvut.cz
---
<h1>SLAM Workshop - ECMR 2025</h1>

<h2 id="about">About</h2>
<div class="section-intro">
    <strong>Resilient SLAM in Challenging Settings: Recent Advancements, Open Problems, and Competitions</strong>
    <p>Despite decades of SLAM research, real-world deployment remains challenging, especially in perceptually degraded or structurally complex environments. This workshop aims to unite researchers across Europe to address SLAM robustness in such conditions. Topics include radar-visual-inertial fusion, low-cost sensor configurations, resilience to sensor dropouts, and architectural designs for long-term autonomy.
    A key goal is fostering discussion on robust SLAM backends, adaptive fusion strategies, and benchmarking under degenerative conditions. The workshop will feature invited talks, poster sessions, a World Café-style discussion, and a SLAM competition to evaluate new methods on real datasets collected with quadruped and wheeled robots using diverse sensors.
    </p>
</div>

<div class="cta">
    <div class="cta-text long">
        <h3 id="call-for-papers">Call for papers</h3>
        <p>During this workshop, we will also hold a poster session to present recent developments. 
        We invite you to submit your novel contribution aligned with the following indicative (and non-exhaustive) list of topics.</p>
    </div>   
    <div class="cta-link-button">
        <a href="mailto:hulchvse@student.cvut.cz?subject=ECMR Workshop 2025 - Submission"><i class="material-icons">arrow_forward</i></a>
    </div>
</div>

<h2 id="important-dates">Important dates</h2>
<div class="section-intro">
<ul>
<li><strong>01. 08. 2025</strong> — Deadline for submission</li>
<li><strong>15. 08. 20025</strong> — Notification of acceptance</li>
<li><strong>05. 09. 2025</strong> — Deadline for final paper submission</li>
<li><strong>Two weeks before ECMR 2025</strong> — Competition deadline</li>
<li><strong>02. 09. 2025</strong> — Workshop</li>
</ul>
</div>

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
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/D4E03AQGpPqYM_m7Blg/profile-displayphoto-shrink_800_800/B4EZWBYSjmHUAc-/0/1741632385313?e=1756944000&v=beta&t=AJks70QtbTCRZt54pP9Lc2FlsAFVwx3FdoPGujWXrPg' | absolute_url }}">                
        <strong>Luca Di Giammarino (online)</strong>Sapienza University of Rome (online)<br>
        <i>Topic: Active Perception and Mapping: Learning to Localize in  Space and Time</i>
    </div>
    <!--  -->
<!--     <div class="image-info-card">
        <img src="{{ 'https://www.ce.cit.tum.de/fileadmin/w00cgn/pins/_my_direct_uploads/Achim_L_1_w5_300dpi_bglightgrad.jpg' | absolute_url }}">                
        <strong>Achim Lilienthal</strong>Technische Universität München<br>
        <i>Topic: TBD</i>
    </div> -->
    <!--  -->
<!--     <div class="image-info-card">
        <img src="{{ 'https://backends.it.ntnu.no/user-profile-service/rest/files/9f9c50f3-1be4-3823-a318-e8e53ab77d85' | absolute_url }}">                
        <strong>Konstantinos Alexis</strong>NTNU<br>
        <i>Topic: TBD</i>
    </div> -->
    <!--  -->
<!--     <div class="image-info-card">
        <img src="{{ 'https://mrs.fel.cvut.cz/images/images/people/martin_saska.jpg' | absolute_url }}">                
        <strong>Martin Saska</strong>
CTU in Prague<br>
        <i>Topic: TBD</i>
    </div> -->
    <!--  -->
<!--     <div class="image-info-card">
        <img src="{{ 'images/placeholder.jpg' | absolute_url }}">                
        <strong>Tentative speaker <br> from Cyrill Stachniss lab</strong>
University of Bonn<br>
        <i>Topic: TBD</i>
    </div> -->
    <div class="image-info-card">
        <img src="{{ 'images/placeholder.jpg' | absolute_url }}">                
        <strong>To be announced</strong>
    </div>
</div>

<h2 id="competition">Competition</h2>
<div class="section-intro">
<p>The workshop hosts a SLAM benchmarking competition with datasets that include radar, multispectral imagery (NDVI, thermal), and low-cost sensors on quadruped and wheeled robots.</p>

<h3>Evalution</h3>
<ul>
    <li>Absolute Trajectory Error (ATE)</li>
    <li>Relative Pose Error (RPE)</li>
    <li> Dockerized ROS pipelines evaluated via <strong>CodaBench</strong>.<br/>
        <ul>
            <li>
                Dockerized evaluation github: <a href="https://github.com/comrob/slam-bench">https://github.com/comrob/slam-bench</a>
            </li>
        </ul>
    </li>
</ul>

<h3>Datasets</h3>
<ul>
<li>Outdoor forest, tunnel, and alpine trail datasets with radar and GNSS: <br/> 
    <a href="https://github.com/comrob/CRL25DEG_dataset">https://github.com/comrob/CRL25DEG_dataset</a>
</li>
<li>Indoor dataset using a quadruped with RGBD and motion capture ground truth: <br/>
    <a href="https://github.com/aislabunimi/IAS_IRIM_AIS_dataset">https://github.com/aislabunimi/IAS_IRIM_AIS_dataset</a>
</li>
<li>The Viking Hill Radar Dataset: <br/>
    <a href="https://github.com/aislabunimi/IAS_IRIM_AIS_dataset">https://github.com/kubelvla/viking_hill_tall_grass</a>
</li>
</ul>

<p>Participants can access training datasets ~3 months before the workshop. Testing data is hidden and evaluated post-submission.</p>
</div>


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
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://intranet.fel.cvut.cz/cz/vv/doktorandi/success-stories/kubelka-vladimir.jpg' | absolute_url }}">                
        <strong>Vladimír Kubelka</strong> 
Örebro University, Sweden
    </div>
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://backends.it.ntnu.no/user-profile-service/rest/files/9f9c50f3-1be4-3823-a318-e8e53ab77d85' | absolute_url }}">                
        <strong>Konstantinos Alexis</strong> NTNU
    </div>
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://apps.unimi.it/ws/chiedove/media/image/matteo_luperto' | absolute_url }}">                
        <strong>Matteo Luperto</strong> 
University of Milano, Italy
    </div>
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://dyumanaditya.github.io/assets/img/prof_pic_square.jpg' | absolute_url }}">                
        <strong>Dyuman Aditya</strong> 
Ecole Centrale de Nantes, France
    </div>
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://acris.aalto.fi/ws/portalfiles/portal/76318204/Aalto_University_Professor_Tomasz_Kucner_02_11_2021_by_Jaakko_Kahilaniemi_2_Croped_Shrinked.jpg' | absolute_url }}">                
        <strong>Tomasz Kucner</strong> 
Aalto University, Finland
    </div>
    <!--  -->
    <div class="image-info-card">
        <img src="{{ 'https://media.licdn.com/dms/image/v2/C5603AQEQNmWXEiw2xg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1575420051107?e=2147483647&v=beta&t=2GYNTpoL-0PcFxd1f58ebz0JF_9MRFNVfmlFM9aLnno' | absolute_url }}">                
        <strong>Piotr Kicki</strong> 
Poznan University of Technology, Poland
    </div>
    <!--  -->
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

