---
layout: event
title: ECMR Workshop 2025
logo: images/home-logo.png
permlink: /ecmr-workshop-2025
navigation: About;Important dates;Competition;Presenter Info;Program;Organizers;Venue and location
logos: https://www.cvut.cz/,images/logo_ctu.jpg
contact: Vsevolod Hulchuk
contact-email: hulchvse@student.cvut.cz
---
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<div class="hero-section">
    <div class="hero-content">
        <h1>Resilient SLAM in Challenging Settings</h1>
        <p class="hero-subtitle">A Full-Day Workshop at ECMR 2025</p>
        <div class="hero-buttons">
            <a href="#program" class="cta-button">View Program</a>
            <a href="#submissions-section" class="cta-button secondary">Presentation Guidelines</a>
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
    <br/><hr>
</section>

<h2 id="important-dates"></h2>
<section id="dates-section">
    <h2>Important Dates</h2>
    <div class="section-intro">
        <ul class="date-list">
            <li class="passed">
                <span class="date-label">Paper submission deadline:</span>
                <span class="date-value"><strong>August 20, 2025</strong></span>
            </li>
            <li class="passed">
                <span class="date-label">Notification of acceptance:</span>
                <span class="date-value"><strong>August 28, 2025</strong></span>
            </li>
            <li>
                <span class="date-label">Competition deadline:</span>
                <span class="date-value"><strong>August 28, 2025</strong></span>
            </li>
            <li>
                <span class="date-label">Workshop Day:</span>
                <span class="date-value"><strong>September 2, 2025</strong></span>
            </li>
        </ul>
    </div>
    <div class="countdown-timer" id="countdown"></div>
</section>

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
    <br/><hr>
</section>

<h2 id="presenter-info"></h2>
<section id="submissions-section">
    <h2>Presenter Information</h2>
    <div class="cfp-container">

        <div class="cfp-main-column">
            <h3><i class="fa-solid fa-file-arrow-up"></i> Presentation Guidelines</h3>
            
            <h4><i class="fa-solid fa-person-chalkboard"></i> Presentation Formats</h4>
            <ul>
                <li><strong>Accepted Papers:</strong> Oral presentations are scheduled for <strong>15 minutes, followed by a 5-minute Q&A</strong>. In-person presenters are also required to prepare a poster for the interactive sessions.</li>
                <li><strong>Invited Talks:</strong> Talks are scheduled for <strong>30 minutes, including Q&A</strong>. This may be adjusted by contacting the organizers.</li>
            </ul>

            <h4><i class="fa-solid fa-circle-info"></i> General Instructions</h4>
            <p>Please see the <a href="#program">Program section</a> for your allocated time slot. Online speakers will be provided with a camera overview of the audience. We kindly ask that you be ready <strong>15 minutes before</strong> your scheduled time to test your connection and setup.</p>
        </div>

        <div class="cfp-sidebar">
            <h4><i class="fa-solid fa-lightbulb"></i> Submission Topics</h4>
            <p>The call for papers invited contributions on topics including:</p>
            <ul>
                <li>3D LiDAR-centered SLAM under perceptual degradation</li>
                <li>Radar-based SLAM and sensor fusion</li>
                <li>Passive and low-cost localization</li>
                <li>Architectures for failure resilience</li>
                <li>Robust back-end optimization</li>
                <li>Benchmarks, datasets, and metrics</li>
            </ul>
            <div class="cta-button-wrapper">
                <a href="mailto:robotmappingws@gmail.com?subject=ECMR Workshop 2025 - Late Inquiry" class="cta-button inactive">
                    Submissions Closed (Contact)
                </a>
            </div>
        </div>
        
    </div>
    <br/><hr>
</section>

