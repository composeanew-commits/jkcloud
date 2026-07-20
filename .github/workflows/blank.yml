<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Jerusalem Kollel - Shiurim</title>
    <style>
        /* --- General & Branding --- */
        body {
            background-color: #fcfcfc;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 40px 20px 100px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #333;
        }

        .branding {
            margin-bottom: 40px;
            text-align: center;
        }

        /* Make sure image.png is in the same folder as this file! */
        .branding img {
            max-width: 100%;
            width: 450px; 
            height: auto;
        }

        h2, h3 { color: #222; }
        
        .container {
            width: 100%;
            max-width: 900px;
        }

        /* --- Audio of the Day --- */
        .audio-of-the-day {
            background: linear-gradient(135deg, #ffffff, #fdfaf2);
            border: 2px solid #C49F47;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            margin-bottom: 50px;
            box-shadow: 0 8px 20px rgba(196, 159, 71, 0.15);
        }

        .audio-of-the-day h2 {
            margin-top: 0;
            color: #C49F47;
            text-transform: uppercase;
            font-size: 16px;
            letter-spacing: 1px;
        }

        .play-aotd-btn {
            background: #C49F47;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 15px;
            transition: background 0.2s;
        }

        .play-aotd-btn:hover { background: #aa8838; }

        /* --- Rabbeim Grid --- */
        .section-title {
            text-align: center;
            margin-bottom: 25px;
            font-size: 24px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        .rabbi-grid {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 20px;
            margin-bottom: 40px;
        }

        .rabbi-card {
            background: white;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            flex: 1;
        }

        .rabbi-card:hover {
            border-color: #C49F47;
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(196, 159, 71, 0.15);
        }

        /* Center Rabbi is larger */
        .rabbi-center {
            flex: 1.2;
            padding: 30px 20px;
            border: 2px solid #C49F47;
        }

        .rabbi-name { font-weight: bold; font-size: 18px; margin-bottom: 5px;}
        .rabbi-center .rabbi-name { font-size: 22px; color: #C49F47;}
        .rabbi-title { font-size: 13px; color: #777; }

        /* --- Daily Categories (Hidden by default) --- */
        #daily-shiurim-container {
            display: none;
            background: white;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 4px solid #C49F47;
        }

        .category-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .shiur-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background: #f9f9f9;
            border-radius: 6px;
        }

        .shiur-row button {
            background: #eee;
            border: none;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            color: #333;
        }

        .shiur-row button:hover {
            background: #C49F47;
            color: white;
        }

        /* --- Search & Topics --- */
        .search-section {
            background: #f1f1f1;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
        }

        .search-bar {
            width: 80%;
            padding: 12px;
            border-radius: 25px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
        }

        /* --- Sticky Audio Player --- */
        .audio-player-wrapper {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(150%);
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            padding: 15px 25px;
            width: 90%;
            max-width: 700px;
            border-top: 4px solid #C49F47;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 1000;
        }

        .audio-player-wrapper.active {
            transform: translateX(-50%) translateY(0);
        }

        .now-playing {
            font-size: 14px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 10px;
        }

        .player-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }

        .btn-play {
            background-color: #C49F47;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 16px;
            cursor: pointer;
        }

        .progress-wrapper {
            display: flex;
            align-items: center;
            flex-grow: 1;
            gap: 10px;
            font-size: 12px;
        }

        input[type="range"] { width: 100%; }
        
        .close-player {
            position: absolute;
            top: -10px;
            right: -10px;
            background: #333;
            color: white;
            border: none;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <!-- Logo Section -->
    <header class="branding">
        <img src="image.png" alt="The Jerusalem Kollel">
    </header>

    <div class="container">
        
        <!-- Audio of the Day -->
        <div class="audio-of-the-day">
            <h2>Audio of the Day</h2>
            <h3 style="margin: 0;">Parshas Bereishis: The Purpose of Creation</h3>
            <p style="color: #666; margin-top: 5px;">Rabbi Yitzchak Berkovits</p>
            <button class="play-aotd-btn" onclick="playAudio('Parshas Bereishis: The Purpose of Creation', 'YOUR_CLOUD_AUDIO_LINK_AOTD')">
                ▶ Listen Now
            </button>
        </div>

        <!-- Today's Shiurim Header -->
        <h2 class="section-title">Today's Shiurim</h2>

        <!-- Rabbeim Grid -->
        <div class="rabbi-grid">
            
            <div class="rabbi-card" onclick="showShiurim('Rabbi David Steinhaus')">
                <div class="rabbi-name">Rabbi David Steinhaus</div>
                <div class="rabbi-title">View Today's Shiurim</div>
            </div>

            <div class="rabbi-card rabbi-center" onclick="showShiurim('Rabbi Yitzchak Berkovits')">
                <div class="rabbi-name">Rabbi Yitzchak Berkovits</div>
                <div class="rabbi-title">Rosh Kollel</div>
            </div>

            <div class="rabbi-card" onclick="showShiurim('Rabbi Benji Goldberg')">
                <div class="rabbi-name">Rabbi Benji Goldberg</div>
                <div class="rabbi-title">View Today's Shiurim</div>
            </div>

        </div>

        <!-- Dynamic Daily Shiurim Container (Filled by JavaScript) -->
        <div id="daily-shiurim-container">
            <h3 id="selected-rabbi-name">Rabbi Name</h3>
            <p>Select a category to listen to today's recordings:</p>
            
            <div class="category-list" id="dynamic-shiur-list">
                <!-- Javascript will automatically inject the Shiurim here -->
                <div style="text-align:center; padding: 20px; color: #777;">Loading today's Shiurim...</div>
            </div>
        </div>

        <!-- Search and Archive -->
        <div class="search-section">
            <h2>Search the Archive</h2>
            <p>Find past Shiurim across all topics.</p>
            <input type="text" class="search-bar" placeholder="Search by topic, parsha, or date...">
        </div>

    </div>

    <!-- Sticky Audio Player -->
    <div class="audio-player-wrapper" id="playerWrapper">
        <button class="close-player" onclick="closePlayer()">×</button>
        <div class="now-playing" id="nowPlayingTitle">Now Playing...</div>
        
        <audio id="customAudio" src=""></audio>
        
        <div class="player-controls">
            <button id="skipBack" title="-15 Seconds" style="background:none;border:none;cursor:pointer;">↺ 15s</button>
            <button id="playPause" class="btn-play">▶</button>
            <button id="skipForward" title="+15 Seconds" style="background:none;border:none;cursor:pointer;">15s ↻</button>
            
            <div class="progress-wrapper">
                <span id="currentTime">0:00</span>
                <input type="range" id="progressBar" min="0" value="0" step="1">
                <span id="duration">0:00</span>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script>
        // --- 1. Audio Player & UI Setup ---
        const audio = document.getElementById('customAudio');
        const playerWrapper = document.getElementById('playerWrapper');
        const nowPlayingTitle = document.getElementById('nowPlayingTitle');
        const playPauseBtn = document.getElementById('playPause');
        const dailyContainer = document.getElementById('daily-shiurim-container');
        const selectedRabbiName = document.getElementById('selected-rabbi-name');
        const dynamicShiurList = document.getElementById('dynamic-shiur-list');

        // --- 2. The Cloud Fetch Function ---
        async function fetchShiurimFromCloud(rabbiName) {
            dailyContainer.style.display = 'block';
            selectedRabbiName.textContent = rabbiName + " - Today's Shiurim";
            dailyContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Show loading state
            dynamicShiurList.innerHTML = `<div style="text-align:center; padding: 20px; color: #777;">Fetching latest recordings...</div>`;

            try {
                // IMPORTANT: Replace 'YOUR_CLOUD_ENDPOINT_URL' below with the actual API URL.
                /* 
                const response = await fetch('YOUR_CLOUD_ENDPOINT_URL?rabbi=' + encodeURIComponent(rabbiName));
                const cloudData = await response.json(); 
                */

                // Simulated data for testing
                const simulatedCloudData = [
                    { title: "Hilchos Shabbos", category: "Halacha", url: "YOUR_CLOUD_AUDIO_LINK_1" },
                    { title: "Makkos Daf 2a", category: "Gemara", url: "YOUR_CLOUD_AUDIO_LINK_2" },
                    { title: "Elul Zman", category: "Hashkafa", url: "YOUR_CLOUD_AUDIO_LINK_3" }
                ];

                renderShiurim(simulatedCloudData);

            } catch (error) {
                console.error("Error fetching from Cloud:", error);
                dynamicShiurList.innerHTML = `<div style="color: red; padding: 20px;">Could not load Shiurim. Please try again.</div>`;
            }
        }

        // --- 3. Render the Automatically Generated Buttons ---
        function renderShiurim(shiurimArray) {
            dynamicShiurList.innerHTML = ''; 

            if (shiurimArray.length === 0) {
                dynamicShiurList.innerHTML = `<div style="padding: 20px; color: #777;">No new Shiurim uploaded for today yet.</div>`;
                return;
            }

            shiurimArray.forEach(shiur => {
                const row = document.createElement('div');
                row.className = 'shiur-row';
                
                row.innerHTML = `
                    <div><strong>${shiur.category}:</strong> ${shiur.title}</div>
                    <button onclick="playAudio('${shiur.title}', '${shiur.url}')">▶ Play</button>
                `;
                dynamicShiurList.appendChild(row);
            });
        }

        // --- 4. Trigger the Fetch when clicking a Rabbi ---
        function showShiurim(rabbiName) {
            fetchShiurimFromCloud(rabbiName);
        }

        // --- 5. Play Audio & Controls Logic ---
        function playAudio(title, audioUrl) {
            audio.src = audioUrl; 
            nowPlayingTitle.textContent = "Playing: " + title;
            playerWrapper.classList.add('active');
            
            audio.play().catch(e => console.log("Waiting for valid audio source link to be added.")); 
            playPauseBtn.innerHTML = '⏸';
        }

        function closePlayer() {
            audio.pause();
            playerWrapper.classList.remove('active');
        }

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.innerHTML = '⏸';
            } else {
                audio.pause();
                playPauseBtn.innerHTML = '▶';
            }
        });

        document.getElementById('skipBack').addEventListener('click', () => {
            audio.currentTime -= 15;
        });

        document.getElementById('skipForward').addEventListener('click', () => {
            audio.currentTime += 15;
        });

        const progressBar = document.getElementById('progressBar');
        audio.addEventListener('timeupdate', () => {
            progressBar.value = audio.currentTime;
            document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
        });

        audio.addEventListener('loadedmetadata', () => {
            progressBar.max = audio.duration;
            document.getElementById('duration').textContent = formatTime(audio.duration);
        });

        progressBar.addEventListener('input', () => {
            audio.currentTime = progressBar.value;
        });

        function formatTime(seconds) {
            if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }
    </script>
</body>
</html>