<h2 id="program"></h2>
<section id="program-section">
    <h2>Program</h2>
    <div class="section-intro">
        <p>Full-day schedule with keynotes, technical sessions, and competitions: <strong>September 2, 2025</strong></p>
        <p><strong><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKTBlQfFsy7Ry1iLaIIFlKDZww0W6he26UZ_iveERtk5A_Ps7fyLiS-Diam5fnhLhh99U1VO7eT7Yw/pubhtml?gid=764812166&single=true" target="_blank">View the detailed schedule here.</a></strong></p>
        <ul class="date-list">
            <li class="event-speech event-organization" data-start="09:00" data-end="09:10">
                <div><span class="date-label"><strong>09:00–09:10</strong></span><span class="date-value">Welcome</span></div>
            </li>
            <li class="event-speech event-invited" data-start="09:10" data-end="10:15">
                <div>
                    <span class="date-label"><strong>09:10–10:15</strong></span>
                    <span class="date-value">Invited Speakers 1</span>
                    <button class="details-toggle-btn" data-open-text="Session Breakdown" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Session Breakdown</button>
                    <div class="expandable-details" style="display: none;">
                        <ul class="paper-list">
                            {% assign session_speakers = site.data.speakers | where: "session", 1 %}{% for speaker in session_speakers %}<li class="paper-entry" data-speaker-id="{{ speaker.id }}"><span class="paper-time">{{ speaker.time }}</span><div class="paper-details"><strong class="paper-author">{{ speaker.name }} {% if speaker.online %}<span class="online-badge small">online</span>{% endif %}</strong><em class="paper-title">"{{ speaker.topic }}"</em></div></li>{% endfor %}
                        </ul>
                    </div>
                </div>
                <div class="schedule-speakers">
                    {% assign session_speakers = site.data.speakers | where: "session", 1 %}{% for speaker in session_speakers %}<a href="#{{ speaker.id }}" data-tooltip="{{ speaker.time }} - {{ speaker.name }}: '{{ speaker.topic }}'" data-speaker-id="{{ speaker.id }}"><img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}"></a>{% endfor %}
                </div>
            </li>
            <li class="event-speech event-organization" data-start="10:15" data-end="10:30">
                <div>
                    <span class="date-label"><strong>10:15–10:30</strong></span>
                    <span class="date-value">Competition Presentation</span>
                    <div class="schedule-buttons-container">
                        <button class="details-toggle-btn" data-open-text="Read More" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Read More</button>
                        <a href="#competition-section" class="schedule-link-btn"><i class="fa-solid fa-arrow-right"></i> Go to Section</a>
                    </div>
                    <div class="expandable-details" style="display: none;">{{ site.data.schedule_details.competition_presentation }}</div>
                </div>
                <div class="schedule-speakers">
                    <img class="speaker-avatar" src="{{ site.data.organizers[0].image | absolute_url }}" alt="Vsevolod Hulchuk">
                </div>
            </li>
            <li class="event-break event-coffee" data-start="10:30" data-end="11:00">
                <div><span class="date-label"><strong>10:30–11:00</strong></span><span class="date-value">Coffee Break</span></div>
            </li>
            <li class="event-speech event-invited" data-start="11:00" data-end="11:40">
                <div>
                    <span class="date-label"><strong>11:00–11:40</strong></span>
                    <span class="date-value">Invited Speaker 2</span>
                    <button class="details-toggle-btn" data-open-text="Session Breakdown" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Session Breakdown</button>
                    <div class="expandable-details" style="display: none;">
                        <ul class="paper-list">
                            {% assign session_speakers = site.data.speakers | where: "session", 2 %}{% for speaker in session_speakers %}<li class="paper-entry" data-speaker-id="{{ speaker.id }}"><span class="paper-time">{{ speaker.time }}</span><div class="paper-details"><strong class="paper-author">{{ speaker.name }}</strong><em class="paper-title">"{{ speaker.topic }}"</em></div></li>{% endfor %}
                        </ul>
                    </div>
                </div>
                <div class="schedule-speakers">
                    {% assign session_speakers = site.data.speakers | where: "session", 2 %}{% for speaker in session_speakers %}<a href="#{{ speaker.id }}" data-tooltip="{{ speaker.time }} - {{ speaker.name }}: '{{ speaker.topic }}'" data-speaker-id="{{ speaker.id }}"><img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}"></a>{% endfor %}
                </div>
            </li>
            <li class="event-speech event-accepted" data-start="11:40" data-end="13:00">
                <div>
                    <span class="date-label"><strong>11:40–13:00</strong></span>
                    <span class="date-value">Accepted Papers</span>
                    <button class="details-toggle-btn" data-open-text="View Papers" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Session Breakdown</button>
                    <div class="expandable-details" style="display: none;">
                        <ul class="paper-list">
                            {% for paper in site.data.papers %}<li class="paper-entry"><span class="paper-time">{{ paper.time }}</span><div class="paper-details"><strong class="paper-author">{{ paper.author }} {% if paper.online %}<span class="online-badge small">online</span>{% endif %}</strong><em class="paper-title">{{ paper.title }}</em></div></li>{% endfor %}
                        </ul>
                    </div>
                </div>
                <div class="schedule-speakers">
                    <img class="speaker-avatar" src="https://scholar.google.ch/citations/images/avatar_scholar_128.png" alt="Default Scholar Avatar">
                    <img class="speaker-avatar" src="https://scholar.google.ch/citations/images/avatar_scholar_128.png" alt="Default Scholar Avatar">
                    <img class="speaker-avatar" src="https://scholar.google.ch/citations/images/avatar_scholar_128.png" alt="Default Scholar Avatar">
                    <img class="speaker-avatar" src="https://scholar.google.ch/citations/images/avatar_scholar_128.png" alt="Default Scholar Avatar">
                </div>
            </li>
            <li class="event-break lunch" data-tooltip="Buon appetito!" data-start="13:00" data-end="14:00">
                <div><span class="date-label"><strong>13:00–14:00</strong></span><span class="date-value">Lunch Break</span></div>
            </li>
            <li class="event-speech event-invited" data-start="14:00" data-end="15:30">
                <div>
                    <span class="date-label"><strong>14:00–15:30</strong></span>
                    <span class="date-value">Invited Speakers 3</span>
                    <button class="details-toggle-btn" data-open-text="Session Breakdown" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Session Breakdown</button>
                    <div class="expandable-details" style="display: none;">
                        <ul class="paper-list">
                            {% assign session_speakers = site.data.speakers | where: "session", 3 %}{% for speaker in session_speakers %}<li class="paper-entry" data-speaker-id="{{ speaker.id }}"><span class="paper-time">{{ speaker.time }}</span><div class="paper-details"><strong class="paper-author">{{ speaker.name }} {% if speaker.online %}<span class="online-badge small">online</span>{% endif %}</strong><em class="paper-title">"{{ speaker.topic }}"</em></div></li>{% endfor %}
                        </ul>
                    </div>
                </div>
                <div class="schedule-speakers">
                    {% assign session_speakers = site.data.speakers | where: "session", 3 %}{% for speaker in session_speakers %}<a href="#{{ speaker.id }}" data-tooltip="{{ speaker.time }} - {{ speaker.name }}: '{{ speaker.topic }}'" data-speaker-id="{{ speaker.id }}"><img class="speaker-avatar" src="{{ speaker.image | absolute_url }}" alt="{{ speaker.name }}"></a>{% endfor %}
                </div>
            </li>
            <li class="event-poster coffee" data-start="15:30" data-end="16:15">
                <div><span class="date-label"><strong>15:30–16:15</strong></span><span class="date-value">Coffee Break & Poster Session</span></div>
            </li>
            <li class="event-poster event-networking" data-start="16:15" data-end="16:50">
                <div>
                    <span class="date-label"><strong>16:15–16:50</strong></span>
                    <span class="date-value">World Cafe Discussion</span>
                    <button class="details-toggle-btn" data-open-text="Read More" onclick="toggleDetails(this)"><i class="fa-solid fa-plus"></i> Read More</button>
                    <div class="expandable-details" style="display: none;">{{ site.data.schedule_details.world_cafe }}</div>
                </div>
            </li>
            <li class="event-speech event-organization" data-start="16:50" data-end="23:05">
                <div><span class="date-label"><strong>16:50–17:05</strong></span><span class="date-value">Closing Remarks</span></div>
            </li>
        </ul>
    </div>
    <br/>
    <h3>Invited speakers</h3>
    <div class="image-info-grid small">
        {% assign sorted_speakers = site.data.speakers | sort: "order" %}{% for speaker in sorted_speakers %}<div id="{{ speaker.id }}" class="image-info-card"><img src="{{ speaker.image | absolute_url }}"><div class="card-content"><strong>{{ speaker.name }} {% if speaker.online %}<span class="online-badge">online</span>{% endif %}</strong><span class="affiliation">{{ speaker.affiliation }}</span><i>Topic: "{{ speaker.topic }}"</i>{% if speaker.abstract %}<button class="abstract-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Read Abstract' ? 'Hide Abstract' : 'Read Abstract';">Read Abstract</button><div class="abstract-content" style="display:none;"><p>{{ speaker.abstract }}</p></div>{% endif %}</div></div>{% endfor %}
    </div>
    <br/><hr>
</section>

<h2 id="organizers"></h2>
<section id="organizers-section">
    <h2>Organizers</h2>
    <div class="image-info-grid">
        {% for organizer in site.data.organizers %}<div class="image-info-card"><img src="{{ organizer.image | absolute_url }}" loading="lazy"><div class="card-content"><div><strong>{{ organizer.name }}</strong>{% if organizer.primary %}<span class="organizer-badge">Primary Organizer</span>{% endif %}<p class="affiliation">{{ organizer.affiliation }}</p></div>{% if organizer.contact_email %}<a href="mailto:{{ organizer.contact_email }}?subject=ECMR%20SLAM%20Workshop%20-%20contact%20organizers" class="contact-button"><i class="fa-solid fa-envelope"></i> Contact</a>{% endif %}</div></div>{% endfor %}
    </div>
    <br/><hr>
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
            <p style="font-size: 1.2rem; margin-top: 1rem;">
                <strong>Room: <span style="color: var(--primary-color);">ELETTRA 1 BLUE</span></strong>
            </p>
            <p style="color: var(--dark-gray); font-size: 0.9rem;">
                Information on how to get to the room will be provided at the main conference registration desk.
            </p>
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